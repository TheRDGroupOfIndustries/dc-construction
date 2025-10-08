// types/project.ts

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface Project {
  _id: string
  title: string
  slug: {
    _type: 'slug'
    current: string
  }
  category: 'Residential' | 'Commercial' | 'Renovation'
  location: string
  description: string
  mainImage: SanityImage
  featured: boolean
  completionDate?: string
}