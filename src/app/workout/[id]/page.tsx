import ActionButtons from '@/components/details/ActionButtons';
import { getWorkoutById } from '@/lib/api';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

const page = async ({params}: PageProps) => {
    const {id} = await params;
    const workout = await getWorkoutById(id);

    if(!workout) {
        notFound()
    }
  return (
        <div className="container mx-auto px-4 py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        
        {/* Left Side: Large Image */}
        <div className="lg:w-1/2">
          <div className="relative w-full aspect-square  rounded-2xl overflow-hidden  border border-gray-800">
            <Image
              src={workout.image}
              alt={workout.name}
              width={800}
              height={800}
              className="object-cover "
              priority
            />
          </div>
        </div>
        {/* Right Side: Content */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          
          <h1 className="font-oswald text-4xl lg:text-5xl font-black uppercase text-white mb-4">
            {workout.name}
          </h1>
          <p className="text-gray-400 text-base leading-relaxed mb-6 font-light">
            {workout.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {workout.muscleGroups?.map((tag, index) => (
              <span key={index} className="bg-brand text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                {tag}
              </span>
            ))}
          </div>
          <div className="bg-[#18181b] rounded-2xl p-6 mb-8 flex flex-col gap-4 text-sm shadow-lg border border-gray-800">
            <div className="flex justify-between border-b border-gray-800 pb-3">
              <span className="text-gray-500 font-bold uppercase tracking-wider text-xs">Equipment</span>
              <span className="text-gray-200">{workout.equipment}</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-3">
              <span className="text-gray-500 font-bold uppercase tracking-wider text-xs">Difficulty</span>
              <span className="text-gray-200">{workout.difficulty}</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-3">
              <span className="text-gray-500 font-bold uppercase tracking-wider text-xs">Sets</span>
              <span className="text-gray-200">{workout.sets}</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-3">
              <span className="text-gray-500 font-bold uppercase tracking-wider text-xs">Reps</span>
              <span className="text-gray-200">{workout.reps}</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-3">
              <span className="text-gray-500 font-bold uppercase tracking-wider text-xs">Duration</span>
              <span className="text-gray-200">{workout.duration} min</span>
            </div>
            <div className="flex justify-between border-b border-gray-800 pb-3">
              <span className="text-gray-500 font-bold uppercase tracking-wider text-xs">Calories</span>
              <span className="text-gray-200">{workout.caloriesBurned} kcal</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 font-bold uppercase tracking-wider text-xs">Rating</span>
              <span className="text-gray-200">{workout.rating}</span>
            </div>
          </div>
          <div className="mb-6">
            <h2 className="text-gray-200 font-bold mb-2">Instructions</h2>
            <ul className="space-y-3 text-gray-400 text-sm">
              {workout.instructions?.map((step, index) => (
                <li key={index} className="leading-relaxed">
                  <span className="font-bold text-gray-500 mr-1">{index + 1}.</span> {step}
                </li>
              ))}
            </ul>
          </div>

          {/* <ActionButtons workout={workout} /> */}
          
        </div>
      </div>
    </div>
  );
}

export default page;