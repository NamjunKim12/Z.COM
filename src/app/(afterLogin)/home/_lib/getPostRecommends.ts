import { revalidatePath } from "next/cache";

export async function getPostRecommends() {
  const res = await fetch(`http://localhost:9090/api/postRecommends`, {
    next: {
      tags: ['posts', 'recommends'],
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}