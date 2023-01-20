import Router from "next/router";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white rounded-lg shadow-xl p-12 w-80 duration-700">
        <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>
        <form className="mt-6 ">
          <div className="mt-4 flex justify-left items-left">
            <input
              placeholder="Enter your email"
              type="email"
              className="mt-2 w-40 focus:w-full hover:w-full duration-700 p-2 rounded-xl"
            />
          </div>
          <div className="mt-4 flex justify-left items-center">
            <input
              placeholder="Enter your name"
              type="text"
              className="mt-2 w-40 focus:w-full hover:w-full duration-700 p-2 rounded-xl"
            />
          </div>
          <div className="mt-4 flex justify-left items-center">
            <input
              placeholder="Enter your password"
              type="password"
              className="mt-2 w-40 focus:w-full hover:w-full duration-700 p-2 rounded-xl mb-4"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="transition ease-in-out delay-150  bg-violet-800 rounded-full font-sans p-2 w-full text-slate-100 text-lg font-bold shadow-xl hover:text-green-400 hover:bg-violet-600 duration-300 animate-[wiggle_1s_ease-in-out_infinite]"
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