"use client";
import { usePathname } from "next/navigation";

export const CurntUrl = () => {
    const CurrnetPathName = usePathname();
  return (
    <p className=" text-blue-400  cursor-pointer">
        {CurrnetPathName}
    </p>
  );
};
