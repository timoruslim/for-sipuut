"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  });

  function preventDateRejectionMuahaha() {
    let maxWidth = window.innerWidth - 200;
    let maxHeight = window.innerHeight - 120;
    console.log(maxWidth);
    console.log(maxHeight);
    setCoords({
      ...coords,
      x: Math.floor((Math.random() - 0.55) * maxWidth),
      y: Math.floor((Math.random() - 0.85) * maxHeight),
    });
  }

  return (
    <div className="w-screen h-screen">
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
          <div className="flex flex-row gap-5">
            <button
              className="px-10 py-2 bg-pink-text mt-10 text-xl font-bold rounded-xl border-0 hover:bg-pink-hover hover:scale-110"
              onClick={() => router.push("/date-accepted")}
            >
              MAAUUU!!
            </button>
            <button
              className="px-10 py-2 bg-pink-text mt-10 text-xl font-bold rounded-xl border-0"
              style={{
                transform: "translate(" + coords.x + "px, " + coords.y + "px)",
              }}
              onMouseEnter={() => preventDateRejectionMuahaha()}
            >
              males😔
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
