"use client";
import { themes } from "@/content";
import { Theme, UpdateTheme } from "@/type";
import React, { createContext, useContext, useState } from "react";

export const GlobalContext = createContext<Theme | null>(null);
export const GlobalUpdateContext = createContext<UpdateTheme | null>(null);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const theme = themes[selectedTheme];

  return (
    <GlobalContext.Provider value={theme}>
      <GlobalUpdateContext.Provider value={setSelectedTheme}>
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
