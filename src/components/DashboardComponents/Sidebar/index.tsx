"use client";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaBars, FaSignOutAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoPersonAdd, IoCreateSharp, IoSettingsSharp } from "react-icons/io5";
import { GrView } from "react-icons/gr";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const [Sidebar, SetSidebar] = useState(false);

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  if (!session?.user.email) {
    router.push("/Sign-in");
  }

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: "/Blogs" });
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`shadow-lg h-screen ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="h-[67px] p-5 shadow-lg flex justify-between">
        {Sidebar ? (
          <>
            <h5 className="font-bold"> Dashboard</h5>
            <h5
              className="font-bold cursor-pointer text-end"
              onClick={() => SetSidebar(false)}
            >
              <RiCloseLargeFill className="font-blod text-[25px]" />
            </h5>
          </>
        ) : (
          <h5 className="font-bold cursor-pointer text-center">
            <FaBars
              className="font-blod text-[25px]"
              onClick={() => SetSidebar(true)}
            />
          </h5>
        )}
      </div>
      <ul className="mt-6">
        <li className="p-2 cursor-pointer">
          <Link className="flex" href={`/CreateProfile`}>
            <IoPersonAdd className="font-bold text-[25px] mt-1" />
            <h5 className={Sidebar ? "font-bold pt-1  mx-3 flex" : " hidden"}>
              Edit Profile
            </h5>
          </Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link className="flex" href={`/Profile`}>
            <CgProfile className="font-bold text-[25px] mt-1" />
            <h5
              className={Sidebar ? "font-bold pt-1 w-[130px] mx-3" : " hidden"}
            >
              Profile
            </h5>
          </Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link className="flex" href={`/CreateBlogs`}>
            <IoCreateSharp className="font-bold text-[25px] mt-1" />
            <h5 className={Sidebar ? "font-bold pt-1  mx-3" : " hidden"}>
              Create Blog
            </h5>
          </Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link className="flex" href={`/ViewBlogs`}>
            <GrView className="font-bold text-[25px] mt-1" />
            <h5 className={Sidebar ? "font-bold pt-1  mx-3" : " hidden"}>
              View Blogs
            </h5>
          </Link>
        </li>
      </ul>
      <div className="pt-[280px]">
        <ul>
          <li className="p-2 cursor-pointer pt-12">
            <div className="flex" onClick={handleLogout}>
              <FaSignOutAlt className="font-bold text-[25px] mt-1" />
              <h5 className={Sidebar ? "font-bold pt-1  mx-3" : " hidden"}>
                Sign-Out
              </h5>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
