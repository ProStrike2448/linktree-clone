import supabase from "@/utils/supabaseClient";
import { useEffect, useState } from "react";

type Link = {
  title:string;
  url:string;
}

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | undefined>("");
  const[title, setTitle] = useState<string | undefined>();
  const [url, setUrl] = useState<string | undefined>();
  const [links, setLinks] = useState<Link[]>();
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

  useEffect(() => {
    const getLinks = async () => {
      try{
      const {data, error} = await supabase.from("links").select("title, url").eq("user_id", userId);
      if (error) throw error;
      setLinks(data)
      }catch (error){
        console.log("error: ", error);
      }
    };
    if (userId) {
      getLinks()
    }
  }, [userId ]);


  const addNewLink = async () => {
    try{
      if (title && url && userId) {
        const { data, error } = await supabase.from("links").insert({
          title: title,
          url: url,
          user_id: userId
        }).select(); 
        if (error) throw error;
        console.log("data: ", data);
        if (links){
          setLinks([...data, ...links])
        }
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return(
    <div className="flex flex-col justify-center items-center mt-64">
      {links?.map((link: Link, index: number) => (
        <div key={index}
        className = "rounded-lg shadow-lg shadow-cyan-500/50 w-96 bg-violet-600 mt-4 p-1 text-center"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = link.url;
        }}
        >
          {link.title}
        </div>
      ))}
      { isAuthenticated && (
    <>
      <div className="mt-4">
        <div
          className="block text-sm font-medium text-gray-700 "
        >
          Title
        </div>
        <input
        type = "text"
        name = "title"
        id = "title"
        className = "w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 "
        placeholder="My link" 
        onChange={(e) => setTitle(e.target.value)}/>     
      </div>  


      <div className="mt-4">
        <div
          className="block text-sm font-medium text-gray-700 "
        >
          URL
        </div>
        <input
        type = "text"
        name = "url"
        id = "url"
        className = " w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 "
        placeholder="https://www.youtube.com/watch?v=Pbr7M4c9O3Q&t=1497s" 
        onChange={(e) => setUrl(e.target.value)}/>     
      </div>  


      <button
        type="button"
        className="bg-violet-800 rounded-full font-sans p-6 w-96 text-slate-100 text-lg font-bold shadow-xl mt-8"
        onClick={addNewLink}
        >
          Add link
      </button>
      </> 
    )}
    </div>

  )
}