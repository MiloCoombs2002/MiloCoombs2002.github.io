export interface Note {
  slug: string
  title: string
  summary: string
  publishedOn: string
}

export interface ProjectMeta {
  id: string
  name: string
  date: string
  readTime: string
  overview: string
  contentPath: string
}

export interface Project extends ProjectMeta {
  content: string
}
