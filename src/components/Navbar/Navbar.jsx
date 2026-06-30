import './Navbar.css'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="navbar">
      <nav className="inner navbar__inner" aria-label="Primary navigation">
        <a className="navbar__logo" href="#hero" aria-label="Scroll to hero section">
          MM
        </a>
        <div className="navbar__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
