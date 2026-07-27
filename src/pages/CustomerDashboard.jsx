import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import SearchBar from "../components/dashboard/SearchBar";

export default function CustomerDashboard() {
  return (
    <div className="min-h-screen bg-slate-950 flex">

      <Sidebar />

      <main className="flex-1 p-8">

        <Topbar />

        <div className="mt-8">
          <WelcomeCard />
        </div>

        <div className="mt-8">
          <SearchBar />
        </div>

      </main>

    </div>
  );
}