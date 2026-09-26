"use client";

import { WorkoutType } from "@/Types/fitType";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import toast from "react-hot-toast";

interface FitLogContextType {
  plan: WorkoutType[];
  saved: WorkoutType[];
  isLoaded: boolean;
  addToPlan: (workout: WorkoutType) => void;
  removeFromPlan: (id: number) => void;
  toggleSaved: (workout: WorkoutType) => void;
  isSaved: (id: number) => boolean;
  isInPlan: (id: number) => boolean;
  markAsDone: (id: number) => void;
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

export const FitLogProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<WorkoutType[]>([]);
  const [saved, setSaved] = useState<WorkoutType[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const localPlan = localStorage.getItem("fitlog_plan");
    const localSaved = localStorage.getItem("fitlog_saved");
    
    if (localPlan) setPlan(JSON.parse(localPlan));
    if (localSaved) setSaved(JSON.parse(localSaved));
    
    setIsLoaded(true);
  }, []);

  // Save to local storage whenever state changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("fitlog_plan", JSON.stringify(plan));
      localStorage.setItem("fitlog_saved", JSON.stringify(saved));
    }
  }, [plan, saved, isLoaded]);

  const addToPlan = (workout: WorkoutType) => {
    if (plan.length >= 5) {
      toast.error("Plan is full! Max 5 lifts per day.");
      return;
    }
    if (!plan.find((item) => item.id === workout.id)) {
      setPlan([...plan, { ...workout, isDone: false }]);
      toast.success("Added to today's plan!");
    } else {
      toast.error("Already in your plan!");
    }
  };

  const removeFromPlan = (id: number) => {
    setPlan(plan.filter((item) => item.id !== id));
    toast.success("Removed from plan");
  };

  const markAsDone = (id: number) => {
    setPlan(
      plan.map((item) =>
        item.id === id ? { ...item, isDone: true } : item
      )
    );
    toast.success("Workout marked as completed!");
  };

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
    isLoaded,
    addToPlan, 
    removeFromPlan,
    toggleSaved, 
    isSaved, 
    isInPlan,
    markAsDone
  };

  return (
    <FitLogContext.Provider value={contextValue}>
      {children}
    </FitLogContext.Provider>
  );
};

export const useFitLog = () => {
  const context = useContext(FitLogContext);
  if (!context) {
    throw new Error("useFitLog must be used within a FitLogProvider");
  }
  return context;
};
