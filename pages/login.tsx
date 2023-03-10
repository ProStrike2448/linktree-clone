import supabase from "@/utils/supabaseClient";
import Router from "next/router";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("signUp");
  const Router = useRouter();

  async function signUpWithEmail() {
    if (email && password) {
      const response = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (response.error) throw response.error;
      const userId = response.data.user?.id;
      console.log(`userId: ${userId}`);
    }
  }

  async function signInWithEmail() {
    if (email && password) {
      const response = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (response.error) throw response.error;
      const userId = response.data.user?.id;
      console.log(`userId: ${userId}`);
      Router.push(`{user}`);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-circles">
      <div className="bg-white rounded-lg shadow-xl p-12">
        <div className="flex justify-center items-center text-3xl font-bold text-gray-800 duration-500 space-x-2">
          <button
            disabled={auth === "signIn" ? true : false}
            className="opacity-25 disabled:opacity-100 duration-500"
            onClick={() => setAuth("signIn")}
          >
            Sign In
          </button>
          <h5>/</h5>
          <button
            disabled={auth === "signUp" ? true : false}
            className="opacity-25 disabled:opacity-100 duration-500"
            onClick={() => setAuth("signUp")}
          >
            Sign Up
          </button>
        </div>
        <form className="mt-6 flex flex-col justify-center items-center">
          <input
            placeholder="Email"
            type="email"
            className="mt-4 w-40 focus:w-full hover:w-full duration-700 p-2 rounded-xl text-center hover:text-slate-100 bg-slate-800 hover:bg-violet-600 focus:bg-violet-800"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Username"
            type="text"
            className="mt-4 w-40 focus:w-full hover:w-full duration-700 p-2 rounded-xl text-center bg-slate-800 hover:bg-fuchsia-600 focus:bg-fuchsia-800"
          />
          <input
            placeholder="Password"
            type="password"
            className="mt-4 w-40 focus:w-full hover:w-full duration-700 p-2 rounded-xl text-center bg-slate-800 hover:bg-orange-600 focus:bg-orange-800"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="group flex justify-center items-center mt-8 transition ease-in-out delay-150 bg-violet-800 rounded-full font-sans p-2 w-16 h-16 shadow-xl hover:bg-violet-600 animate-wiggle duration-1"
            onClick={auth === "signUp" ? signUpWithEmail : signInWithEmail}
            
          >
            <svg
              className="h-9 w-9 group-hover:fill-current group-hover:text-green-400"
              fill={"white"}
              width="800px"
              height="800px"
              viewBox="0 0 579.083 579.083"
            >
              <path
                d="M492.551,389.644c31.823-21.42,100.979-64.872,83.844-111.997c-19.584-52.632-89.964-94.248-134.028-124.236
		c-25.092-17.136-110.771-78.336-140.76-41.004c-1.836,1.836-2.448,4.896-1.836,7.344c-12.24,25.092-4.896,64.26-4.896,91.188
		c0,4.896,0,9.792,0,14.688c-89.963-0.612-187.883-29.988-275.399-4.284c-5.508,1.836-7.956,5.508-8.568,9.18
		c-0.612,0-1.224,0.612-1.836,0.612c-13.464,7.956-7.956,38.556-7.956,52.02c0,23.257-0.612,47.737,3.672,70.38
		c1.224,5.509,4.896,8.568,9.18,9.181c2.448,3.06,4.896,4.284,8.568,4.284c92.412-1.225,182.988-12.24,275.399-6.732
		c0,29.376-1.224,58.752-5.508,88.128c-0.612,3.672,0.611,6.732,1.836,9.18c-6.12,7.345,0.611,22.645,13.464,20.809
		C372.599,469.203,439.307,425.14,492.551,389.644z"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
