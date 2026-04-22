import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_left,_rgba(34,211,238,0.14),_transparent_24%),radial-gradient(circle_at_right,_rgba(30,64,175,0.18),_transparent_28%),linear-gradient(to_bottom,_#020617,_#020617)]" />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}