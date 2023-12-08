"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { themes } from "@/content";
import { GlobalContextData, GlobalUpdateContextData } from "@/types";
import { Task } from "@prisma/client";
import toast from "react-hot-toast";

export const GlobalContext = createContext<GlobalContextData | null>(null);
export const GlobalUpdateContext =
  createContext<GlobalUpdateContextData | null>(null);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const { user } = useUser();
  const [tasks, setTasks] = useState<Task[]>([]);
  const theme = themes[selectedTheme];

  useEffect(() => {
    if (user) allTasks();
  }, [user]);

  const allTasks = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get<Task[]>("/api/tasks");

      const sorted = res.data.sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });

      setTasks(sorted);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async (id: string, isCompleted: boolean) => {
    try {
      const res = await axios.put(`/api/tasks/${id}`, { isCompleted });

      if (res.data.error) return toast.error(res.data.error);

      toast.success("Task updated");

      allTasks();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const deleteTask = async (id: string) => {
    try {
      const res = await axios.delete(`/api/tasks/${id}`);

      if (res.data.error) return toast.error(res.data.error);
      toast.success("Task deleted");

      allTasks();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const collapseMenu = () => {
    setCollapsed(!collapsed);
  };

  const toggleTheme = () => {
    if (selectedTheme === themes.length - 1) {
      setSelectedTheme(0);
    } else {
      setSelectedTheme(selectedTheme + 1);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        theme,
        tasks,
        isLoading,
        modal,
        collapsed,
      }}
    >
      <GlobalUpdateContext.Provider
        value={{
          updateTask,
          deleteTask,
          toggleTheme,
          collapseMenu,
          openModal,
          closeModal,
        }}
      >
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalProvider");
  }

  return context;
};

export const useGlobalUpdate = () => {
  const context = useContext(GlobalUpdateContext);

  if (!context) {
    throw new Error("useGlobalUpdate must be used within a GlobalProvider");
  }

  return context;
};
