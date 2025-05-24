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