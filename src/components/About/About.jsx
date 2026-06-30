import './About.css'

export default function About() {
  return (
    <section className="section about" id="about">
      <svg
        className="about__cloud"
        viewBox="0 0 520 160"
        role="presentation"
        aria-hidden="true"
      >
        <path
          d="M11 121C35 74 78 50 139 50c21-31 59-46 102-36 32 7 57 25 75 55 28-17 66-18 98-3 39 19 61 51 61 93"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </svg>
      <div className="inner">
        <div className="about__content">
          <h2>About Me</h2>
          <p className="about__meta">
            Computer Science · Egerton University | Software Developer Attachee · Fintech Group Kenya
          </p>
          <p>
            I build secure mobile and backend systems, with cybersecurity and networking shaping how I approach software from the start. That focus helps me think about trust, data flow, and resilience as part of the build, not as separate concerns added later.
          </p>
        </div>
      </div>
    </section>
  )
}
