import FindCategorise from "@/components/WebComponents/Categorise";


export default function BlogCategoryPage() {
  return (
    <div className="min-h-screen  md:px-8 pt-12">
      <div className=" sm:w-100 rounded-lg shadow-lg">
        <h1 className="sm:text-3xl text-[20px] font-extrabold text-center mb-6">
          Explore Blog Topics by Category
        </h1>
          <FindCategorise/>
      </div>
    </div>
  );
}

