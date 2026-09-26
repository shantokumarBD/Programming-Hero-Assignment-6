# 🏋️ FitLog — Workout Library

FitLog is a dark, no-nonsense gym companion built with Next.js. Pick a lift, lock it into today's plan, and watch the week's work add up.

## 🔗 Live Site

> [🚀 Live Site](https://fitlog-workout-bd.vercel.app) · [GitHub Repository](https://github.com/shantokumarBD/Programming-Hero-Assignment-6)

---

## 🛠️ Technologies Used

| Technology                  | Purpose                        |
| --------------------------- | ------------------------------ |
| **Next.js 15** (App Router) | Framework & page routing       |
| **TypeScript**              | Type safety across the project |
| **Tailwind CSS v4**         | Utility-first styling          |
| **DaisyUI**                 | UI component library           |
| **Lucide React**            | Icon library                   |
| **React Hot Toast**         | Toast notifications            |
| **Context API**             | Global state management        |

---

## ✨ Key Features

1. **Workout Library** — Browse all 12 workouts from the API in a responsive 3-column grid, each showing image, category tags, equipment, duration, calories, and rating.

2. **Workout Details Page** — A full two-column detail page for each workout including key specs (sets, reps, difficulty, etc.) and step-by-step instructions.

3. **My Plan Dashboard** — Add workouts to Today's Plan, track total exercises, minutes, and calories live, sort the list by duration/calories/rating, and mark workouts as done or remove them.

4. **Save for Later** — Save any workout from the details page and view them all in the Saved tab on the My Plan page.

5. **Search & Filter** — Search workouts by name or muscle group in the My Plan dashboard for quick access.

6. **5 Lifts Daily Cap** — "Add to Plan" button is automatically disabled and shows "Plan Full (5/5)" when the daily cap of 5 workouts is reached.

7. **Persistent Data with LocalStorage** — All plan and saved data persist across page reloads using the browser's LocalStorage, so users never lose their progress.

8. **Interactive Navbar Badges** — Real-time "Plan" and "Saved" counters in the navbar update instantly as items are added or removed, both linking to the My Plan page.

9. **Toast Notifications** — Contextual toast feedback for every user action: add to plan, save, remove, mark as done.

10. **Custom 404 & Loading Pages** — A themed 404 "Workout Not Found" page for invalid routes, and a smooth animated loading spinner while data is being fetched.

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/shantokumarBD/Programming-Hero-Assignment-6.git

# 2. Navigate to the project folder
cd Programming-Hero-Assignment-6/fit-log

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📡 API

| Endpoint              | Description                  |
| --------------------- | ---------------------------- |
| `GET /api/fitlog`     | Fetch all 12 workouts        |
| `GET /api/fitlog/:id` | Fetch a single workout by ID |

**Base URL:** `https://api.api-store.workers.dev`

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page (Banner + Library)
│   ├── loading.tsx         # Global loading animation
│   ├── not-found.tsx       # Custom 404 page
│   ├── my-plan/
│   │   └── page.tsx        # My Plan page (Server Component)
│   └── workout/
│       └── [id]/
│           └── page.tsx    # Workout detail page
├── components/
│   ├── shared/             # Navbar, NavBadges, NavLink, Footer, WorkoutCard
│   ├── homepage/           # Banner, Library
│   ├── details/            # ActionButtons
│   └── my-plan/            # PlanDashboard (Client Component)
├── context/
│   └── FitLogContext.tsx   # Global state & LocalStorage logic
└── lib/
    └── api.ts              # API fetch functions
```

---

© 2026 FitLog — Workout Library. Train hard, log honest.
