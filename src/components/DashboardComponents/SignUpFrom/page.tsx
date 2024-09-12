"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().nonempty(),
  email: z.string().email("Invalid email address."),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  userphoto: z.string(),
  totalpost: z.string(),
  phonenumber: z.string(),
  profileSummry: z.string(),
  youtubeurl: z.string(),
  twitterurl: z.string(),
  instagramurl: z.string(),
  facebookurl: z.string(),
});

type FormSchemaType = z.infer<typeof formSchema>;

function SignUpForm() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      userphoto: "",
      totalpost: "",
      phonenumber: "",
      profileSummry: "",
      youtubeurl: "",
      twitterurl: "",
      instagramurl: "",
      facebookurl: "",
    },
  });

  const onSubmit: SubmitHandler<FormSchemaType> = async (values) => {
    axios.post(`/api/Profile`, values).then((res) => {
      if (res.data.status == 200) {
        toast.success(res.data.message);
        router.push(`/Sign-in`);
      } else {
        toast.error(res.data.message);
      }
    }).catch((error) => {
      toast.error("Something Went Wrong!");
    });

    form.reset();
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8">
          <div className="space-y-5">
            <div>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="example" {...field} />
                    </FormControl>
                    <FormDescription className="capitalize">
                      Please enter your User Name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@example.com" {...field} />
                    </FormControl>
                    <FormDescription className="capitalize">
                      Please enter your email address.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="password"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                          {showPassword ? (
                            <EyeOffIcon className="w-5 h-5 text-gray-500" />
                          ) : (
                            <EyeIcon className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormDescription className="capitalize">
                      Your password must be at least 6 characters long.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <Button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md"
              >
                Sign up
              </Button>
            </div>
          </div>
        </form>
      </Form>
      <ToastContainer />
    </>
  );
}

export default SignUpForm;
