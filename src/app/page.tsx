import Header from "@/_components/Header";
import ServerStatus from "@/_components/ServerStatus";
import Sidebar from "@/_components/Sidebar";

export default function Home() {
  return (
    <div className="min-h-[100vh] min-w-[100vw] pl-32 pt-8">
      <Sidebar />
      <Header />
      <ServerStatus />
    </div>
  );
}
