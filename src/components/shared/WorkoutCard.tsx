import { WorkoutType } from "@/Types/fitType";
import { Clock, Flame, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface WorkoutCardProps {
  workout: WorkoutType;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <Link href={`/workout/${workout.id}`}>
      <div className="bg-[#18181b] border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition duration-300 group cursor-pointer h-full flex flex-col shadow-lg">
        
        <div className="w-full h-56 relative overflow-hidden bg-gray-900">
          <Image
            src={workout.image}
            alt={workout.name}
            width={400}
            height={400}
            className="object-cover group-hover:scale-105 transition duration-500 h-full w-full"
          />
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <div className="flex flex-wrap gap-2 mb-3">
            {workout.muscleGroups?.map((muscleGroup, index) => (
              <span
                key={index}
                className="bg-brand text-black text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
              >
                {muscleGroup}
              </span>
            ))}
          </div>

          <h3 className="font-oswald text-xl font-bold text-white uppercase mb-1 tracking-wide line-clamp-1">
            {workout.name}
          </h3>

          <p className="text-gray-400 text-sm mb-3 flex-grow line-clamp-2">
            {workout.equipment}
          </p>

          <div className="flex items-center gap-4 md:gap-5 text-[11px] md:text-xs font-semibold text-gray-300 border-t border-gray-800 pt-4 mt-auto">
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-gray-400" />
              {workout.duration} min
            </div>
            <div className="flex items-center gap-1.5">
              <Flame className="h-4 w-4 text-gray-400" />
              {workout.caloriesBurned} kcal
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-brand" />
              {workout.rating}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
