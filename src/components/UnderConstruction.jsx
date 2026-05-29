import '../styles/UnderConstruction.css'

export default function UnderConstruction({ title }) {
  return (
    <section className="construction-section">
      <div className="inner">
        <div className="construction-content">
          <div className="gears">
            <div className="gear gear-large">⚙</div>
            <div className="gear gear-small">⚙</div>
          </div>
          <h2>{title}</h2>
          <p className="construction-text">Inakuja, Mos-Mos</p>
        </div>
      </div>
    </section>
  )
}