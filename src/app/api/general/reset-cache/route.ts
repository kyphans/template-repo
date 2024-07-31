import { revalidateTag } from 'next/cache';

export async function GET() {
  revalidateTag('general-api');
  return Response.json({ statusCode: 200, message: 'Reset cache completed!' });
}
