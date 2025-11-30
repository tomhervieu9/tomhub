import { Host } from "@/components/host/Host";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { UserPanel } from "@/components/user-panel/UserPanel";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen bg-zinc-50 font-sans dark:bg-black">
      <UserPanel className="md:order-1 order-2" />
      <Portfolio className="md:order-2 order-1" />
      <Host className="md:order-3 order-3" />
    </div>
  );
}
