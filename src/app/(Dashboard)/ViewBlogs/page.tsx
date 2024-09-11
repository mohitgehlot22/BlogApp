import ViewBlogsData from "@/components/DashboardComponents/ViewBlogsData";

export default function page() {
  return (
    <>
        <div className="w-full px-6 my-5 mx-auto shadow-xl">
            <h3 className="font-bold text-center py-4 text-[25px]"> 
                View Blogs
            </h3>
            <ViewBlogsData/>
        </div>
    </>
  )
}
