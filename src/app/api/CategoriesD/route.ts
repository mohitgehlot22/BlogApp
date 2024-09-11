import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {

    const categories = await prisma.blog.findMany({
      select: {
        category: true,
      },
      distinct: ['category'],
    });

    const uniqueCategories = Array.from(
      new Set(
        categories
          .map((item) => item.category)
          .filter((category): category is string => typeof category === 'string' && category.trim() !== '')
          .map((category) => category.trim().toLowerCase()) 
      )
    );

    return NextResponse.json({
      data: uniqueCategories,
      status: 200,
      success: true,
    });
    
  } catch (error) {
    console.error("Error fetching unique categories:", error);
    return NextResponse.json({
      message: `Something went wrong: ${error instanceof Error ? error.message : String(error)}`,
      status: 500,
      success: false,
    });
  }
}
