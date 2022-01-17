import Link from 'next/link'
import Logo from './Logo.jsx'
import classes from './NavBar.module.css'

function index() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/traits">Traits</Link>
          </li>
          <li>
            <Link href="/my-crypto-monks">My Cryptomonks</Link>
          </li>
          <li>
            <Link href="/roadmap">Roadmap</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default index
