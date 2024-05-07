import Head from "next/head";
import {Meta} from '../components/Meta';
import {Navbar} from '../components/Navbar';
 function Home() {
  return (
    <div className="container--row wrapper">
      <Head><Meta title={'Home'} description={"Root landing page"} keywords={"Landing, Home, Index"} /></Head>
      <Navbar />
      <main id="home" className="container--col">
        <h1 className="heading">Hello World!</h1>
        <h2 className="error--warning">Error</h2>
      </main>
    </div>
  );
}
export default Home;