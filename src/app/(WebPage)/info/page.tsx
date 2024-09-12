import TopButton from '@/components/WebComponents/TopButton';
import Link from 'next/link';

export default function InfoPage() {
  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="max-w-full mx-auto shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Blog Post Creation Info</h1>
        
        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Introduction</h2>
          <p className="text-sm sm:text-base">
            Welcome to the Blog Post Creation section. Here, you can learn how to create and manage your blog posts efficiently. Follow the instructions below to get started.
          </p>
        </section>

        <section className="mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Steps to Create a Blog Post</h2>
          <ol className="list-decimal pl-4 sm:pl-5">
            <li className="mb-2 text-sm sm:text-base">Sign-in to your account.</li>
            <li className="mb-2 text-sm sm:text-base">Navigate to the &quot;Create Blog Post&quot; section.</li>
            <li className="mb-2 text-sm sm:text-base">Fill in the required fields: Title, Category, and Content.</li>
            <li className="mb-2 text-sm sm:text-base">Click the &quot;Publish Blog Post&quot; button to submit your post.</li>
            <li className="text-sm sm:text-base">Review your post in the dashboard to ensure everything looks good.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">Tips for Writing a Great Blog Post</h2>
          <ul className="list-disc pl-4 sm:pl-5">
            <li className="mb-2 text-sm sm:text-base">Choose a catchy title that grabs attention.</li>
            <li className="mb-2 text-sm sm:text-base">Provide valuable and engaging content.</li>
            <li className="mb-2 text-sm sm:text-base">Use images and media to make your post visually appealing.</li>
            <li className="mb-2 text-sm sm:text-base">Ensure your post is well-structured and easy to read.</li>
          </ul>
        </section>

        <div className="mt-6 sm:mt-8 text-center">
          <Link 
            href="/Sign-up" 
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 text-sm sm:text-base"
          >
            Go to Sign-up
          </Link>
        </div>
      </div>
      <TopButton/>
    </div>
  );
}
