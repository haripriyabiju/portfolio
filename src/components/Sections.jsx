import { profile, education, skills, internship, projects, certifications, leadership } from '../data.js'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'

const Section = ({ id, title, children }) => (
  <section id={id} className="section">
    <h2>{title}</h2>
    {children}
  </section>
)

export function About() {
  return (
    <Section id="about" title="About me">
      <div className="prose">{profile.about.map((t) => <p key={t}>{t}</p>)}</div>
    </Section>
  )
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <ol className="timeline">
        {education.map((e) => (
          <li key={e.degree}><h3>{e.degree}</h3><p>{e.school}</p><span>{e.meta}</span></li>
        ))}
      </ol>
    </Section>
  )
}

export function Skills() {
  return (
    <Section id="skills" title="Technical skills">
      <div className="grid skills">
        {skills.map((g) => (
          <div className="card" key={g.title}>
            <h3>{g.title}</h3>
            <div className="chips">{g.items.map((i) => <span key={i} className="chip">{i}</span>)}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function Internship() {
  return (
    <Section id="experience" title="Internship experience">
      <div className="card wide">
        <h3>{internship.role}</h3>
        <p className="muted">{internship.org} · {internship.period}</p>
        <ul>{internship.points.map((p) => <li key={p}>{p}</li>)}</ul>
      </div>
    </Section>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid projects">
        {projects.map((p) => (
          <article className="card project" key={p.title}>
            <span className="result">{p.result}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
            <p><strong>My contribution:</strong> {p.contribution}</p>
            <div className="chips">{p.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export function Achievements() {
  return (
    <Section id="achievements" title="Certifications and leadership">
      <div className="grid two">
        <div className="card"><h3>Certifications</h3><ul>{certifications.map((c) => <li key={c}>{c}</li>)}</ul></div>
        <div className="card"><h3>Leadership and activities</h3><ul>{leadership.map((c) => <li key={c}>{c}</li>)}</ul></div>
      </div>
    </Section>
  )
}

export function Contact() {
  const rows = [
    { label: 'Email', text: profile.email, href: `mailto:${profile.email}`, icon: <MailIcon /> },
    profile.linkedin && { label: 'LinkedIn', text: 'Connect with me', href: profile.linkedin, icon: <LinkedInIcon /> },
    profile.github && { label: 'GitHub', text: 'See my code', href: profile.github, icon: <GitHubIcon /> },
  ].filter(Boolean)
  return (
    <Section id="contact" title="Get in touch">
      <p className="prose">I am open to internships and projects in data science and machine learning. Send me a message and I will reply.</p>
      <div className="grid contact">
        {rows.map((r) => (
          <a key={r.label} className="card link-card" href={r.href} target={r.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
            {r.icon}<div><strong>{r.label}</strong><span>{r.text}</span></div>
          </a>
        ))}
      </div>
      <a className="btn primary send" href={`mailto:${profile.email}?subject=Hello%20Haripriya`}>Send an email</a>
    </Section>
  )
}
