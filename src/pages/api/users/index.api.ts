import { prisma } from './../../../lib/prisma'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }
  const { nome, username } = req.body

  const user = await prisma.user.create({
    data: { nome, username },
  })

  return res.status(201).json(user)
}
