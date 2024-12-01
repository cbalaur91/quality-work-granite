'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Modern Kitchen Renovation',
    category: 'kitchen',
    image: '/images/kitchen/4.jpg',
    description: 'Contemporary granite countertops with waterfall edge',
  },
  {
    id: 2,
    title: 'Luxury Master Bath',
    category: 'bathroom',
    image: '/images/bathroom/1.jpg',
    description: 'Double vanity with matching granite surfaces',
  },
  {
    id: 3,
    title: 'Outdoor Entertainment Area',
    category: 'outdoor',
    image: '/images/outdoor/8.jpg',
    description: 'Weather-resistant granite outdoor kitchen',
  },
  {
    id: 4,
    title: 'Modern Kitchen Renovation',
    category: 'kitchen',
    image: '/images/kitchen/6.jpg',
    description: 'Weather-resistant granite outdoor kitchen',
  },
  {
    id: 5,
    title: 'Modern Kitchen Renovation',
    category: 'kitchen',
    image: '/images/kitchen/16.jpg',
    description: 'Weather-resistant granite outdoor kitchen',
  },
  {
    id: 6,
    title: 'Modern Kitchen Renovation',
    category: 'kitchen',
    image: '/images/kitchen/20.jpg',
    description: 'Weather-resistant granite outdoor kitchen',
  },
  {
    id: 7,
    title: 'Luxury Master Bath',
    category: 'bathroom',
    image: '/images/bathroom/3.jpg',
    description: 'Double vanity with matching granite surfaces',
  },
  {
    id: 8,
    title: 'Luxury Master Bath',
    category: 'bathroom',
    image: '/images/bathroom/5.jpg',
    description: 'Double vanity with matching granite surfaces',
  },
  {
    id: 9,
    title: 'Luxury Master Bath',
    category: 'bathroom',
    image: '/images/bathroom/9.jpg',
    description: 'Double vanity with matching granite surfaces',
  },
  {
    id: 10,
    title: 'Outdoor Entertainment Area',
    category: 'outdoor',
    image: '/images/outdoor/10.jpg',
    description: 'Weather-resistant granite outdoor kitchen',
  },
]

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'kitchen', label: 'Kitchens' },
  { id: 'bathroom', label: 'Bathrooms' },
  { id: 'outdoor', label: 'Outdoor' },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects = projects.filter(
    (project) => selectedCategory === 'all' || project.category === selectedCategory
  )

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Work</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Browse through our portfolio of completed projects
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-md transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200 [.dark_&]:bg-black [.dark_&]:text-white [.dark_&]:hover:bg-gray-900 border [.dark_&]:border-gray-800'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-lg shadow-lg bg-white dark:bg-black"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-semibold mb-2 drop-shadow-lg">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 text-sm drop-shadow-md">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
} 