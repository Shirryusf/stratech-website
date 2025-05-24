import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Partners />
    </>
  );
}

// I will ensure the main page content uses the desired color scheme. This page primarily uses components, so individual component files will need review for full color scheme consistency. 