'use client'

import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Tony Vacaru',
    role: 'Founder & Master Countertop Designer',
    image: '/images/Team/Tony2.jpg',
    bio: 'Over 10 years of expertise in crafting and customizing granite countertops to perfection.',
  },
  {
    name: 'Denis Vacaru',
    role: 'Countertop Design Consultant',
    image: '/images/Team/Denis3.jpg',
    bio: 'Specialist in designing stunning kitchen and bathroom spaces with premium granite countertops.',
  },
  {
    name: 'Bogdan Costea',
    role: 'Granite Installation Expert',
    image: '/images/Team/Bogdan3.jpg',
    bio: '5 years of experience in precision installation of granite countertops for homes and businesses.',
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
          QualityWorkGranite is your go-to source for all things granite countertops. Our team of experts has years of experience working with this 
          versatile and durable material, allowing us to bring you the best in design, craftsmanship, and quality. We understand the importance of having 
          a functional and beautiful kitchen, and that&apos;s why we work closely with our clients to create custom solutions that fit their specific needs and preferences. 
          From selection to installation, QualityWorkGranite is dedicated to delivering a seamless and stress-free experience. Upgrade your kitchen today with 
          granite countertops from QualityWorkGranite and enjoy a space that is both functional and beautiful for years to come.
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
                    style={{ objectPosition: '0 30%' }}
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
      </div>
    </div>
  )
} 