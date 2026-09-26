import PlanDashboard from "@/components/my-plan/PlanDashboard";

export default function MyPlanPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="font-oswald text-4xl font-black uppercase text-white mb-2 tracking-wide">
        My Plan
      </h1>
      <p className="text-gray-400 text-sm mb-8">
        Cap of five lifts for today. Finish them, then load more.
      </p>
        
      <PlanDashboard />
    </div>
  );
}
