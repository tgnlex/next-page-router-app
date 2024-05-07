import {Meta} from '@/components/Meta'
import Head from 'next/head';
import Link from 'next/link';
const posts = [{id: 1, title: "test", content: "Hello World!"}]
function Feed() {
  return (
    <>
      <Head><Meta title={"Blog Feed"} description={"List of available blog posts"} keywords={"Blog, Posts, Content"}/></Head>
      <main id="feed">
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