"server-only";

import { createServerClient } from "@/utils/supabase-server";
import { notFound } from "next/navigation";
import ProfileCard from "./ProfileCard";

//do not cache this page
export const revalidate = 0;

export default async function Profile({
  params,
}: {
  params: { username: string };
}) {
  const supabase = createServerClient();

  const { data, error } = await supabase
    .from("profiles")
    .select(`username, avatar_url, links (title, url)`)
    .eq("username", params.username)
    .single();

  if (error) console.log(error);

  if (!data) {
    return notFound();
  }
  // return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return <ProfileCard serverData={data} />;
}
