import Link from "next/link";
import Image from "next/image";
import bannerImg from "@/assets/banner.png"; 

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-15">
      <div className="bg-[#18181b] rounded-3xl flex flex-col text-center md:text-left md:flex-row items-center justify-between gap-10 shadow-2xl border border-gray-800">
        
        <div className="flex-1 space-y-6">
          <p className="text-brand font-bold tracking-widest text-xs md:text-sm uppercase">
            Workout Library
          </p>
          
          <h1 className="font-oswald text-5xl md:text-6xl lg:text-7xl font-black uppercase  text-white">
            Train with intent. <br className="hidden md:block" /> Log every set.
          </h1>
          
          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed font-light">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
          </p>
          
          <div className="pt-4">
            <Link
              href="#library"
              className="inline-flex items-center gap-2 bg-brand text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-brand-hover transition-colors"
            >
              Browse Workouts
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end w-full">
          <Image
            src={bannerImg}
            alt="FitLog Hero"
            width={400}
            height={400}
            className="w-full max-w-[400px] h-auto object-contain drop-shadow-2xl"
            priority
          />
        </div>
        
      </div>
    </section>
  );
};

export default Banner;
