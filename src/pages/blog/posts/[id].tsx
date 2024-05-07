import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import {Post} from '@/types/blog';
export const getServerSideProps = (async () => {
  const res = await fetch('localhost:3000/api/posts/[id].ts');
  const post: Post = await res.json();
  return { props: {post} }
}) satisfies GetServerSideProps<{ post: Post }>

export default function Page({
  post, 
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <p>{post.content}</p>
    </main>
  )
}