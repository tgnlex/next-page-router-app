import useSWR from 'swr';
import {Meta} from '@/components/Meta'
import Head from 'next/head';
import Link from 'next/link';
import { Post } from '@/types/blog';
function Feed() {  
  const {data, error, isLoading } = useSWR('/api/posts/', fetch)
  if (error) return <FetchError />
  return (
    <>
      <Head><Meta title={"Blog Feed"} description={"List of available blog posts"} keywords={"Blog, Posts, Content"}/></Head>
      <main id="feed">
        <h1>Blog Feed</h1>
          {posts.map((post) => (
            <li className="post" key={post.id}>
              <Link href={`/blog/posts/${post.id}`}>
                {post.title}
              </Link>
            </li>
          ))}
      </main>  
    </>
  )
}
export default Feed;