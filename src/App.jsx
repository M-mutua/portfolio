import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Projects from "./components/Projects/Projects"
import Experience from "./components/Experience/Experience"
import Contact from "./components/Contact/Contact"
import Background from "./components/Background/Background"

export default function App() {
  return (
    <>
      <Background />

      <Navbar />

      <main className="container">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  )
}