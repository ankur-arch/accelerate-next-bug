import { prismaClient } from "@/lib/db";

export const runtime = "edge"; // 'nodejs' is the default
export const preferredRegion = "iad1"; // only execute this function on iad1
export const dynamic = "force-dynamic"; // no caching

export async function GET(request: Request) {
  const rsu = await prismaClient.notes.findMany();
  return new Response("Hello World", {
    status: 200,
  });
}
