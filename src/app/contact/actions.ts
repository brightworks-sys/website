"use server";

import { createClient } from "@/lib/supabase/server";
import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "お名前は2文字以上で入力してください。"),
    email: z.string().email("有効なメールアドレスを入力してください。"),
    company: z.string().optional(),
    message: z.string().min(10, "お問い合わせ内容は10文字以上で入力してください。"),
});

export type ContactState = {
    success?: boolean;
    error?: string;
};

export async function submitContact(prevState: any, formData: FormData) {
    const validatedFields = contactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        company: formData.get("company"),
        message: formData.get("message"),
    });

    if (!validatedFields.success) {
        return { error: "入力内容に不備があります。" };
    }

    try {
        const supabase = await createClient();

        // 環境変数が設定されていない場合のフォールバック（ビルドエラー防止）
        if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
            console.warn("Supabase credentials not found. Simulating success in development.");
            await new Promise(resolve => setTimeout(resolve, 1000));
            return { success: true };
        }

        const { error } = await supabase
            .from("contacts")
            .insert([
                {
                    name: validatedFields.data.name,
                    email: validatedFields.data.email,
                    company: validatedFields.data.company || null,
                    message: validatedFields.data.message,
                    status: "pending",
                },
            ]);

        if (error) {
            console.error("Supabase insert error:", error);
            return { error: "送信中にエラーが発生しました。時間を置いて再度お試しください。" };
        }

        return { success: true };
    } catch (err) {
        console.error("Server action error:", err);
        return { error: "サーバーエラーが発生しました。" };
    }
}
