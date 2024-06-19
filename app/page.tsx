"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <header>
        <h1 className="text-4xl font-bold">Haii sipuut :D</h1>
      </header>
      <section className="mt-10 flex flex-col items-center">
        <div className="flex gap-5">
          <Image src="/yey.gif" width={450} height={0} alt=""></Image>
          <Image src="/pic1.jpg" width={300} height={0} alt=""></Image>
          <Image src="/smile.gif" width={450} height={0} alt=""></Image>
        </div>
        <p className="mt-5">so pro slesai uas😎😎😎</p>
        <button
          className="px-10 py-2 bg-pink-text mt-10 text-xl font-bold rounded-xl border-0 hover:bg-pink-hover hover:scale-110"
          onClick={() => router.push("/ask-to-date")}
        >
          YEYYYY!
        </button>
      </section>
    </main>
  );
}
