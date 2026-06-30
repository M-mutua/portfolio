import './About.css'

export default function About() {
  return (
    <section className="section about" id="about">
      <svg
        className="about__cloud"
        viewBox="0 0 180 84"
        role="presentation"
        aria-hidden="true"
      >
        <path
          d="M33 58C17 58 8 48 8 36c0-13 11-23 25-22 6-10 18-16 31-13 10 2 18 8 23 17 7-4 16-5 25-1 10 4 16 13 16 24h7c16 0 27 9 27 21 0 13-11 21-28 21H36c-14 0-25-7-25-19 0-4 1-8 4-11"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
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
