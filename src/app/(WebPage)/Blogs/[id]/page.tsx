"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { BlogData, BlogDetailsProps } from "@/types/definition";
import LoadingSpinner from "@/components/DashboardComponents/Loadingspinner";
import UserProfile from "@/components/WebComponents/UserProfile";
import CommentBord from "@/components/WebComponents/CommentBord";

export default function BlogDetails({ params }: BlogDetailsProps) {

  const [blog, setBlog] = useState<BlogData | null>(null);

  const fetchBlogData = () => {
    axios
      .get(`/api/SingleBlog/${params.id}`)
      .then((res) => {
        setBlog(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (params && params.id) {
      fetchBlogData();
    }
  }, [params]);

  if (!blog) {
    return <LoadingSpinner />;
  }

  const imageUrl = blog.image.startsWith('/public') ? blog.image.slice(7) : blog.image;

  return (
    <div className="container mx-auto pt-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full md:w-[50%] lg:w-[100%] text-center py-5 mx-auto my-4">
        <img src={imageUrl} alt={blog.title} className="w-full h-auto rounded-lg shadow-md" />
      </div>

      <div>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <h1 className="text-[18px] md:text-[24px] capitalize font-bold mb-2 md:mb-0">
            Title :  {blog.title}
          </h1>
          <p className="text-[15px] md:text-[17px] font-semibold py-2 md:py-0">
            Published on {new Date(blog.createdAt).toLocaleDateString()}
          </p>
        </div>

        <h2 className="text-[16px] md:text-[18px] font-bold mt-4">
          Author: {blog.writerName}
        </h2>

        <h2 className="text-[15px] md:text-[18px] capitalize text-center py-5 font-semibold">
          {blog.shotDescriptions}
        </h2>

        <p className="text-[15px] md:text-[17px] font-medium py-3 text-justify leading-6 md:leading-7">
          {blog.descriptions}
        </p>

        <div className="mt-4">
          <h5 className="text-[16px] md:text-[18px] font-bold capitalize">
            Category: {blog.category}
          </h5>
        </div>

        <div className="mt-6">
          <UserProfile Name={blog.email as string} />
        </div>

        <div className="mt-6">
          <CommentBord />
        </div>
      </div>
    </div>
  );
}
