import { string } from "zod";

export interface BlogData {
    id : string
    title: string;
    createdAt: string;
    author: string;
    shotDescriptions: string;
    descriptions: string;
    writerName: string;
    category: string;
    image: string;
    email : string
  }

  export interface BlogDataType  {
    id: string;
    title: string;
    email : string ;
    createdAt: string;
    updatedAt: string;
    category: string;
  }

 export interface BlogDetailsProps {
    params: {
      id: string;
    };
  }

  export interface EditeDataType {
    id: string;
    title: string;
    shotDescriptions : string;
    descriptions: string;
    writerName: string;
    category: string;
  }

  export interface Comment {
    id :string
    author: string;
    createdAt: string;
    email : string
    content: string;
    blogId : string
}

export  interface profileName{
  Name : string
}

export interface Profile {
  email : string ,
  facebookurl : string ,
  instagramurl : string ,
  password : string ,
  phonenumber : string ,
  profileSummry : string ,
  totalpost : string ,
  twitterurl : string ,
  username : string ,
  youtubeurl : string,
  userphoto? : string
}