export default function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white rounded-lg shadow-xl p-12">
        <h1 className="text-3xl font-bold text-gray-800">Sign In</h1>
        <form className="mt-6">
          <div className="mt-4">
            <label className="block text-gray-800">Email</label>
            <input
              type="email"
              className="mt-2 p-2 rounded-xl border border-gray-300 w-full"
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-800">Password</label>
            <input
              type="password"
              className="mt-2 p-2 rounded-xl border border-gray-300 w-full"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-violet-800 rounded-full font-sans p-2 w-full text-slate-100 text-lg font-bold shadow-xl"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}