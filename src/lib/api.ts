import { WorkoutType } from "@/Types/fitType";

const BASE_URL = "https://api.abcz.workers.dev/api/fitlog";

// all data
export async function getAllWorkouts() {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
        throw new Error("Failed to fetch workouts");
    }
    return res.json();
}

// single data
export async function getWorkoutById(id: string | number) {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) {
        throw new Error("Failed to fetch workout details");
    }
    return res.json();
}
