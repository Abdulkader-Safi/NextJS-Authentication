"use client";

import { useSession } from "next-auth/react";

interface IProps {}

// eslint-disable-next-line no-empty-pattern
const User = ({}: IProps) => {
  const { data: session } = useSession();

  return <pre>{JSON.stringify(session)}</pre>;
};

export default User;
