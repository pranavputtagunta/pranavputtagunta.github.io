import TechBadge from './TechBadge'

export default function ExperienceCard({ title, dates, role, bullets, techs, links, children, onClick }) {
  return (
    <div
      className={`glass rounded-xl p-6 transition-all duration-300 card-glow glass-hover ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div className="flex flex-wrap justify-between items-start mb-3 gap-2">
        <h3 className="text-xl font-bold text-heading">{title}</h3>
        <span className="font-mono text-sm text-secondary">{dates}</span>
      </div>
      <p className="text-base font-medium text-slate mb-4">{role}</p>
      <ul className="mb-4 text-sm space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-secondary mt-1.5 text-xs">&#9656;</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      {techs && techs.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {techs.map((t) => <TechBadge key={t}>{t}</TechBadge>)}
        </div>
      )}
      {children}
      {links && (
        <div className="flex flex-wrap gap-4 mt-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-sm text-secondary hover:text-secondary/80 transition-colors font-medium"
            >
              {l.label} &rarr;
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
