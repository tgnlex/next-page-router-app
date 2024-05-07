import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {Meta} from '../components/Meta';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head><Meta title={'Home'} description={"Root landing page"} keywords={"Landing, Home, Index"} /></Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>Hello World!</h1>
      </main>
    </>
  );
}
