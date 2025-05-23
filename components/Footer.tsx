import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: '#',
      icon: FaLinkedin,
    },
    {
      name: 'Twitter',
      href: '#',
      icon: FaTwitter,
    },
    {
      name: 'Facebook',
      href: '#',
      icon: FaFacebook,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container py-12 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-primary-600"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <nav className="flex flex-wrap justify-center space-x-6" aria-label="Footer">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base text-gray-500 hover:text-primary-600"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Stratech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 