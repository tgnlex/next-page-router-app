import type {NextApiRequest, NextApiResponse} from 'next';
import {read} from '@/lib/read';
async function handler(req: NextApiRequest, res: NextApiResponse) {
  let posts = await read('@/_data/posts.json');
  res.status(200).json({posts});
}

export {handler};
