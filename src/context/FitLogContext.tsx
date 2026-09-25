"use client";

import { WorkoutType } from "@/Types/fitType";
import { createContext, useContext, useState, ReactNode } from "react";


interface FitLogContextType {
  plan: WorkoutType[];
  saved: WorkoutType[];
}

const FitLogContext = createContext<FitLogContextType | undefined>(undefined);

export const FitLogProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<WorkoutType[]>([]);
  const [saved, setSaved] = useState<WorkoutType[]>([]);

  return (
    <FitLogContext.Provider value={{ plan, saved }}>
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
