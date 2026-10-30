import { useState } from 'react'
import { profile } from '../data.js'

const links = [['about', 'About'], ['education', 'Education'], ['skills', 'Skills'], ['experience', 'Internship'], ['projects', 'Projects'], ['achievements', 'Achievements'], ['contact', 'Contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>{profile.name}</a>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
        <nav className={'links' + (open ? ' open' : '')}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
      </div>
    </header>
  )
}
