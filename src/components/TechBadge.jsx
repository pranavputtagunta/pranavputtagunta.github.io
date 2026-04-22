export default function TechBadge({ children }) {
  return (
    <span className="px-3 py-1 text-xs font-mono text-secondary bg-secondary/10 rounded-full border border-secondary/20">
      {children}
    </span>
  )
}
