'use client'
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type NextAuthProviderProps ={
    children:ReactNode;
}

export const NextAuthProvider:React.FC<NextAuthProviderProps> = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};
