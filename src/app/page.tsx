"use client";
import { Tasks } from "@/components";
import { useGlobalState } from "@/context";

export default function Home() {
  const { tasks } = useGlobalState();
  return (
    <main>
      <Tasks
        title="All Tasks"
        tasks={tasks}
      />
    </main>
  );
}
