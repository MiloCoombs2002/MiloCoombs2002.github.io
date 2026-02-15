import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'home' },
  { to: '/me', label: 'me' },
  { to: '/projects', label: 'projects' },
  { to: '/notes', label: 'notes' },
]

function Navbar() {
  return (
    <header className="w-full md:sticky md:top-4">
      <nav
        className="flex flex-row flex-wrap justify-start gap-2 md:flex-col md:gap-2.5"
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              [
                'rounded-md px-3 py-2 hover:bg-slate-200 no-underline transition-colors',
                isActive
                  ? 'font-bold'
                  : 'text-slate-500',
              ].join(' ')
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
