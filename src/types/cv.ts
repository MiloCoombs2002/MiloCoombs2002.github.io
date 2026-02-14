export interface CvRole {
  company: string
  title: string
  startDate: string
  endDate: string
}

export interface CvProfile {
  name: string
  location: string
  bio: string
  roles: CvRole[]
}
