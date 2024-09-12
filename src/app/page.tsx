import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="w-[80%] mx-auto pt-12 text-center">
      <h1 className="text-[40px] px-[300px] font-semibold text-center pt-12">
        Free Next.js Full-Stack Website Using Prisma
      </h1>
      <p className="text-[18px] mb-10 px-[300px] text-center pt-12 font-semibold">
        This is free next.js full stack template you can use to create blogs
        based on different category and also you can chat with others. this
        Website is full of functionalities
      </p>
      <Link href={"/Blogs"} className="rounded-md px-3 py-2 text-[18px] bg-orange-500 font-bold text-white">
            Explore All Blogs
      </Link>
      <div className="flex justify-center my-9"> 
       <Image src="/image/blog.jpeg" width={500} height={350} className="sm:w-[200px] mt-5 sm:h-[150px]" alt="" />
      </div>
    </div>
  );
}
