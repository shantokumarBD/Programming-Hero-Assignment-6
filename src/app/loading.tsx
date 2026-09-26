import { Dumbbell } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center">
      <div className="relative flex items-center justify-center">
        <div className="absolute animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-brand"></div>
        <Dumbbell className="h-10 w-10 text-brand animate-pulse" />
      </div>
      <h2 className="mt-8 font-oswald text-2xl font-bold uppercase text-white tracking-widest animate-pulse">
        Loading...
      </h2>
    </div>
  );
}
