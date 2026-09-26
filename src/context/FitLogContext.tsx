"use client";

import { WorkoutType } from "@/Types/fitType";
import { createContext, useContext, useState, ReactNode } from "react";
import toast from "react-hot-toast";

interface FitLogContextType {
  plan: WorkoutType[];
  saved: WorkoutType[];
  addToPlan: (workout: WorkoutType) => void;
  toggleSaved: (workout: WorkoutType) => void;
  isSaved: (id: number) => boolean;
  isInPlan: (id: number) => boolean;
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

export const FitLogProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<WorkoutType[]>([]);
  const [saved, setSaved] = useState<WorkoutType[]>([]);

  const addToPlan = (workout: WorkoutType) => {
    if (!plan.find((item) => item.id === workout.id)) {
      setPlan([...plan, { ...workout, isDone: false }]);
      toast.success("Added to today's plan!");
    } else {
      toast.error("Already in your plan!");
    }
  };

  // 
  const toggleSaved = (workout: WorkoutType) => {
    if (saved.find((item) => item.id === workout.id)) {
      setSaved(saved.filter((item) => item.id !== workout.id));
      toast.success("Removed from saved items");
    } else {
      setSaved([...saved, workout]);
      toast.success("Workout saved!");
    }
  };

  const isSaved = (id: number) => saved.some((item) => item.id === id);
  const isInPlan = (id: number) => plan.some((item) => item.id === id);


  const contextValue = {
    plan, 
    saved, 
    addToPlan, 
    toggleSaved, 
    isSaved, 
    isInPlan
  };

  return (
    <FitLogContext.Provider
      value={contextValue}
    >
      {children}
    </FitLogContext.Provider>
  );
};

// custom hook 
export const useFitLog = () => {
  const context = useContext(FitLogContext);
  if (!context) {
    throw new Error("useFitLog must be used within a FitLogProvider");
  }
  return context;
};
