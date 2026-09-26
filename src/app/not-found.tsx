import Link from "next/link";
import { Dumbbell } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <Dumbbell className="h-24 w-24 text-gray-800 mb-6" />
      <h1 className="font-oswald text-7xl font-black text-brand mb-4">404</h1>
      <h2 className="font-oswald text-3xl font-bold text-white uppercase tracking-wide mb-4">
        Workout Not Found
      </h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Looks like you lifted too heavy and broke the URL. The page you are looking for doesn't exist!
      </p>
      <Link 
        href="/" 
        className="bg-brand text-black font-bold uppercase px-8 py-3.5 rounded-full hover:bg-brand-hover transition-colors text-sm"
      >
        Return to Home
      </Link>
    </div>
  );
}
