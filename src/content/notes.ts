import type { Note } from '../types/content'

export const notes: Note[] = [
  {
    slug: 'note-1',
    title: 'Thought about quaternions',
    summary: "It's crazy how powerful quaternions are and how little we use them in real life.",
    publishedOn: '2026-02-07',
  },
  {
    slug: 'note-2',
    title: 'Quaternions for computer vison',
    summary: "Quaternions are used for rotations in video games and other places too. they are excellent for identifying gemoerty, symmettry and invariances. Maybe one could express RGB values as quaternions, apply rotors, study invarainces, develop features, and use features for image classification & regression.",
    publishedOn: '2026-02-14',
  },
  {
    slug: 'note-3',
    title: 'Other dimensions',
    summary: "I have been thinking a lot about the principle of least action recently and how it's used to discover new laws with symmettry, adn interventional data. Most people believe in spacetime (x,y,z,t). Time is used as the index to measure progress. It's key for understanding what the action is and what states are. It' possible that instead of moving through time in a line, we coudl be glifding across a 2d plane, but we glide so slowly across one dimension we don't notice it. If we could nto see the sky, we would have no idea that the Earth is spinning.",
    publishedOn: '2026-02-15',
  },
]
