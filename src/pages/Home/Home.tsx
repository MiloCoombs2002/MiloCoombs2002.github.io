import Component from "@/components/ui/siri-orb";
import { Link } from 'react-router-dom'

import useDocumentTitle from '../../hooks/useDocumentTitle'

function Home() {
  useDocumentTitle('Home | Milo Coombs')

  return (
    
      <section className="space-y-3">
        <h1 className="font-['Georgia'] text-8xl font-base tracking-tight pb-4">Milo Coombs</h1>
        <div className="flex flex-row justify-between gap-4 ">
          <div className='flex flex-col items-start gap-7 text-slate-700'>
            <p>Hey, welcome.</p>
            <p>
              I'm an ML/AI engineer by day and a researcher by night. My interests orbit physics, mathematics, technology, philosophy, building things, and thinking about the future — ultimately trying to understand the universe and my place in it.
            </p>
            <p>
              On the research side, I explore physics-inspired approaches to machine learning and ideas that sit at the boundary between ML and theoretical physics.
            </p>
            <p>
              In industry, I build production-grade ML models, platforms, and AI systems in finance.
            </p>
            <p>
              Most of my work is in Python and TypeScript.
            </p>
          </div>
          <div className="hidden origin-top-right xl:block xl:scale-100">
            <Component/>
          </div>
      </div>
      <p className="text-slate-700">
        See <Link to="/me" className="font-bold hover:underline-offset-1">@me</Link> for more details.
      </p>
      </section>
      
  )
}

export default Home
