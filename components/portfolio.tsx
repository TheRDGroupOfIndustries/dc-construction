"use client"

import { useState, useMemo, useEffect } from "react"
import Image from "next/image"
import { MapPin, ArrowRight } from "lucide-react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { client } from "@/sanity/lib/sanity"
import { urlFor } from "@/sanity/lib/sanity"
import { Project } from "@/sanity/types/project"

const projectsQuery = `*[_type == "project"]  {
  _id,
  title,
  slug,
  category,
  location,
  description,
  mainImage,
  featured,
}`

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects")
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  

  // Fetch projects from Sanity
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(projectsQuery)
        setProjects(data)
      } catch (error) {
        console.error("Error fetching projects:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  // Dynamically generate filter buttons based on available categories
  const filterButtons = useMemo(() => {
    if (!projects.length) return ["All Projects"]
    
    // Extract unique categories from projects
    const categories = [...new Set(projects.map(project => project.category))]
      .filter(Boolean) // Remove any null/undefined categories
      .sort() // Sort alphabetically
    
    return ["All Projects", ...categories]
  }, [projects])

  // Memoize the filtered projects
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") {
      return projects
    }
    return projects.filter((project) => project.category === activeFilter)
  }, [activeFilter, projects])

  const cardVariants: Variants = {
    hidden: { y: 15, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    },
  }

  const filterCardVariants: Variants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  }

  // Loading state
  if (loading) {
    return (
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-xl shadow-lg animate-pulse">
                  <div className="h-64 bg-gray-300 rounded-t-xl"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-3"></div>
                    <div className="h-4 bg-gray-300 rounded mb-4"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 14, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
         
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our diverse range of projects that showcase our commitment to excellence and innovation in
            construction and design.
          </p>
          
          {/* Dynamic Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.06, delayChildren: 0.05 }}
          >
            {filterButtons.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
                }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeFilter === filter
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-600"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {activeFilter === "All Projects" ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ staggerChildren: 0.08 }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                variants={cardVariants}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  {project.mainImage && (
                    <Image
                      src={urlFor(project.mainImage).width(600).height(400).url()}
                      alt={project.mainImage.alt || project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin size={16} className="mr-2" />
                    <span className="text-sm">{project.location}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex items-center text-red-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                    View Details
                    <ArrowRight size={20} className="ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project._id}
                  variants={filterCardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    {project.mainImage && (
                      <Image
                        src={urlFor(project.mainImage).width(600).height(400).url()}
                        alt={project.mainImage.alt || project.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-4">{project.description}</p>
                    <div className="flex items-center text-red-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                      View Details
                      <ArrowRight size={20} className="ml-2" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {filteredProjects.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default PortfolioSection