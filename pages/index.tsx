import Router from "next/router";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
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
``;
