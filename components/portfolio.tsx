"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { MapPin, ArrowRight } from "lucide-react"
import { motion, AnimatePresence, Variants } from "framer-motion"

// --- Project Data ---
// In a real app, you might fetch this data from a CMS or API
const allProjectsData = [
  {
    id: "residential-1",
    image: "/projects/residential-1.jpg",
    category: "Residential",
    title: "Ganga View Residences",
    location: "Assi Ghat, Varanasi",
    description:
      "Luxury residential complex with stunning Ganga views, combining modern amenities with traditional Varanasi architecture.",
  },
  {
    id: "commercial-1",
    image: "/projects/commercial-1.jpg",
    category: "Commercial",
    title: "Heritage Mall Complex",
    location: "Cantonment, Varanasi",
    description:
      "Modern shopping and entertainment complex designed to serve the growing commercial needs of Varanasi.",
  },
  {
    id: "renovation-1",
    image: "/projects/renovation-1.jpg",
    category: "Renovation",
    title: "Ancient Haveli Restoration",
    location: "Old City, Varanasi",
    description:
      "Careful restoration of a 200-year-old haveli, preserving its historical significance while adding modern comforts.",
  },
  {
    id: "residential-2",
    image: "/projects/residential-2.jpg",
    category: "Residential",
    title: "Silk Weaver Housing",
    location: "Sarai Mohana, Varanasi",
    description:
      "Affordable housing project designed specifically for the silk weaving community, honoring their cultural heritage.",
  },
  {
    id: "commercial-2",
    image: "/projects/commercial-2.jpg",
    category: "Commercial",
    title: "Tech Park Varanasi",
    location: "Ramnagar, Varanasi",
    description:
      "State-of-the-art technology park bringing modern workspace solutions to Varanasi's growing IT sector.",
  },
  {
    id: "renovation-2",
    image: "/projects/renovation-2.jpg",
    category: "Renovation",
    title: "Temple Complex Renovation",
    location: "Dashashwamedh Ghat, Varanasi",
    description:
      "Sensitive renovation of ancient temple complex, maintaining spiritual sanctity while ensuring structural integrity.",
  },
]

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects")
  const [hasAnimated, setHasAnimated] = useState(false)
  const filterButtons = ["All Projects", "Residential", "Commercial", "Renovation"]

  // Memoize the filtered projects to avoid re-calculating on every render
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All Projects") {
      return allProjectsData
    }
    return allProjectsData.filter((project) => project.category === activeFilter)
  }, [activeFilter])

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

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 14, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onAnimationComplete={() => setHasAnimated(true)}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our diverse range of projects that showcase our commitment to excellence and innovation in
            construction and design.
          </p>
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
                key={project.id}
                variants={cardVariants}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
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
                  key={project.id}
                  variants={filterCardVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
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
      </div>
    </section>
  )
}

export default PortfolioSection