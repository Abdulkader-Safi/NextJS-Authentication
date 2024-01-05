"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

// eslint-disable-next-line no-empty-pattern
const Provider = ({ children }: IProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
