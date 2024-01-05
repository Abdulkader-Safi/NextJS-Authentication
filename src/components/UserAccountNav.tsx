"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

interface IProps {}

// eslint-disable-next-line no-empty-pattern
const UserAccountNav = ({}: IProps) => {
  return (
    <Button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/sign-in`,
        })
      }
      variant={"destructive"}
    >
      Sign Out
    </Button>
  );
};

export default UserAccountNav;
