import { IconType } from 'react-icons'
import { ComponentType } from 'react'

export interface NavigationItem {
  name: string
  href: string
}

export interface SocialItem extends NavigationItem {
  icon: IconType
}

export interface Service {
  name: string
  description: string
  features?: string[]
  icon: ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
}

export interface TeamMember {
  name: string
  role: string
  imageUrl: string
}

export interface Partner {
  name: string
  logo: string
}

export interface FormData {
  name: string
  email: string
  company: string
  message: string
} 