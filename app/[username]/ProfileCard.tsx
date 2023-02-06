"use client";

import { useSupabase } from "@/components/supabase-provider";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AddLinkForm from "./AddLinkForm";

type Link = {
  title: string;
  url: string;
};

type UserData = {
  id: string;
  username: string | null;
  avatar_url: string | null;
  links: Link[];
};

export default function ProfileCard({ serverData }: { serverData: UserData }) {
  const { supabase, session } = useSupabase();
  const [isUser, setIsUser] = useState(false);
  const [form, setForm] = useState(false);
  if 
  if (serverData.id === session.user?.id) { }
  return (
    <div className="min-h-screen bg-slate-800 flex items-center">
      <div className="container mx-auto p-10 backdrop-blur bg-white/25 max-w-md rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
        <section className="flex justify-center items-center gap-10">
          <div className="relative w-24 h-24">
            <Image
              src="https://pure.au.dk/portal/files/126962919/Nickolaj_Kristensen_PURE.jpg"
              alt="Profile Picture"
              fill={true}
              priority={true}
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="font-semibold text-white text-2xl self-center">
            {serverData.username}
          </h1>
        </section>
        <div className="flex flex-col justify-center items-center mt-6">
          {serverData.links?.map((link: Link, index: number) => (
            <Link
              className="text-white text-md text-center font-semibold bg-cyan-400 mt-2 py-2 w-11/12 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110"
              href={link.url}
              key={index}
            >
              {link.title}
            </Link>
          ))}
          {session && !form && (
            <button
              className="text-white text-md text-center font-bold bg-cyan-400 mt-2 py-2 w-11/12 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110"
              onClick={() => setForm(!form)}
            >
              +
            </button>
          )}
          {form && <AddLinkForm />}
        </div>
      </div>
    </div>
  );
}
