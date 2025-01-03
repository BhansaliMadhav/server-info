import Header from "@/_components/Header";
import MapPool from "@/_components/MapPool";
import ServerStatus from "@/_components/ServerStatus";
import Sidebar from "@/_components/Sidebar";

export default function Home() {
  return (
    <div className="overflow-auto min-w-[100vw] pl-32 pt-8">
      <Sidebar />
      <Header />
      <ServerStatus />
      <MapPool />
    </div>
  );
}
