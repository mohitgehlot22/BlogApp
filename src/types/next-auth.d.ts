import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    username?: string;  // Add username to User type
  }

  interface Session {
    user: {
      email?: string;
      username?: string;  // Add username to Session user
    } & DefaultSession["user"];
  }

  interface JWT {
    email?: string;
    username?: string;  // Add username to JWT token
  }
}
