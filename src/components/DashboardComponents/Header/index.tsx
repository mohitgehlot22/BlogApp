"use client";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { FaPowerOff } from "react-icons/fa";
import { CurntUrl } from "../CurrentUrl";
import { DarkLightButton } from "@/components/WebComponents/DarkLightButton";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { data : session }=useSession();
  const router = useRouter()

  if(!session?.user.email){
    router.push('/Sign-in')
  }
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/Blogs" });
  };

  return (
    <>
      <header
        className={`w-full sticky top-0 px-4 shadow-lg z-50 py-4  flex ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <div className="w-[25%]">
          <h5 className=" font-bold flex">
            Dashboard <CurntUrl />{" "}
          </h5>
        </div>
        <nav className="w-[75%] px-2">
          <ul className="flex justify-end">
            <li className="px-3 pt-1">
              <Link href={"/Profile"}>
                <CgProfile className="text-[25px]" />
              </Link>
            </li>
            <li className="px-3 pt-1">
              <Link href={"/"}>
                <FaPowerOff onClick={handleLogout} className="text-[25px]" />
              </Link>
            </li>
            <li className="px-3">
              <DarkLightButton />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
