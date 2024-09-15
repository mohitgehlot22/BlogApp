import NextAuth, { NextAuthOptions } from "next-auth"; // <-- Import NextAuthOptions
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcryptjs";
import { db } from "@/lib/db"; // Assuming your Prisma db instance is here

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/Sign-in",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const existingUser = await db.profile.findUnique({
          where: { email: credentials.email },
        });

        if (!existingUser) {
          throw new Error("No user found");
        }

        const passwordMatch = await compare(credentials.password, existingUser.password);

        if (!passwordMatch) {
          throw new Error("Incorrect password!");
        }

        return {
          id: existingUser.id,
          username: existingUser.username,
          email: existingUser.email,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.email = token.email;  // Add email to session
      return session;
    },
  },
};

export default NextAuth(authOptions);
