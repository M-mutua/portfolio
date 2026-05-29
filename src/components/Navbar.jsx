import React from "react"
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <header className="navbar border-box">
  <div className="inner nav-inner">
    <a href="#hero" className="logo">M-Mutua</a>
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