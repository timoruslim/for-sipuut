"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [coords, setCoords] = useState({
    x: 55.655,
    y: 83.753,
  });

  function preventDateRejectionMuahaha() {
    console.log("test");
    setCoords({
      ...coords,
      x: Math.random() * 100,
      y: Math.random() * 100,
    });
  }

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <header className="flex items-center justify-center gap-5">
          <h1 className="text-4xl font-bold">
            To celebratee, LES GO ON A DATEE!
          </h1>
          <Image src="/please.gif" width={100} height={0} alt=""></Image>
        </header>
        <section className="mt-10 flex flex-col items-center">
          <div className="flex gap-10">
            <div className="flex flex-col items-center">
              <Image src="/foto1.jpg" width={300} height={0} alt=""></Image>
              <p className="mt-3">wee foto bareeng</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/foto2.jpg" width={300} height={0} alt=""></Image>
              <p className="mt-3">we mamam DESERT </p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/foto3.jpg" width={267} height={0} alt=""></Image>
              <p className="mt-3">we pleeii kyk bocil so dum</p>
            </div>
          </div>
          <div className="flex gap-5">
            <button
              className="px-10 py-2 bg-pink-text mt-10 text-xl font-bold rounded-xl border-0 hover:bg-pink-hover hover:scale-110 mr-300"
              onClick={() => router.push("/date-accepted")}
            >
              MAAUUU!!
            </button>
            <button
              className="px-10 py-2 bg-black mt-10 text-xl rounded-xl opacity-0 pointer-events-none"
              onMouseEnter={() => preventDateRejectionMuahaha()}
            >
              males😔😔
            </button>
          </div>
        </section>
      </main>
      <button
        className={`px-10 py-2 bg-pink-text text-xl rounded-xl absolute`}
        style={{
          top: coords.y + "%",
          left: coords.x + "%",
          transform: "translate(-" + coords.x + "%, -" + coords.y + "%)",
        }}
        onMouseEnter={() => preventDateRejectionMuahaha()}
      >
        males😔😔
      </button>
    </div>
  );
}
