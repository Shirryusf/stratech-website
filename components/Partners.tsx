import Image from 'next/image'

const partners = [
  { name: 'Partner 1', logo: '/partners/partner1.png' },
  { name: 'Partner 2', logo: '/partners/partner2.png' },
  { name: 'Partner 3', logo: '/partners/partner3.png' },
  { name: 'Partner 4', logo: '/partners/partner4.png' },
  { name: 'Partner 5', logo: '/partners/partner5.png' },
  { name: 'Partner 6', logo: '/partners/partner6.png' },
]

export default function Partners() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Our Partners
          </h2>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:max-w-4xl lg:grid-cols-6">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={158}
                  height={48}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 