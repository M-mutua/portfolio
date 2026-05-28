import heroImage from '../assets/WhatsApp Image 2026-05-28 at 12.26.06.jpeg'
import './Hero.css'

const specializations = [
  'Computer Science',
  'CySec & Networking',
  'Backend APIs',
  'Mobile Dev with Flutter',
]

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hi, I am</p>
          <h1 className="hero-name">Mathias Mutua</h1>
          <p className="hero-description">
            Building secure and scalable systems across backend infrastructure,
            mobile platforms, and network architecture.
          </p>
          <p className="hero-specs">
            Computer Science &nbsp;|&nbsp; CySec & Networking &nbsp;|&nbsp; Backend APIs
            <br />
             &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Mobile Dev — Flutter
            </p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-secondary">Contact</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/M-mutua" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mathias-mutua" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img src={heroImage} alt="Mathias Mutua" className="hero-image" />
        </div>
      </div>
    </section>
  )
}