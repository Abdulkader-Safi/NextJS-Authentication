import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

interface IProps {}

// eslint-disable-next-line no-empty-pattern
const page = async ({}: IProps) => {
  const session = await getServerSession(authOptions);

  console.log(session);

  if (session?.user) {
    return <div className="text-2xl">Admin page - Welcome back {session?.user.username}</div>;
  }

  return (
    <>
      <h2 className="text-xl">Please login to get access</h2>
      <Link className={buttonVariants()} href={"/sign-in"}>
        Login
      </Link>
    </>
  );
};

export default page;
