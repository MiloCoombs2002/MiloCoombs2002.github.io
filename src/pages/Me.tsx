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
    <section>
      <h1>Me</h1>
      <p>{profile.bio}</p>
      <p>
        Based in {profile.location}. Current role: {profile.roles[0].title}.
      </p>
    </section>
  )
}

export default Me
