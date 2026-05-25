import Sidebar from "../components/sidebar";
import HeroTile from "../components/hero-tile";
import CourseCard from "../components/course-card";
import ActivityTile from "../components/activity-tile";
import Topbar from "../components/topbar";

import { supabase } from "../lib/supabase";

export default async function Home() {
  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

    if (error) {
      return (
        <main className="min-h-screen bg-black text-red-500 p-10">
          {error.message}
        </main>
      );
    }

  return (
    <main className="min-h-screen bg-black text-white flex">
      <Sidebar />

      <section className="flex-1 p-6">
      <Topbar />
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >
          {/* Hero */}
          <HeroTile />

          {/* Activity */}
          <ActivityTile />

          {/* Courses */}
          {courses?.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              progress={course.progress}
              iconName={course.icon_name}
            />
          ))}
        </div>
      </section>
    </main>
  );
}