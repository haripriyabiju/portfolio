import { profile, stats } from '../data.js'
import { GitHubIcon, LinkedInIcon } from './Icons.jsx'

// Decorative scatter plot with a fitted line: a nod to data science.
const pts = [[28,150],[52,138],[70,146],[96,118],[118,126],[140,96],[164,104],[188,78],[212,86],[236,56],[258,64],[282,40]]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>{profile.name}</h1>
        <p className="headline">{profile.headline}</p>
        <p className="lead">{profile.intro}</p>
        <div className="actions">
          <a className="btn primary" href="#projects">View projects</a>
          <a className="btn" href="#contact">Contact me</a>
          {profile.github && <a className="icon-btn" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>}
          {profile.linkedin && <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>}
        </div>
      </div>
      <div className="plot" aria-hidden="true">
        <svg viewBox="0 0 310 190">
          {[40, 80, 120, 160].map((y) => <line key={y} x1="10" x2="300" y1={y} y2={y} className="grid" />)}
          {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="5" className="dot" style={{ animationDelay: `${i * 90}ms` }} />)}
          <line x1="20" y1="156" x2="296" y2="38" className="fit" />
        </svg>
        <dl className="stats">
          {stats.map((s) => (<div key={s.label}><dt>{s.value}</dt><dd>{s.label}</dd></div>))}
        </dl>
      </div>
    </section>
  )
}
