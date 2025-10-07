"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <Image src="/hero.jpg" alt="Construction site background" fill quality={100} className="z-0 object-cover" />
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      <div className="relative z-20 text-white max-w-4xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
          <motion.span
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="block"
          >
            Building Dreams,
          </motion.span>
          <motion.span
            className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent block"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Designing Futures
          </motion.span>
        </h2>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          Varanasi&apos;s premier construction and design firm, creating exceptional spaces with modern innovation and
          traditional values
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.6 },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            <Link href="/projects">
              <button
                type="button"
                className="font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl px-8 py-4 text-lg transform hover:scale-105"
              >
                Explore Projects
              </button>
            </Link>
          </motion.div>

          <motion.div
            variants={{
              hidden: { y: 20, opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
            }}
          >
            <Link href="/contact">
              <button
                type="button"
                className="font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap border-2 px-8 py-4 text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900"
              >
                Contact Us
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
