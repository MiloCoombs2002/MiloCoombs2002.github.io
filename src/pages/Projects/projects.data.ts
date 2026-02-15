import type { Project } from '../../types/content'
import { projectConfig } from './projects.config'

const markdownModules = import.meta.glob('../../content/projects/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

export const projects: Project[] = projectConfig.map((projectMeta) => {
  const content = markdownModules[projectMeta.contentPath]

  if (!content) {
    throw new Error(
      `Missing markdown content for project id "${projectMeta.id}" at path "${projectMeta.contentPath}".`,
    )
  }

  return {
    ...projectMeta,
    content,
  }
})
