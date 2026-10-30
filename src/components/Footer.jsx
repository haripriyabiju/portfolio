import { profile } from '../data.js'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      <div className="social">
        <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
        {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>}
        {profile.github && <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>}
        <a href="#home">Back to top</a>
      </div>
    </footer>
  )
}
