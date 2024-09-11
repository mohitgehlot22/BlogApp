import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center p-6">
        <h2 className="text-4xl font-bold mb-4">404</h2>
        <p className="text-lg mb-6">Could not find the requested resource</p>
        <Link href="/Blogs">
          <Button className='text-[18px] font-bold '>
             Blogs
          </Button>
        </Link>
      </div>
    </div>
  )
}
