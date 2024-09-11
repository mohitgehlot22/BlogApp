import SignInForm from "@/components/DashboardComponents/SignInForm";
import Link from "next/link";

export default function page() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight">
              Sign-in
            </h2>
            <p className="mt-2 text-sm">
              Don&apos;t have an account?
              <Link
                href="/Sign-up"
                title=""
                className="font-semibold  duration-200 hover:underline"
              >
                Create a free account
              </Link>
            </p>
            <SignInForm/>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full  object-cover"
            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
