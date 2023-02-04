import Link from "next/link"

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link legacyBehavior href="/">
            <a className="logo">Shift.</a>
          </Link>

          <ul className="nav-links">
            <li className="nav-item"><Link href="/">Home</Link></li>
            <li className="nav-item"><Link href="/about">About</Link></li>
            <li className="nav-item"><Link href="/portofolio">Portofolio</Link></li>
            <li className="nav-item"><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* hero */}
      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Halo, Saya Rizky Ferdian</h1>
            <p className="description">Saya seorang front end developer yang menguasai bahasa Html, CSS , Javascript, ReactJS, Next JS dan seorang desain antarmuka pengguna.</p>

            <Link legacyBehavior href="/contact">
              <a className="cta">Kontak Saya</a>
            </Link>


          </div>

          <div className="image-wrapper">
            <img src="/Person.png" width="426" height="543" />
          </div>
        </div>
      </section>

    </>
  )
}
