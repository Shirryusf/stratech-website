import React from 'react';
import Image from 'next/image'

const team = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    imageUrl: '/team/john-doe.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    imageUrl: '/team/jane-smith.jpg',
  },
  {
    name: 'Mike Johnson',
    role: 'Head of Development',
    imageUrl: '/team/mike-johnson.jpg',
  },
]

export default function AboutPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">About Stratech</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h2>
        <p className="text-gray-700">{/* Add your mission statement here */}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Vision</h2>
        <p className="text-gray-700">{/* Add your vision statement here */}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Our Values</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>{/* Add value 1 */}</li>
          <li>{/* Add value 2 */}</li>
          <li>{/* Add value 3 */}</li>
          {/* Add more values as needed */}
        </ul>
      </section>

      {/* Add sections for Team, History, etc. as needed */}

      {/* Vision & Mission */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-100/20">
        <div className="container py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Our Vision & Mission
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At Stratech, we envision a world where businesses of all sizes have access to cutting-edge technology solutions that drive growth and innovation. Our mission is to empower organizations with customized tech solutions that transform their operations and accelerate their success in the digital age.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet the passionate individuals behind Stratech's success. Our team combines expertise in technology, business, and innovation to deliver exceptional solutions.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {team.map((person) => (
              <li key={person.name}>
                <Image
                  className="aspect-[3/2] w-full rounded-2xl object-cover"
                  src={person.imageUrl}
                  alt={person.name}
                  width={500}
                  height={300}
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base leading-7 text-gray-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 