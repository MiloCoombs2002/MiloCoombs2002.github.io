import useDocumentTitle from '../hooks/useDocumentTitle'
import type { CvProfile } from '../types/cv'

const profile: CvProfile = {
  name: 'Milo Coombs',
  location: 'United Kingdom',
  bio: 'blah.',
  roles: [
    {
      company: 'Moneycorp',
      title: 'MLE',
      startDate: '2025-06',
      endDate: 'Present',
    },
  ],
}

function Me() {
  useDocumentTitle('Me | Milo Coombs')

  return (
    <section className="space-y-3">
      <h1 className="text-3xl font-semibold tracking-tight">Me</h1>
      <p className="text-slate-700">{profile.bio}</p>
      <p className="text-slate-700">
        Based in {profile.location}. Current role: {profile.roles[0].title}.
      </p>
    </section>
  )
}

export default Me
