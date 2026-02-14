import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'home' },
  { to: '/me', label: 'me' },
  { to: '/projects', label: 'projects' },
  { to: '/notes', label: 'notes' },
]

function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `site-nav__link${isActive ? ' site-nav__link--active' : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
