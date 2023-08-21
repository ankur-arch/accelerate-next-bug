export const runtime = "edge"; // 'nodejs' is the default
export const preferredRegion = "iad1"; // only execute this function on iad1
export const dynamic = "force-dynamic"; // no caching

import { PrismaClient } from "@prisma/client/edge";
// import { withAccelerate } from "@prisma/extension-accelerate";

const prismaClient = new PrismaClient()
//.$extends(withAccelerate());

export async function GET(request: Request) {
  const rsu = await prismaClient.notes.findMany();
  return new Response(rsu.toString(), {
    status: 200,
  });
}
