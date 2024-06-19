import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <header>
        <h1 className="text-4xl font-bold">WOHOOO, thanksss :D</h1>
      </header>
      <section className="mt-10 flex flex-col items-center">
        <div className="flex gap-5">
          <Image src="/thanks.gif" width={400} height={0} alt=""></Image>
          <Image src="/pic2.jpg" width={300} height={0} alt=""></Image>
          <Image src="/dance.gif" width={400} height={0} alt=""></Image>
        </div>
        <p className="mt-5">see u selasaaa😌😌😌</p>
      </section>
    </main>
  );
}
