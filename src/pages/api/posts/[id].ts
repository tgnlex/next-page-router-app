import type {NextApiRequest, NextApiResponse} from 'next';
import type {ResData, ResMsg, Query} from '@/types/main';
import {parseRead} from '@/lib/read';
import {filterByID} from '@/lib/filterByID';
import type {Post} from '@/types/blog';
async function handler(query: Query, res: NextApiResponse<ResData | ResMsg>) {
  let posts = await parseRead('@/_data/posts.json');
  let id = Number(query);
  let data = filterByID(posts, id);
  if (data) {
    res.status(200).json({data});
  } else {
    res.status(418).json({message: `Error, no post matching id: ${id} was found. (I'm a teapot...)`});
  }
}

export {handler};
