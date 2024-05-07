import Error from 'next/error';
import type {Likes} from '../../types/main.ts';
let likes: Likes;
async function getServerSideProps() {
  const res = await fetch('http://localhost:4000/blog/posts/:id/likes')
  let errorCode = res.ok ? false : res.status
  let json = await res.json();
  return {
    props: {errorCode, likes }
  }
}