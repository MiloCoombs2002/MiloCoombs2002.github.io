import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import briefMarkdown from '../content/me/brief.md?raw'

function Me() {
  const [selectedTab, setSelectedTab] = useState<'brief' | 'detailed'>('brief')

  return (
    <section className="space-y-3">
      <h1 className="font-['Georgia'] text-8xl font-base tracking-tight pb-4">about me</h1>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setSelectedTab('brief')}
          className={`rounded-full border px-3 py-1 text-xs transition-colors ${
            selectedTab === 'brief'
              ? 'border-slate-900 bg-slate-900 text-white'
              : 'border-slate-300 text-slate-600 hover:border-slate-500'
          }`}
        >
          brief
        </button>
        <button
          type="button"
          onClick={() => setSelectedTab('detailed')}
          className={`rounded-full border px-3 py-1 text-xs transition-colors ${
            selectedTab === 'detailed'
              ? 'border-slate-900 bg-slate-900 text-white'
              : 'border-slate-300 text-slate-600 hover:border-slate-500'
          }`}
        >
          detailed (cv)
        </button>
      </div>

      {selectedTab === 'brief' ? (
        <article className="space-y-2 text-slate-700 [&_a]:underline [&_a]:underline-offset-2 [&_code]:rounded [&_code]:bg-slate-100 [&_code]:px-1 [&_h1]:text-2xl [&_h1]:font-semibold [&_h2]:text-xl [&_h2]:font-semibold [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-relaxed [&_ul]:space-y-1">
          <ReactMarkdown>{briefMarkdown}</ReactMarkdown>
        </article>
      ) : (
        <div className="space-y-2 text-slate-700">
          <p>Detailed CV view coming soon.</p>
          <p>Placeholder: work experience, education, publications, and projects will live here.</p>
          <p>Placeholder: add downloadable CV link and expanded timeline cards.</p>
        </div>
      )}
    </section>
  )
}

export default Me
