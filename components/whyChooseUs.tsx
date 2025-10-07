"use client"
import { Gem, Clock, Lightbulb, MapPin } from "lucide-react"
import { motion, Variants } from "framer-motion"

const featuresData = [
  {
    Icon: Gem,
    title: "Quality Construction",
    description:
      "We use premium materials and employ skilled craftsmen to ensure every project meets the highest standards of quality and durability.",
  },
  {
    Icon: Clock,
    title: "On-Time Delivery",
    description:
      "Our efficient project management ensures timely completion without compromising on quality, keeping your schedule and budget intact.",
  },
  {
    Icon: Lightbulb,
    title: "Modern Designs",
    description:
      "Contemporary architectural solutions that blend seamlessly with Varanasi's cultural heritage and modern lifestyle needs.",
  },
  {
    Icon: MapPin,
    title: "Local Expertise",
    description:
      "Deep understanding of Varanasi's unique architectural requirements, local regulations, and cultural sensitivities.",
  },
]

const itemVariants:Variants = {
  hidden: { y: 16, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
}

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 14, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We bring together experience, innovation, and local expertise to deliver exceptional construction and design
            solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.07 }}
        >
          {featuresData.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mx-auto group-hover:shadow-2xl transition-all duration-300">
                  <feature.Icon className="text-white" size={36} />
                </div>
                <div className="absolute inset-0 bg-red-600/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100 -z-10"></div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-center text-white"
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss your vision and bring it to life with our expertise and dedication.
          </p>
          <button className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap">
            Get Free Consultation
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
