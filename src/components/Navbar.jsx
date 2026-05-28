import React from "react"

const Navbar = () => {
  return (
    <header className="navbar border-box">
      <div className="container nav-inner">
        <div className="logo">
          Mathias Mutua
        </div>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar