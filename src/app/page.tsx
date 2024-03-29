import User from "@/components/User";
import { buttonVariants } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

interface IProps {}

// eslint-disable-next-line no-empty-pattern
const page = async ({}: IProps) => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1 className="text-4xl">Home</h1>
      <Link className={buttonVariants()} href={"/admin"}>
        Open My Admin
      </Link>

      <h2>Client Session</h2>
      <User />
      <h2>Server Session</h2>
      {JSON.stringify(session)}
    </div>
  );
};

export default page;
