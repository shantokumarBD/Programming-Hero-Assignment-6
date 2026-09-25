import { Dumbbell } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Dumbbell className="h-6 w-6 text-brand" />
          <span className="font-oswald font-bold text-xl uppercase tracking-wider text-white">
            FitLog
          </span>
        </div>

        {/* Copyright Text */}
        <p className="text-gray-500 text-sm text-center md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
