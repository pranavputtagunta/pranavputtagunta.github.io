import TechBadge from './TechBadge'

export default function ProjectCard({ title, badge, subtitle, bullets, techs, links, onClick, className = '' }) {
  return (
    <div
      className={`glass rounded-xl p-6 transition-all duration-300 card-glow glass-hover group ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-heading group-hover:text-secondary transition-colors">{title}</h3>
        {badge && (
          <span className="text-xs font-mono text-secondary bg-secondary/10 px-2 py-1 rounded-full whitespace-nowrap ml-2">
            {badge}
          </span>
        )}
      </div>
      {subtitle && <p className="text-sm text-secondary/80 mb-3">{subtitle}</p>}
      <ul className="mb-4 text-sm list-none space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-secondary mt-1.5 text-xs">&#9656;</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mb-4">
        {techs.map((t) => <TechBadge key={t}>{t}</TechBadge>)}
      </div>
      {links && (
        <div className="flex flex-wrap gap-4">
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
      {onClick && !links && (
        <span className="text-sm text-secondary font-medium group-hover:translate-x-1 inline-block transition-transform">
          Read Project Breakdown &rarr;
        </span>
      )}
    </div>
  )
}
