import { revalidateTag } from 'next/cache';

export async function GET() {
  revalidateTag('home-page-api');
  return Response.json({ statusCode: 200, message: 'Reset cache completed!' });
}
