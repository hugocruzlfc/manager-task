"use client";
import { NextPage } from "next";
import { Tasks } from "@/components";
import { useGlobalState } from "@/context";

const Page: NextPage = () => {
  const { incompleteTasks } = useGlobalState();
  return (
    <Tasks
      title="Incomplete Tasks"
      tasks={incompleteTasks}
    />
  );
};

export default Page;
