import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'ERP Systems',
    description: 'Comprehensive enterprise resource planning solutions tailored to your business needs.',
    icon: ServerIcon,
  },
  {
    name: 'SaaS Solutions',
    description: 'Cloud-based software solutions that scale with your business.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Custom Management Tools',
    description: 'Bespoke management systems designed to streamline your operations.',
    icon: CpuChipIcon,
  },
  {
    name: 'Business Applications',
    description: 'Custom-built applications that solve your unique business challenges.',
    icon: LockClosedIcon,
  },
]

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We provide comprehensive technology solutions to help your business thrive in the digital age.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <service.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
} 