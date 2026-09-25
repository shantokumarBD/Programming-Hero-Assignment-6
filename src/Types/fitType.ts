export interface WorkoutType {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  calories: number;
  sets: number;
  reps: string;
  rating: number;
  description: string;
  instructions: string[];
  isDone?: boolean;
}
