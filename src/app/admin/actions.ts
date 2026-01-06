"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function updateContactStatus(id: string, status: string) {
    const supabase = await createClient();

    const { error } = await supabase
        .from("contacts")
        .update({ status })
        .eq("id", id);

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/admin/contacts");
}

export async function createNews(formData: FormData) {
    const supabase = await createClient();

    const title = formData.get("title") as string;
    const category = formData.get("category") as string;
    const content = formData.get("content") as string;

    const { error } = await supabase.from("news").insert({
        title,
        category,
        content,
        published_at: new Date().toISOString(),
    });

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath("/news");
    revalidatePath("/admin/news");
}
