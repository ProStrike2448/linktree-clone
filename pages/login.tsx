import supabase from "@/utils/supabaseClient";
import Router from "next/router";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState("signUp");

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
      Router.push("/");
    }
  }
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white rounded-lg shadow-xl p-12">
        <div className="flex justify-center items-center text-3xl font-bold text-gray-800 duration-500">
          <button disabled={auth === "signIn" ? true : false} className="disabled:opacity-25 duration-500" onClick={() => setAuth("signIn")}>Sign In</button>
          <h5>/</h5>
          <button disabled={auth === "signUp" ? true : false} className="disabled:opacity-25 duration-500" onClick={() => setAuth("signUp")}>Sign Up</button>
        </div>
        <form className="mt-6">
          <div className="mt-4">
            <label className="block text-gray-800">Email</label>
            <input
              type="email"
              className="mt-2 p-2 rounded-xl border border-gray-300 w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-800">Password</label>
            <input
              type="password"
              className="mt-2 p-2 rounded-xl border border-gray-300 w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="bg-violet-800 rounded-full font-sans p-2 w-full text-slate-100 text-lg font-bold shadow-xl"
              onClick={auth === "signUp" ? signUpWithEmail : signInWithEmail}
            >
              Sign {auth === "signIn" ? "In" : "Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
