import Link from "next/link";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/actions/user.action";

async function Navbar() {
  const user = await currentUser();
  if (user) await syncUser();

  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold font-mono tracking-wider bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-purple-800 transition-all duration-300"
            >
              SLANGS AND FLUENCY
            </Link>
          </div>

          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
