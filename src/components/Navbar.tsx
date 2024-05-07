import Link from "next/link";
function Navbar() {
  return (
    <nav className="navbar">        
      <h1 className="heading">Navigation</h1>
      <ul className="nav-list">
        <Link className="nav-link" href="/">Home</Link>
        <Link className="nav-link" href="/blog/feed">Blog</Link>
      </ul>
    </nav>
  )
}
export {Navbar};