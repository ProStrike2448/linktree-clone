import Router from "next/router";
import { useEffect, useState } from  "react";
import supabase from "../utils/supabaseClient" 

export default function Home() {
  const [isAuthentificated, setIsAuthenticated] = useState<boolean>(false); 
  const [userId, setUserId] = useState<string | undefined>();
  useEffect(() =>{
    const getUser = async() =>{
      const user = await supabase.auth.getUser();
      console.log("user", user)
      if (user){
        const userId = user.data.user?.id;
        setIsAuthenticated(true); 
        setUserId(userId);
      }
    };

    getUser();
  }, []);
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-circles bg-center">
      <button
        type="button"
        className="bg-violet-800 rounded-full font-sans p-6 w-96 text-slate-100 text-lg font-bold shadow-xl animate-bounce"
        onClick={() => Router.push("/login")}
      >
        Sign In
      </button>
    </div>
  );
}
