import heroImage from '../../assets/WhatsApp Image 2026-05-28 at 12.26.06.jpeg'
import './Hero.css'

const specializations = ['Computer Science', 'CySec & Networking', 'Backend APIs', 'Mobile Dev — Flutter']

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="inner hero__grid">
        <div className="hero__copy">
          <p className="hero__greeting">Hi, I'm</p>
          <h1>Mathias Mutua</h1>
          <p className="hero__description">
            Building secure, scalable systems across backend APIs, mobile platforms, and connected infrastructure.
          </p>
          <p className="hero__specialties">
            {specializations.map((specialization) => (
              <span key={specialization}>{specialization}</span>
            ))}
          </p>
          <div className="hero__actions" aria-label="Hero actions">
            <a className="button button--primary" href="#projects">
              View Projects
            </a>
            <a className="button button--secondary" href="#contact">
              Contact
            </a>
          </div>
          <div className="hero__socials" aria-label="Social links">
            <a href="https://github.com/M-mutua" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://linkedin.com/in/mathias-mutua" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero__portrait-shell">
          <div className="hero__pin" aria-hidden="true" />
          <div className="hero__portrait-frame">
            <img src={heroImage} alt="Mathias Mutua" />
          </div>
          <div className="hero__corner-accent" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
