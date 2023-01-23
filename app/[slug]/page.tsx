"use client";

import supabase from "@/utils/supabaseClient";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function User() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | undefined>("");
  useEffect(() => {
    const getUser = async () => {
      const user = await supabase.auth.getUser();
      console.log(user);
      if (user) {
        const userId = user.data.user?.id;
        setIsAuthenticated(true);
        setUserId(userId);
      }
    };
    getUser();
  }, []);
  return (
    <div className="flex justify-center content-center ">
      <Image
        src="/test.jpg"
        alt="Profile Picture"
        width={160}
        height={160}
        className="rounded-full overflow-hidden"
      />

      <h1>{"Nickolaj"}</h1>
    </div>
  );
}
