'use client'

import { motion } from 'framer-motion';
import GoogleMap from '@/components/GoogleMap'

const teamMembers = [
  {
    name: 'Tony Vacaru',
    role: 'Founder & Master Countertop Designer',
    image: '/images/team/Tony.jpg',
    bio: 'Over 25 years of expertise in crafting and customizing granite countertops to perfection.',
  },
  {
    name: 'Denis Vacaru',
    role: 'Countertop Design Consultant',
    image: '/images/team/Denis.jpg',
    bio: 'Specialist in designing stunning kitchen and bathroom spaces with premium granite countertops.',
  },
  {
    name: 'Bogdan Costea',
    role: 'Granite Installation Expert',
    image: '/images/team/Bogdan.jpg',
    bio: '15 years of experience in precision installation of granite countertops for homes and businesses.',
  },
]

const certifications = [
  'Natural Stone Institute Certified',
  'Licensed General Contractor',
  'BBB A+ Rating',
  'EPA Lead-Safe Certified',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Since 1995, Quality Work Granite has been transforming homes with exceptional
            stone craftsmanship. What started as a small family business has grown into
            one of the region's most trusted names in granite and stone installation.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Quality</h3>
            <p className="text-gray-600 dark:text-gray-300">
              We never compromise on materials or craftsmanship
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Integrity</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Honest pricing and transparent communication
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-3">Service</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Exceptional customer service from start to finish
            </p>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '0 40%' }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            Certifications & Warranties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Our Warranty</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We stand behind our work with a comprehensive warranty that covers both
                materials and craftsmanship. Our installations come with a 5-year warranty
                on workmanship and we honor all manufacturer warranties on materials.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Location Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Visit Our Showroom</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <GoogleMap address="26086 W 8 Mile Rd, Southfield, Michigan 48033" />
            <div className="p-6 text-center">
              <p className="text-lg font-semibold mb-2">Quality Work Granite</p>
              <p className="text-gray-600 dark:text-gray-300">26086 W 8 Mile Rd</p>
              <p className="text-gray-600 dark:text-gray-300">Southfield, Michigan 48033</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 