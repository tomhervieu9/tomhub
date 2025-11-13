import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-end justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="min-h-screen w-full max-w-3xl bg-white dark:bg-black flex-shrink-0">
        Welcome to my website.
      </main>
      <div className="absolute bottom-0 right-0 flex items-start justify-end w-[30vw]">
        <Image
          src="/images/portfolio-shot.png"
          alt="Profile Picture"
          width={500}
          height={350}
          priority
        />
      </div>
    </div>
  );
}
