"use client";

import { useSupabase } from "@/components/supabase-provider";

export default function AddLinkForm() {
  const { supabase, session } = useSupabase();
  async function AddNewLink() {
    if (session && title && url) {
      const { data, error } = await supabase.from("links").insert([
        {
          title: "title",
          url: "url",
          username: session.user?.id,
        },
      ]);
      if (error) {
        console.log({ error });
      }
      console.log({ data });
    }
  }
  return (
    <form className="flex flex-col justify-center items-center mt-6">
      <input
        className="text-white text-md text-center font-semibold bg-cyan-400 mt-2 py-2 w-11/12 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110"
        type="text"
        placeholder="Title"
      />
      <input
        className="text-white text-md text-center font-semibold bg-cyan-400 mt-2 py-2 w-11/12 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110"
        type="text"
        placeholder="URL"
      />
      <button
        className="text-white text-md text-center font-bold bg-cyan-400 mt-2 py-2 w-11/12 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110"
        type="submit"
      >
        +
      </button>
    </form>
  );
}
