// ============================================================
// lib/supabase/client.js
// Browser-side Supabase client — use in 'use client' components
// ============================================================
import { createBrowserClient } from "@supabase/ssr";

/**
 * Creates a Supabase client for use in Client Components.
 * Reads credentials from NEXT_PUBLIC_* env vars (safe to expose).
 *
 * Usage:
 *   import { createClient } from "@/lib/supabase/client";
 *   const supabase = createClient();
 *   const { data } = await supabase.from("profiles").select("*");
 */
export function createClient() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    );
}
