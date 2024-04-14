"use client";
import { ReactNode, useEffect } from "react";
import AOS from "aos";

type AOSProviderProps = Readonly<{ children: ReactNode }>;
export const AOSProvider = ({ children }: AOSProviderProps) => {
  useEffect(() => {
    try {
      AOS.init();
    } catch (error) {}
  }, []);

  return <>{children}</>;
};
