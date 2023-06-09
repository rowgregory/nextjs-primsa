import prisma from '@/prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const data = await prisma.post.findMany();

      res.status(200).json(data);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}
