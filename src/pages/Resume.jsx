import SectionHeading from '../components/SectionHeading'

export default function Resume() {
  return (
    <div className="max-w-5xl mx-auto">
      <SectionHeading number="05">Resume</SectionHeading>

      <div className="glass rounded-2xl p-4 md:p-6 mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold text-heading">Resume</h2>
          <a
            href="/assets/docs/pranav_technical_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-6 py-3 bg-secondary/10 text-secondary border border-secondary/30 rounded-lg hover:bg-secondary/20 transition-all duration-200 text-center font-medium"
          >
            <svg className="w-4 h-4 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </a>
        </div>
      </div>

      <div className="glass rounded-2xl overflow-hidden relative" style={{ height: 'calc(100vh - 250px)' }}>
        <iframe
          src="/assets/docs/pranav_technical_resume.pdf#toolbar=0"
          className="w-full h-full border-0"
          title="Resume PDF"
        />
      </div>
    </div>
  )
}
