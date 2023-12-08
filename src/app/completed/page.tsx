"use client";
import { NextPage } from "next";
import { Tasks } from "@/components";
import { useGlobalState } from "@/context";

const Page: NextPage = () => {
  const { completedTasks } = useGlobalState();
  return (
    <Tasks
      title="Completed Tasks"
      tasks={completedTasks}
    />
  );
};

export default Page;
