
import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo" onClick={closeMenu}>
          Explore<span>Ease</span>
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/" onClick={closeMenu}>Explore</Link></li>
          <li><Link to="/favourites" onClick={closeMenu}>Favourites</Link></li>
          <li><Link to="/planner" onClick={closeMenu}>Plan a Trip</Link></li>
        </ul>

        <Link
          to="/planner"
          className="nav-button"
          onClick={closeMenu}
        >
          Get Started
        </Link>

      </div>
    </nav>
  )
}

export default Navbar
