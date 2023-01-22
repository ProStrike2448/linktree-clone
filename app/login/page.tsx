"use client";

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
            placeholder="Enter your email"
            type="email"
            className="mt-4 w-40 focus:w-full hover:w-full duration-700 p-2 rounded-xl text-center"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Enter your name"
            type="text"
            className="mt-4 w-40 focus:w-full hover:w-full duration-700 p-2 rounded-xl text-center"
          />
          <input
            placeholder="Enter your password"
            type="password"
            className="mt-4 w-40 focus:w-full hover:w-full duration-700 p-2 rounded-xl text-center"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="mt-8 transition ease-in-out delay-150  bg-violet-800 rounded-full font-sans p-2 w-full text-slate-100 text-lg font-bold shadow-xl hover:text-green-400 hover:bg-violet-600 duration-300 animate-wiggle"
            onClick={auth === "signUp" ? signUpWithEmail : signInWithEmail}
          >
            Sign {auth === "signIn" ? "In" : "Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
