"use client";
import { NextPage } from "next";
import { Tasks } from "@/components";
import { useGlobalState } from "@/context";

const Page: NextPage = () => {
  const { importantTasks } = useGlobalState();
  return (
    <Tasks
      title="Important Tasks"
      tasks={importantTasks}
    />
  );
};

export default Page;
