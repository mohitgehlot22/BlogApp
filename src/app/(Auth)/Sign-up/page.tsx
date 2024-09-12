import SignUpForm from "@/components/DashboardComponents/SignUpFrom/page";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      <div className="h-full w-full">
          <Image
            className="mx-auto h-screenT w-full  object-cover"
            src="/image/sign-up.jpg"
            width={500}
            height={800}
            alt="not-found"
          />
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight  sm:text-4xl">
            Sign-up
            </h2>
            <p className="mt-2 text-sm">
                Already have an account ?  &nbsp;
              <Link
                href="/Sign-in"
                className="font-semibold  transition-all duration-200 hover:underline"
              >
                Sign-in
              </Link>
            </p>
              <SignUpForm />
          </div>
        </div>
      </div>
    </section>
  );
}