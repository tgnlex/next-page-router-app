import type {NextApiRequest, NextApiResponse} from 'next';
import type {ResData} from '@/types/main';
import {read} from '@/lib/read';

async function handler(req: NextApiRequest, res: NextApiResponse<ResData>) {
  let data = await read('@/_data/posts.json');
  res.status(200).json({data});
}

export {handler};
