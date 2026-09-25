import Link from "next/link";
import { Dumbbell, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="border-b border-gray-800 bg-[#111827] sticky top-0 z-50">
      <nav className="navbar max-w-7xl mx-auto px-4">
        
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0 pr-3">
              <Menu className="h-6 w-6 text-white" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#1f2937] text-white rounded-box z-[1] mt-3 w-52 p-2 shadow border border-gray-700"
            >
              <li><Link href="#">Workout</Link></li>
              <li><Link href="/my-plan">My Plan</Link></li>
            </ul>
          </div>
          
          <Link href="/" className="flex items-center gap-2 font-oswald text-xl md:text-2xl font-bold uppercase tracking-wide text-white">
            <Dumbbell className="h-6 w-6 md:h-7 md:w-7 text-brand" />
            FitLog
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-gray-300 font-semibold uppercase text-sm gap-2">
            <li><Link href="#">Workout</Link></li>
            <li><Link href="/my-plan">My Plan</Link></li>
          </ul>
        </div>

        <div className="navbar-end flex gap-2 md:gap-3">
          <Link href="/my-plan" className="flex items-center gap-1 md:gap-2 text-white font-bold text-xs md:text-sm">
            <span>Plan</span>
            <span className="bg-brand text-black text-[10px] md:text-xs px-2 py-0.5 badge rounded-full">0</span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-1 md:gap-2 text-white font-bold text-xs md:text-sm hover:border-gray-400">
            <span>Saved</span>
            <span className="badge text-white text-[10px] md:text-xs px-2 py-0.5 rounded-full border-gray-600">0</span>
          </Link>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
