"use client"
import { Button } from "@/components/ui/button";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function TopButton() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

  return (
    <>
        <Button
        onClick={scrollToTop}
        className="fixed bottom-24 end-5"
        >
        <FaArrowAltCircleUp className="text-[25px] font-bold"/>
      </Button>
    </>
  )
}
