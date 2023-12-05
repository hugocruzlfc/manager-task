"use client";

import React, { useState } from "react";
import { GlobalProvider } from "@/context";

export interface ContextProvidersProps {
  children: React.ReactNode;
}

export const ContextProviders: React.FC<ContextProvidersProps> = ({
  children,
}) => {
  const [isReady, setIsReady] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 250);
  }, []);

  if (!isReady) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }
  return <GlobalProvider>{children}</GlobalProvider>;
};
