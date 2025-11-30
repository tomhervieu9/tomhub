import { Host } from "@/components/host/Host";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Sidebar } from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="relative flex h-screen justify-center bg-zinc-50 font-sans dark:bg-black">
      <Sidebar />
      <Portfolio />
      <div className="absolute bottom-0 right-0 flex items-start justify-end w-[30vw]">
        <Host />
      </div>
    </div>
  );
}
