import CreateBlogsForm from "@/components/DashboardComponents/CreateBlogsForm";

export default function page() {
  return (
    <>
        <div className="container shadow-2xl my-5  mx-auto">
              <h3 className="font-bold text-[25px] text-center py-5 roboto-condensed">
                 Create Your Blogs 
              </h3>
              <div className="px-10 z-0 py-5">
                <CreateBlogsForm />
              </div>
        </div>
    </>
  )
}
