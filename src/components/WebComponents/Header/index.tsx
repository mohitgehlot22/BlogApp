'use client'
import Link from "next/link";
import { DarkLightButton } from "../DarkLightButton";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FaBars } from "react-icons/fa";

export default function Header() {

  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="sticky top-[0px] z-50">
      <header className={`w-[100%] px-5 py-4 h-15   shadow-lg  ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'
        }`}>
        <div className="md:w-[100%] md:px-4 lg:w-[80%] mx-auto flex justify-between">
          <div>
            <h1 className="md:text-[18px] pt-1 md:pt-0  lg:text-[30px] font-bold cursor-pointer">
              Next Blog
            </h1>
          </div>
          <div>
            <ul className="justify-between items-center hidden lg:flex pt-3 text-[16px] font-semibold cursor-pointer">
              <li className="cursor-pointer px-5">
                <Link href="/">Home</Link>
              </li>
              <li className="cursor-pointer px-5">
                <Link href="/Blogs">Blogs</Link>
              </li>
              <li className="cursor-pointer px-5">
                <Link href="/Category">Category</Link>
              </li>
              <li className="cursor-pointer px-5">
                <Link href="/info">Create Blogs</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-between">
            <Sheet >
              <SheetTrigger className="lg:hidden">
                <FaBars className="text-[25px] mx-5 cursor-pointer" />
              </SheetTrigger>
              <SheetContent className="p-0 pt-5">
                <SheetHeader>
                  <ul className="pt-3 text-[16px] text-start font-semibold cursor-pointer">
                    <li className="cursor-pointer text-[18px] my-5 font-bold px-5">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="cursor-pointer text-[18px] my-5 font-bold px-5">
                      <Link href="/Blogs">Blogs</Link>
                    </li>
                    <li className="cursor-pointer text-[18px] my-5 font-bold px-5">
                      <Link href="/Category">Category</Link>
                    </li>
                    <li className="cursor-pointer text-[18px] my-5 font-bold px-5">
                      <Link href="/info">Create Blogs</Link>
                    </li>
                  </ul>
                </SheetHeader>
              </SheetContent>
            </Sheet>
            <DarkLightButton />
          </div>
        </div>
      </header>
    </div>
  );
}
