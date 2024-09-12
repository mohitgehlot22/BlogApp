'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import { BlogData } from "@/types/definition";
import LoadingSpinner from "@/components/DashboardComponents/Loadingspinner";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Link from "next/link";
import TopButton from "../TopButton";
import Image from "next/image";

export default function BlogCard() {
  const [blogs, setBlogs] = useState<BlogData[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [SearchValu, SetSearchValue] = useState<string>(""); // Note: Changed type to `string`
  const limit = 6;


  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    axios
      .get(`/api/BlogsPost?page=${currentPage}&limit=${limit}`)
      .then((res) => {
        setBlogs(res.data.data);
        setTotalPages(res.data.pagination.totalPages);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [currentPage]); // Add `currentPage` to the dependency array

  useEffect(() => {
    if (SearchValu.trim() !== "") {
      axios
        .get(`/api/SearchPost?query=${SearchValu}`)
        .then((res) => {
          setBlogs(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .get(`/api/BlogsPost?page=${currentPage}&limit=${limit}`)
        .then((res) => {
          setBlogs(res.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [SearchValu, currentPage]); // Add `SearchValu` and `currentPage` to the dependency array

  if (blogs === null) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div>
        <form>
          <Input
            type="search"
            placeholder="Search Post To Title"
            onChange={(e) => SetSearchValue(e.target.value)}
          />
        </form>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {blogs.map((values: BlogData, i: number) => {
          const imageUrl = values.image.startsWith("/public")
            ? values.image.slice(7)
            : values.image;
          return (
            <div className="card my-6" key={i}>
              <Link href={`/Blogs/${values.id}`}>
                <Card className="h-full bg-white shadow-md rounded-lg overflow-hidden">
                  <CardHeader>
                    <Image
                      className="w-full h-auto object-cover"
                      src={imageUrl}
                      alt="not-found"
                      width={500}
                      height={500}
                    />
                    <CardTitle>{values.title}</CardTitle>
                    <CardDescription>
                      <p className="text-[15px] font-semibold line-clamp-2">
                        {values.shotDescriptions}
                      </p>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link
                      href={`/Blogs/${values.id}`}
                      className="text-[15px] bg-orange-500 text-white rounded-md px-3 py-2 font-bold"
                    >
                      Read full blog
                    </Link>
                  </CardFooter>
                </Card>
              </Link>
            </div>
          );
        })}
      </div>
      <Pagination className="py-5">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer"
              onClick={handlePreviousPage}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              className="cursor-pointer"
              onClick={() => setCurrentPage(1)}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className="cursor-pointer"
              onClick={handleNextPage}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <TopButton />
    </>
  );
}



