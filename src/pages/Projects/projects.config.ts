import type { ProjectMeta } from '../../types/content'

export const projectConfig: ProjectMeta[] = [
  {
    id: 'project-one',
    name: 'Continuous Neural Networks',
    date: '2025-06',
    readTime: '1 min read',
    overview: 'A physics-inspired reformulation of neural networks as continuous integral operators, where learning emerges from variational principles rather than discrete layer-by-layer optimization.',
    contentPath: '../../content/projects/project-one.md',
  },
  {
    id: 'project-two',
    name: 'Spectral Geometry of Data',
    date: '2026-01',
    readTime: '1 min read',
    overview: 'A structured approach to tabular learning that represents functions through directional spectral components, selecting a small set of interpretable basis paths to approximate complex relationships without black-box optimisation.',
    contentPath: '../../content/projects/project-two.md',
  },
]
