import { Task } from "@prisma/client";

export interface GlobalUpdateContextData {
  toggleTheme: () => void;
  deleteTask: (id: string) => void;
  updateTask: (id: string, isCompleted: boolean) => void;
  openModal: () => void;
  closeModal: () => void;
  collapseMenu: () => void;
}
