import { Host } from "@/components/host/Host";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Sidebar } from "@/components/sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-zinc-50 font-sans dark:bg-black">
      <Sidebar />
      <Portfolio />
      <Host />
    </div>
  );
}
