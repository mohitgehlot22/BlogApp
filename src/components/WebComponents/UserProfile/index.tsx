import { Profile, profileName } from "@/types/definition";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserProfile({ Name }: profileName) {
  const [ProfileData, SetProfileData] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/Profile')
      .then((res) => {
        SetProfileData(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error('Something went wrong!');
        setLoading(false);
      });
  }, []);


  const ProfileuserData = ProfileData.filter((value) => Name === value.email);


  if (loading) return <p>Loading...</p>;
  if (ProfileuserData.length === 0) return <p>No profile data found.</p>;

  const user = ProfileuserData[0];
  const imageUrl = user.userphoto && user.userphoto.startsWith('/profileimages') 
  ? user.userphoto 
  : user.userphoto 
    ? `/profileimages/${user.userphoto}` 
    : '/image/Profile.jpg';
    
  return (
    <>
      <div className="mt-20 relative z-0 border-t-4 rounded border-orange-500">
        <div className="border-4 border-orange-500  rounded-full absolute top-[-80px] start-[25%] lg:start-[44%] bg-white shadow-2xl">
          <Image
            src={imageUrl || '/image/Profile.jpg'}
            className="object-cover w-[140px] h-[140px] rounded-full"
            alt="Profile"
            width={800}
            height={800}
          />
        </div>
        <h1 className="text-center py-6 capitalize lg:text-[25px] sm:text-[18px] font-bold mt-16">
          {user.username || 'User Name'}
        </h1>
        <div className="lg:flex justify-between">
          <h3 className="lg:text-[17px] sm:text-[15px] mt-2 font-semibold">
            Email: {user.email}
          </h3>
          <h3 className="lg:text-[17px] sm:text-[15px] mt-2 font-semibold">
            Contact No: {user.phonenumber || 'N/A'}
          </h3>
        </div>
        <p className="lg:text-[18px] sm:text-[15px] my-3 text-center font-semibold pb-5">
          {user.profileSummry || 'User description...'}
        </p>
        <div className="flex py-5 justify-center">
          <Link href={user.facebookurl || '#'} target="_blank" rel="noopener noreferrer" className="mx-3 rounded-full w-[60px] h-[60px]">
            <Image
              width={35}
              height={35}
              src="/image/facebook_5968764.png"
              alt="Facebook"
            />
          </Link>
          <Link href={user.instagramurl || '#'} target="_blank" rel="noopener noreferrer" className="mx-3 rounded-full w-[60px] h-[60px]">
            <Image
              width={35}
              height={35}
              src="/image/instagram_2111463.png"
              alt="Instagram"
            />
          </Link>
          <Link href={user.twitterurl || '#'} target="_blank" rel="noopener noreferrer" className="mx-3 rounded-full w-[60px] h-[60px]">
            <Image
              width={35}
              height={35}
              src="/image/letter-x_9862814 (1).png"
              alt="Twitter"
            />
          </Link>
          <Link href={user.youtubeurl || '#'} target="_blank" rel="noopener noreferrer" className="mx-3 rounded-full w-[60px] h-[60px]">
            <Image
              width={35}
              height={35}
              src="/image/youtube_3938026.png"
              alt="YouTube"
            />
          </Link>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
