"use client";

import { WorkoutType } from "@/Types/fitType";
import { useFitLog } from "@/context/FitLogContext";
import { Bookmark, Calendar, Check } from "lucide-react";

interface ActionButtonsProps {
  workout: WorkoutType;
}

const ActionButtons = ({ workout }: ActionButtonsProps) => {
  const { addToPlan, toggleSaved, isSaved, isInPlan } = useFitLog();

  const saved = isSaved(workout.id);
  const inPlan = isInPlan(workout.id);

  return (
    <div className="mt-auto pt-6 border-t border-gray-800 flex flex-col sm:flex-row gap-3">
      <button
        onClick={() => addToPlan(workout)}
        disabled={inPlan}
        className={`flex-1 py-3 px-4 cursor-pointer rounded-lg text-sm font-bold uppercase tracking-wide transition flex items-center justify-center gap-2 ${
          inPlan 
            ? "bg-gray-800 text-gray-500 cursor-not-allowed" 
            : "bg-brand text-black hover:bg-brand-hover"
        }`}
      >
        {inPlan ? (
          <>
            <Check className="h-4 w-4" /> In Plan
          </>
        ) : (
          <div className="flex justify-center items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Add to today's Plan</span>
          </div>
        )}
      </button>

      <button
        onClick={() => toggleSaved(workout)}
        className={`flex-1 py-3 px-4 cursor-pointer rounded-lg text-sm font-bold uppercase tracking-wide transition flex items-center justify-center gap-2 border ${
          saved
            ? "bg-white text-black border-white hover:bg-gray-200"
            : "border-gray-600 text-white hover:border-gray-400"
        }`}
      >
        <Bookmark className={`h-4 w-4 ${saved ? "fill-black" : ""}`} />
        {saved ? "Saved" : "Save"}
      </button>
    </div>
  );
};

export default ActionButtons;
