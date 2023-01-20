import Router from "next/router";

export default function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white rounded-lg shadow-xl p-12">
        <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>
        <form className="mt-6">
          <div className="mt-4">
            <label className="block text-gray-800">Email</label>
            <input
              placeholder="Enter your email"
              type="email"
              className="mt-2 p-2 rounded-xl border border-gray-300 w-full"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-800">User name</label>
            <input
              placeholder="Enter your name"
              type="text"
              className="mt-2 p-2 rounded-xl border border-gray-300 w-full placeholder-grey-800"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-800">Password</label>
            <input
              placeholder="Enter your password"
              type="password"
              className="mt-2 p-2 rounded-xl border border-gray-300 w-full placeholder-grey-800 mb-4"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="transition ease-in-out delay-150  bg-violet-800 rounded-full font-sans p-2 w-full text-slate-100 text-lg font-bold shadow-xl hover:-translate-y-1 hover:scale-300 hover:text-green-400 hover:bg-violet-600 duration-300 "
              onClick={() => Router.push("/")}
              >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}