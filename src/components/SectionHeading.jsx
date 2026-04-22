export default function SectionHeading({ children, number }) {
  return (
    <h2 className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-heading mb-8">
      {number && <span className="font-mono text-secondary text-lg sm:text-xl">#{number}</span>}
      {children}
      <span className="flex-1 h-px bg-white/10 ml-4"></span>
    </h2>
  )
}
