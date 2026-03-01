// ============================================================
// middleware.js — Session refresh for Supabase Auth
// Placed at project root so it runs on every request.
// See: https://supabase.com/docs/guides/auth/server-side/nextjs
// ============================================================
import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

export async function middleware(request) {
    let supabaseResponse = NextResponse.next({ request });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                getAll() {
                    return request.cookies.getAll();
                },
                setAll(cookiesToSet) {
                    cookiesToSet.forEach(({ name, value }) =>
                        request.cookies.set(name, value)
                    );
                    supabaseResponse = NextResponse.next({ request });
                    cookiesToSet.forEach(({ name, value, options }) =>
                        supabaseResponse.cookies.set(name, value, options)
                    );
                },
            },
        }
    );

    // Refresh the session so it doesn't expire mid-session.
    // IMPORTANT: do not add any logic between createServerClient and
    // supabase.auth.getUser() — it can break session refresh.
    await supabase.auth.getUser();

    return supabaseResponse;
}

export const config = {
    matcher: [
        // Skip static files, images, and Next.js internals
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};
