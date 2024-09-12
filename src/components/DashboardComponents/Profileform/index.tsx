"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { toFormData } from "axios";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopButton from "@/components/WebComponents/TopButton";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const formSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .nonempty(),

  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters.",
    })
    .nonempty(),

  email: z
    .string()
    .email({
      message: "Invalid email address.",
    })
    .nonempty(),
  instagramurl: z.string().optional(),
  facebookurl: z.string().optional(),
  twitterurl: z.string().optional(),
  youtubeurl: z.string().optional(),
  profileSummry: z.string().nonempty(),
  phonenumber: z.string().min(10, {
    message: "Phone Number must be at least 10 digit.",
  }),
  userphoto: z.any().optional(),
  totalpost: z.string().nonempty(),
});

export default function ProfileFrom() {
   const [showPassword, setShowPassword] = useState(false);
   const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/Sign-in");
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
      email: session?.user.email || "",
      instagramurl: "",
      facebookurl: "",
      twitterurl: "",
      youtubeurl: "",
      profileSummry: "",
      phonenumber: "",
      userphoto: "",
      totalpost: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("username", values.username);
    formData.append("password", values.password);
    formData.append("email", values.email);
    formData.append("instagramurl", values.instagramurl || "");
    formData.append("facebookurl", values.facebookurl || "");
    formData.append("twitterurl", values.twitterurl || "");
    formData.append("youtubeurl", values.youtubeurl || "");
    formData.append("profileSummry", values.profileSummry);
    formData.append("phonenumber", values.phonenumber);
    formData.append("totalpost", values.totalpost);

    if (selectedFile) {
      formData.append("userphoto", selectedFile);
    }

    axios
      .put(`/api/Profile`, formData)
      .then((res) => {
        if (res.data.status === 500) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          router.push('/Profile')
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("An error occurred!");
      });

    form.reset();
    setSelectedFile(null);
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };



  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex justify-between items-center">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-[50%] pe-[20px]">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Jon The Don" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-[50%]">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Enter Password"
                        type={showPassword ? "text" : "password"}
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between items-center">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-[50%] pe-[20px]">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" disabled {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="instagramurl"
              render={({ field }) => (
                <FormItem className="w-[50%]">
                  <FormLabel>Instagram Url</FormLabel>
                  <FormControl>
                    <Input placeholder="Instagram Url" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-between items-center">
            <FormField
              control={form.control}
              name="facebookurl"
              render={({ field }) => (
                <FormItem className="w-[50%] pe-[20px]">
                  <FormLabel>Facebook Url</FormLabel>
                  <FormControl>
                    <Input placeholder="Facebook Url" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="twitterurl"
              render={({ field }) => (
                <FormItem className="w-[50%]">
                  <FormLabel>Twitter Url</FormLabel>
                  <FormControl>
                    <Input placeholder="Twitter Url" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-center items-center">
            <FormField
              control={form.control}
              name="youtubeurl"
              render={({ field }) => (
                <FormItem className="w-[50%] pe-[20px]">
                  <FormLabel>YouTube Url</FormLabel>
                  <FormControl>
                    <Input placeholder="YouTube Url" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phonenumber"
              render={({ field }) => (
                <FormItem className="w-[50%]">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-center items-center">
            <FormField
              control={form.control}
              name="userphoto"
              render={({ field }) => (
                <FormItem className="w-[50%] pe-[20px]">
                  <FormLabel> Your Image </FormLabel>
                  <FormControl>
                  <Input
                      type="file"
                      onChange={handleFileChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="totalpost"
              render={({ field }) => (
                <FormItem className="w-[50%]">
                  <FormLabel>Your Total Blog Post </FormLabel>
                  <FormControl>
                    <Input placeholder="Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="profileSummry"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile Summary</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    className="text-[18px] font-semibold h-[200px] line-clamp-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full font-bold text-[22px]" type="submit">
            Submit
          </Button>
        </form>
      </Form>
      <TopButton />
      <ToastContainer />
    </>
  );
}
