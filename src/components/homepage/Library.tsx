import { getAllWorkouts } from "@/lib/api";
import WorkoutCard from "../shared/WorkoutCard";
import { WorkoutType } from "@/Types/fitType";

const Library = async () => {
  const workouts = await getAllWorkouts();

  return (
    <section id="library" className="max-w-7xl mx-auto py-16 px-4">
      <div className="mb-8 text-center md:text-left">
        <h2 className="font-oswald text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white mb-2 tracking-wide">
          The Library
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Twelve lifts covering every major muscle group.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {workouts?.map((workout: WorkoutType) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default Library;
