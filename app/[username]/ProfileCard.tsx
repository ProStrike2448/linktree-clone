"use client";

import Image from "next/image";

export default function ProfileCard({serverData}) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="backdrop-blur bg-white/25 rounded-lg shadow-xl w-80 h-96 p-6 flex justify-center gap-8">
        <div className="flex justify-center h-20 gap-8">
          <Image
            src="https://pure.au.dk/portal/files/126962919/Nickolaj_Kristensen_PURE.jpg"
            alt="Profile Picture"
            width={80}
            height={80}
            priority={true}
            className="object-cover rounded-full overflow-hidden"
          />
          <h1 className="font-semibold text-white text-2xl self-center">
            {serverData.username}
          </h1>
        </div>
      </div>
    </div>
  );
}
