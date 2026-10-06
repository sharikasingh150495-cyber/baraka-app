// @ts-nocheck
"use server";

import prisma from "@/lib/db";

export async function getProducts() {
  // Yeh function Neon database se saare products fetch karega
  try {
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    console.error("Database fetch error:", error);
    return [];
  }
}