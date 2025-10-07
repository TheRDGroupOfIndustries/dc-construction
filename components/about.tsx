"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.06 }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
              variants={{
                hidden: { y: 16, opacity: 0 },
                show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
              }}
            >
              Our Story
            </motion.h2>
            {[
              "Founded in the heart of Varanasi, D & R Constructions and Design has been transforming the architectural landscape of this ancient city for over a decade. We understand the delicate balance between preserving Varanasi's rich heritage and embracing modern construction techniques.",
              "Our journey began with a simple vision: to create spaces that honor the cultural essence of Varanasi while meeting contemporary lifestyle needs. From traditional homes in the old city to modern commercial complexes, we've built our reputation on quality, integrity, and innovation.",
              "Today, we stand as Varanasi's trusted construction partner, having completed over 200 projects and touched countless lives through our work. Our team combines local expertise with global best practices, ensuring every project reflects our commitment to excellence.",
            ].map((t, i) => (
              <motion.p
                key={i}
                className={`text-lg text-gray-700 ${i < 2 ? "mb-8" : "mb-10"}`}
                variants={{
                  hidden: { y: 12, opacity: 0 },
                  show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut", delay: i * 0.02 } },
                }}
              >
                {t}
              </motion.p>
            ))}

            <motion.div
              className="grid grid-cols-3 gap-6"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.05 }}
            >
              {[
                { value: "200+", label: "Projects Completed" },
                { value: "12+", label: "Years Experience" },
                { value: "500+", label: "Happy Clients" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  variants={{
                    hidden: { y: 12, opacity: 0 },
                    show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
                  }}
                >
                  <div className="text-3xl font-bold text-red-600">{s.value}</div>
                  <div className="text-gray-600">{s.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="relative"
            initial={{ scale: 0.98, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src="/story.jpg"
              alt="Professional construction team and architects working on building plans"
              width={800}
              height={533}
              className="rounded-lg shadow-2xl object-cover w-full h-96"
            />

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg"
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                    <circle cx="12" cy="8" r="6" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Award Winning</div>
                  <div className="text-gray-600">Excellence in Construction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
