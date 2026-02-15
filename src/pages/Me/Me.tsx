import { useState } from 'react'
import { Check, Copy, ExternalLink } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import briefMarkdown from '../../content/me/brief.md?raw'
import detailedMarkdown from '../../content/me/detailed.md?raw'

function Me() {
  const [selectedTab, setSelectedTab] = useState<'brief' | 'detailed'>('brief')
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle')

  const handleCopyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(detailedMarkdown)
      setCopyState('copied')
    } catch {
      setCopyState('error')
    }

    window.setTimeout(() => setCopyState('idle'), 2000)
  }

  return (
    <section className="space-y-3">
      <h1 className="font-['Georgia'] text-8xl font-base tracking-tight pb-4">about me</h1>

      <div className="flex items-center justify-between gap-4">
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

        {selectedTab === 'detailed' ? (
          <div className="inline-flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyMarkdown}
              aria-label="Copy detailed CV markdown"
              title={copyState === 'copied' ? 'Copied' : copyState === 'error' ? 'Copy failed' : 'Copy .md'}
              className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-2 py-1 text-xs text-slate-700 transition-colors hover:border-slate-500"
            >
              {copyState === 'copied' ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
              <span>.md</span>
            </button>

            <a
              href="/cv.pdf"
              download="cv.pdf"
              aria-label="Export CV as PDF"
              title="Export .pdf"
              className="inline-flex items-center gap-1 rounded-full border border-slate-300 px-2 py-1 text-xs text-slate-700 transition-colors hover:border-slate-500"
            >
              <ExternalLink size={14} aria-hidden="true" />
              <span>.pdf</span>
            </a>
          </div>
        ) : null}
      </div>

      {selectedTab === 'brief' ? (
        <article className="space-y-2 text-slate-700 [&_a]:underline [&_a]:underline-offset-2 [&_code]:rounded [&_code]:bg-slate-100 [&_code]:px-1 [&_h1]:text-2xl [&_h1]:font-semibold [&_h2]:text-xl [&_h2]:font-semibold [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-relaxed [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-slate-300 [&_td]:px-3 [&_td]:py-2 [&_th]:border [&_th]:border-slate-300 [&_th]:bg-slate-100 [&_th]:px-3 [&_th]:py-2 [&_ul]:space-y-1">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{briefMarkdown}</ReactMarkdown>
        </article>
      ) : (
        <article className="space-y-2 text-slate-700 [&_a]:underline [&_a]:underline-offset-2 [&_code]:rounded [&_code]:bg-slate-100 [&_code]:px-1 [&_h1]:text-2xl [&_h1]:font-base [&_h2]:text-xl [&_h2]:font-semibold [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-relaxed [&_table]:mx-auto [&_table]:w-full [&_table]:border-collapse md:[&_table]:w-fit [&_tbody_tr]:text-center [&_td]:border-r [&_td]:border-slate-300 [&_td]:px-4 [&_td]:py-1 [&_td:last-child]:border-r-0 [&_thead]:hidden [&_ul]:space-y-1">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-center font-['Georgia'] text-3xl">{children}</h1>
              ),
              h3: ({ children }) => {
                const text = String(children)
                const [left, right] = text.split(' ::: ')

                if (right) {
                  return (
                    <h3 className="flex items-baseline justify-between gap-4 text-lg font-semibold">
                      <span>{left}</span>
                      <span className="whitespace-nowrap text-sm font-normal text-slate-500">{right}</span>
                    </h3>
                  )
                }

                return <h3 className="text-lg font-semibold">{children}</h3>
              },
            }}
          >
            {detailedMarkdown}
          </ReactMarkdown>
        </article>
      )}
    </section>
  )
}

export default Me
