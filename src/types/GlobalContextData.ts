import { themes } from "@/content";
import { Task } from "@prisma/client";

export type Theme = (typeof themes)[number];

export interface GlobalContextData {
  theme: Theme;
  tasks: Task[];
  isLoading: boolean;
  modal: boolean;
  collapsed: boolean;
  completedTasks: Task[];
  incompleteTasks: Task[];
  importantTasks: Task[];
}
