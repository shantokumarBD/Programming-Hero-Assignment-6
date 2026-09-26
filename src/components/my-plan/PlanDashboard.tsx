"use client";

import { useFitLog } from "@/context/FitLogContext";
import { Clock, Flame, Star, X, Check, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PlanDashboard() {
  const { plan, saved, isLoaded, markAsDone, removeFromPlan, toggleSaved } =
    useFitLog();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [searchQuery, setSearchQuery] = useState("");

  const [sortBy, setSortBy] = useState<
    "none" | "duration" | "calories" | "rating"
  >("none");

  const displayList = activeTab === "plan" ? plan : saved;

  const filteredList = searchQuery.trim()
    ? displayList.filter(
        (w) =>
          w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          w.muscleGroups?.some((g) =>
            g.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : displayList;

  const sortedList =
    sortBy === "none"
      ? filteredList
      : [...filteredList].sort((a, b) => {
          if (sortBy === "duration") return b.duration - a.duration;
          if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
          if (sortBy === "rating") return b.rating - a.rating;
          return 0;
        });

  const totalExercises = plan.length;
  const totalMinutes = plan.reduce((sum, workout) => sum + workout.duration, 0);
  const totalCalories = plan.reduce(
    (sum, workout) => sum + workout.caloriesBurned,
    0,
  );

  if (!isLoaded) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-white text-xl font-oswald animate-pulse">
          Loading workouts...
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      {/* Stats Block */}
      <div className="bg-[#18181b] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center mb-8 border border-gray-800 gap-6 md:gap-0">
        <div className="flex-1 w-full md:border-r border-gray-800 px-4 text-center md:text-left">
          <p className="text-gray-500 text-xs font-semibold mb-1 uppercase tracking-wider">
            Exercises
          </p>
          <p className="text-brand font-oswald text-5xl font-black">
            {totalExercises}
          </p>
        </div>

        <div className="flex-1 w-full md:border-r border-gray-800 px-4 md:pl-12 text-center md:text-left">
          <p className="text-gray-500 text-xs font-semibold mb-1 uppercase tracking-wider">
            Minutes
          </p>
          <p className="text-white font-oswald text-5xl font-black">
            {totalMinutes}
          </p>
        </div>

        <div className="flex-1 w-full px-4 md:pl-12 text-center md:text-left">
          <p className="text-gray-500 text-xs font-semibold mb-1 uppercase tracking-wider">
            Calories
          </p>
          <p className="text-white font-oswald text-5xl font-black">
            {totalCalories}
          </p>
        </div>
      </div>

      {/* Tabs and Sorting */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <div className="flex gap-2 bg-[#18181b] p-1 rounded-xl border border-gray-800">
          <button
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition ${activeTab === "plan" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"}`}
            onClick={() => setActiveTab("plan")}
          >
            Today's Plan
          </button>
          <button
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition ${activeTab === "saved" ? "bg-gray-800 text-white" : "text-gray-400 hover:text-white"}`}
            onClick={() => setActiveTab("saved")}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-gray-400 text-sm">Sort By</span>
          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as "none" | "duration" | "calories" | "rating",
              )
            }
            className="bg-[#18181b] text-white text-sm font-medium border border-gray-800 rounded-lg px-4 py-2 outline-none cursor-pointer"
          >
            <option value="none">Default</option>
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search by name or muscle group..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-[#18181b] text-white text-sm border border-gray-800 rounded-xl pl-10 pr-4 py-3 outline-none focus:border-brand transition placeholder:text-gray-600"
        />
      </div>

      {/* List */}
      {sortedList.length === 0 ? (
        <div className="border border-dashed border-gray-800 rounded-3xl py-24 flex flex-col items-center justify-center text-center mt-4">
          <h3 className="font-oswald text-2xl uppercase font-black text-white mb-2">
            Nothing Here Yet
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/#library"
            className="bg-brand text-black font-bold uppercase px-8 py-3 rounded-full hover:bg-brand-hover transition-colors text-sm"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {sortedList.map((workout) => (
            <div
              key={workout.id}
              className="bg-[#18181b] rounded-2xl p-4 flex flex-col lg:flex-row items-center gap-6 border border-gray-800 hover:border-gray-600 transition-all"
            >
              <div className="relative w-full lg:w-48 h-32 lg:h-24 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={workout.image}
                  alt={workout.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-grow flex flex-col w-full text-center lg:text-left">
                <h3
                  className={`font-oswald text-xl uppercase font-bold mb-1 ${workout.isDone && activeTab === "plan" ? "text-gray-500 line-through" : "text-white"}`}
                >
                  {workout.name}
                </h3>
                <p className="text-gray-500 text-sm mb-2 line-clamp-1">
                  {workout.equipment}
                </p>

                <div className="flex items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3 w-3 text-brand" /> {workout.duration}{" "}
                    min
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Flame className="h-3 w-3 text-brand" />{" "}
                    {workout.caloriesBurned} kcal
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Star className="h-3 w-3 text-brand" /> {workout.rating}
                  </span>
                </div>
              </div>

              {/* Button Section */}
              <div className="flex items-center gap-3 w-full lg:w-auto justify-center lg:justify-end mt-4 lg:mt-0 flex-shrink-0">
                <Link
                  href={`/workout/${workout.id}`}
                  className="whitespace-nowrap border border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 px-5 py-2.5 rounded-full text-xs font-semibold transition-colors"
                >
                  View Details
                </Link>

                {activeTab === "plan" && (
                  <button
                    onClick={() => markAsDone(workout.id)}
                    disabled={workout.isDone}
                    className={`whitespace-nowrap flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-colors ${
                      workout.isDone
                        ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                        : "bg-brand text-black hover:bg-brand-hover"
                    }`}
                  >
                    <Check className="w-4 h-4 flex-shrink-0" />
                    {workout.isDone ? "Done!" : "Mark as Done"}
                  </button>
                )}

                <button
                  onClick={() =>
                    activeTab === "plan"
                      ? removeFromPlan(workout.id)
                      : toggleSaved(workout)
                  }
                  className="p-2 text-gray-500 hover:text-red-500 transition-colors flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
