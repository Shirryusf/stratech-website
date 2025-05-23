import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'ERP Systems',
    description: 'Our comprehensive ERP solutions help businesses streamline their operations, manage resources efficiently, and make data-driven decisions.',
    features: [
      'Integrated business processes',
      'Real-time data analytics',
      'Customizable modules',
      'Cloud-based deployment',
      '24/7 support',
    ],
    icon: ServerIcon,
  },
  {
    name: 'SaaS Solutions',
    description: 'Cloud-based software solutions that scale with your business needs, providing flexibility and cost-effectiveness.',
    features: [
      'Subscription-based pricing',
      'Automatic updates',
      'Multi-tenant architecture',
      'API integration',
      'Secure cloud hosting',
    ],
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Custom Management Tools',
    description: 'Bespoke management systems designed to address your specific business challenges and optimize your operations.',
    features: [
      'Tailored workflows',
      'Process automation',
      'Custom reporting',
      'User-friendly interface',
      'Scalable architecture',
    ],
    icon: CpuChipIcon,
  },
  {
    name: 'Business Applications',
    description: 'Custom-built applications that solve your unique business challenges and enhance productivity.',
    features: [
      'Mobile-first design',
      'Cross-platform compatibility',
      'Offline functionality',
      'Real-time synchronization',
      'Enterprise security',
    ],
    icon: LockClosedIcon,
  },
]

export default function Services() {
  return (
    <div className="bg-white">
      <div className="container py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Discover how our comprehensive technology solutions can transform your business operations and drive growth.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <service.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <ul role="list" className="mt-8 space-y-3 text-sm">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <svg
                            className="h-6 w-5 flex-none text-primary-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
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