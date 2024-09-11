import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

 const data = [
  {
    title: "Exploring the New Features of React 18",
    writerName: "jon don  ",
    shotDescriptions:
      "A deep dive into React 18's new concurrent features and improvements.",
    descriptions:
      "React 18 introduces several new features, including automatic batching and concurrent rendering. These updates aim to enhance the performance and user experience of React applications. In this post, we explore these new features and how they can be leveraged to build more efficient applications.",
    category: "React",
    image: "/uploads/4e16e499-ec2d-4da9-b34c-230754230022-3949100.png",
    email: "testSeed@g~mail.com",
  },
  {
    title: "Understanding TypeScript Generics",
    writerName: "Bob Smith",
    shotDescriptions:
      "A beginner’s guide to TypeScript generics and their use cases.",
    descriptions:
      "TypeScript generics provide a way to create reusable components and functions while maintaining type safety. This post covers the basics of generics, including syntax and common use cases, to help developers write more flexible and reusable code.",
    category: "TypeScript",
    image:
      "/uploads/ce677a48-4426-4cb1-84ba-a274b372c8a6-typescript-interfaces.png",
    email: "testSeed@g~mail.com",
  },
  {
    title: "A Comprehensive Guide to Next.js Middleware",
    writerName: "jon don  ",
    shotDescriptions:
      "Exploring how middleware works in Next.js and its practical applications.",
    descriptions:
      "Next.js middleware allows you to run code before a request is completed, providing a powerful way to handle authentication, redirects, and other custom logic. This guide walks through how to set up and use middleware in your Next.js applications effectively.",
    category: "nextjs",
    image: "/uploads/fef7c175-3140-442e-9726-78537a266d76-th.jpg",
    email: "testSeed@g~mail.com",
  },
  {
    title: "Mastering Tailwind CSS for Modern Web Design",
    writerName: "jon don  ",
    shotDescriptions:
      "An overview of Tailwind CSS and how to use it for creating modern, responsive designs.",
    descriptions:
      "Tailwind CSS has become a popular utility-first CSS framework that enables rapid UI development. This post explores the core concepts of Tailwind CSS and provides tips and examples for building visually appealing and responsive web designs.",
    category: "CSS",
    image: "/uploads/55303112-3e12-489c-af38-f96f9fe52c1a-th (1).jpg",
    email: "testSeed@g~mail.com",
  },
  {
    title: "How to Implement Authentication in Next.js with NextAuth",
    writerName: "jon don  ",
    shotDescriptions:
      "Step-by-step instructions for setting up authentication using NextAuth in Next.js.",
    descriptions:
      "NextAuth is a flexible authentication solution for Next.js applications. In this tutorial, we cover the process of configuring NextAuth to handle user authentication, including setting up providers, managing sessions, and protecting routes.",
    category: "nextjs",
    image: "/uploads/3e8a742e-117a-403c-bcb2-fdac778b1652-th (2).jpg",
    email: "testSeed@g~mail.com",
  },
  {
    title: "Introduction to Prisma Client for Data Management",
    writerName: "jon don  ",
    shotDescriptions:
      "An introduction to using Prisma Client for managing database interactions.",
    descriptions:
      "Prisma Client is a modern database toolkit that simplifies database access in your application. This post introduces Prisma Client, demonstrates its basic setup, and provides examples of how to perform common database operations.",
    category: "Database",
    image: "/uploads/8a0b6e2c-d284-4ffb-ad08-601fcc234a31-th (3).jpg",
    email: "testSeed@g~mail.com",
  },
  {
    title: "Building a Responsive Navbar with React",
    writerName: "jon don  ",
    shotDescriptions:
      "Tutorial on creating a responsive navigation bar using React components.",
    descriptions:
      "A responsive navbar is essential for modern web applications. This post guides you through building a responsive navigation bar using React, including handling different screen sizes and adding interactive elements.",
    category: "React",
    image: "/uploads/cc5fa8d9-b8ba-4482-955b-5eea53af9814-maxresdefault.jpg",
    email: "testSeed@g~mail.com",
  },
  {
    title: "Debugging Common Errors in TypeScript",
    writerName: "jon don  ",
    shotDescriptions:
      "Tips and techniques for debugging common TypeScript errors and issues.",
    descriptions:
      "TypeScript is a powerful tool, but it can come with its own set of challenges. This post covers common TypeScript errors, how to interpret them, and strategies for effectively debugging and resolving these issues.",
    category: "TypeScript",
    image: "/uploads/d4360357-6799-4292-9fbe-847d7d184387-th (4).jpg",
    email: "testSeed@g~mail.com",
  },
  {
    title: "Using Axios for Data Fetching in React",
    writerName: "jon don  ",
    shotDescriptions:
      "How to use Axios for handling HTTP requests in React applications.",
    descriptions:
      "Axios is a popular library for making HTTP requests in JavaScript. This post demonstrates how to use Axios in React applications to fetch and manage data, handle errors, and optimize performance.",
    category: "React",
    image:
      "/uploads/98fa5e28-81b7-49d4-b83e-a60fea1983c8-1_4Qnar8KlYNaCuoeA_k2_sw.png",
    email: "testSeed@g~mail.com",
  },
  {
    title: "Creating Dynamic Forms with React Hook Form",
    writerName: "jon don  ",
    shotDescriptions: "A guide to building dynamic and validation-rich forms using React Hook Form.",
    descriptions:"React Hook Form is a library for managing form state and validation in React applications. This post explains how to create dynamic forms with React Hook Form, including custom validation rules and handling form submissions.",
    category: "React",
    image: "/uploads/abe544b1-0617-4769-89f6-b77e02878af2-social.png",
    email: "testSeed@g~mail.com",
  },
];

async function main() {
  try {
    // Query to check if Prisma is working
    const allBlogs = await prisma.blog.findMany();
    console.log("Current blogs in the database:", allBlogs);

    // Your original seeding logic
    for (const entry of data) {
      console.log("Seeding data:", entry);
    }

    const result = await prisma.blog.createMany({
      data,
      skipDuplicates: true,
    });

    console.log(`Seeding completed. Inserted ${result.count} records.`);
  } catch (error:any) {
    console.error("Error during seeding:", error.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
