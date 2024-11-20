import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { UserAccountNav } from "./UserAccountNav";
import SearchBar from "./SearchBar";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-[#FA995B] border-b border-zinc-300 z-[10] py-2">
      <div className="container max-w-7xl h-full mx-auto flex items-center justify-between gap-2">
        {/* logo */}
        <Link
          href="/"
          className="flex gap-2 items-center bg-white rounded-2xl p-2 shadow-md hover:shadow-lg transition-shadow"
        >
          {/* <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" /> */}
          <img
            src="/favicon.ico"
            alt="Logo"
            className="h-8 w-8 sm:h-6 sm:w-6"
          />
          <p className="hidden text-black text-sm font-medium md:block">
            Report Community
          </p>
        </Link>

        {/* search bar */}
        <SearchBar />

        {/* actions */}
        {session?.user ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Iniciar sesión
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
