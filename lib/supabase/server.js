// ============================================================
// lib/supabase/server.js
// Server-side Supabase client — use in Server Components,
// Route Handlers, and Server Actions.
// ============================================================
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

/**
 * Creates a Supabase client for use in Server Components.
 * Forwards cookies so auth sessions are available server-side.
 *
 * Usage (in any async Server Component or Route Handler):
 *   import { createClient } from "@/lib/supabase/server";
 *   const supabase = await createClient();
 *   const { data: { user } } = await supabase.auth.getUser();
 */
export async function createClient() {
    const cookieStore = await cookies();

    return createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) => {
                            cookieStore.set(name, value, options);
                        });
                    } catch {
                        // setAll called from a Server Component — safe to ignore.
                        // Middleware handles session refresh instead.
                    }
                },
            },
        }
    );
}
