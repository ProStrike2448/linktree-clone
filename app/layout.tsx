import "server-only";

import SupabaseListener from "@/components/supabase-listener";
import SupabaseProvider from "@/components/supabase-provider";
// These styles apply to every route in the application
import "@/styles/globals.css";
import { createServerClient } from "@/utils/supabase-server";

import Login from "@/components/login";
import { Database } from "@/lib/database.types";
import type { SupabaseClient } from "@supabase/auth-helpers-nextjs";

export type TypedSupabaseClient = SupabaseClient<Database>;

// do not cache this layout
export const revalidate = 0;

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-slate-900">
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <Login />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
}
