"use client";
import React from "react";
import styled from "styled-components";

export interface GlobalsStyleProviderProps {
  children: React.ReactNode;
}

export const GlobalsStyleProvider: React.FC<GlobalsStyleProviderProps> = ({
  children,
}) => {
  return <GlobalStyles>{children}</GlobalStyles>;
};

const GlobalStyles = styled.div`
  padding: 2.5rem;
  display: flex;
  gap: 2.5rem;
  height: 100%;
`;
