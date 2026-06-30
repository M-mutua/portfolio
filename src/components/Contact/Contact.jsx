import './Contact.css'

const contactOptions = [
  {
    label: 'Email',
    value: 'triplem706@gmail.com',
    href: 'mailto:triplem706@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'M-mutua',
    href: 'https://github.com/M-mutua',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: 'mathias-mutua',
    href: 'https://linkedin.com/in/mathias-mutua',
    external: true,
  },
]

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="inner">
        <div className="contact__content">
          <h2>Contact</h2>
          <p>Reach me through email, GitHub, or LinkedIn.</p>
          <div className="contact__links" aria-label="Contact options">
            {contactOptions.map((option) => (
              <a
                key={option.href}
                className="contact__tag"
                href={option.href}
                target={option.external ? '_blank' : undefined}
                rel={option.external ? 'noreferrer' : undefined}
              >
                <span>{option.label}</span>
                <strong>{option.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
