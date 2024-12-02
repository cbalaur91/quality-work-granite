'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Absolute Black Granite',
    description: 'Scratch-resistant stone perfect for high-traffic areas like countertops and flooring',
    price: 'Starting at $40/sq ft',
    timeline: '1-2 weeks',
    image: '/images/material/AbsoluteBlackGranite.jpg',
  },
  {
    title: 'Boticcino',
    description: 'Limestone is a durable and versatile natural stone known for its warm tones and subtle textures.',
    price: 'Starting at $35/sq ft',
    timeline: '3-5 days',
    image: '/images/material/Boticcino.jpg',
  },
  {
    title: 'Lethered Granite',
    description: 'Its natural beauty and variety of colors enhance any space with elegance and strength.',
    price: 'Starting at $45/sq ft',
    timeline: '1-2 weeks',
    image: '/images/material/LetheredGranite.jpg',
  },
  {
    title: 'Lincoln White Marble',
    description: 'Marble is a premium material prized for its natural beauty and durability.',
    price: 'Starting at $45/sq ft',
    timeline: '1-2 weeks',
    image: '/images/material/LincolnWhiteMarble.jpg',
  },  
  {
    title: 'Micael White',
    description: 'Its distinct veining and polished finish add luxury and elegance to any space, from countertops to flooring.',
    price: 'Starting at $45/sq ft',
    timeline: '1-2 weeks',
    image: '/images/material/MicaelWhite.jpg',
  },  
  {
    title: 'Nebula White Marble',
    description: 'Its natural elegance, soft veining, and variety of tones enhance any space with timeless beauty and sophistication.',
    price: 'Starting at $45/sq ft',
    timeline: '1-2 weeks',
    image: '/images/material/NebulaWhiteMarble.jpg',
  },
  {
    title: 'Perlino White Limestone',
    description: 'Its creamy white color with delicate linear veining adds a timeless, refined look to any space.',
    price: 'Starting at $45/sq ft',
    timeline: '1-2 weeks',
    image: '/images/material/PerlinoWhiteLimestone.jpg',
  },
  {
    title: 'Travertine Bianco',
    description: 'Travertine is a unique natural stone known for its distinctive porous texture and earthy tones. ',
    price: 'Starting at $45/sq ft',
    timeline: '1-2 weeks',
    image: '/images/material/TravertineBianco.jpg',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Materials</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Premium granite solutions for every space in your home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="font-semibold">Price:</span> {service.price}
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Timeline:</span> {service.timeline}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Custom Projects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Have a unique project in mind? We&apos;d love to help bring your vision to life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Get a Custom Quote
          </a>
        </div>
      </div>
    </div>
  )
} 