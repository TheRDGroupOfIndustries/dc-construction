"use client"

import React from "react"
import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { motion, Variants } from "framer-motion"

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const servicesLinks = [
  "Residential Projects",
  "Commercial Projects",
  "Renovations",
  "Interior Design",
  "Project Management",
]

const socialLinks = [
  { Icon: Facebook, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Linkedin, href: "#" },
]

const fadeUp:Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div variants={fadeUp} className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-pacifico mb-4">D & R Constructions</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Building Dreams, Designing Futures in Varanasi. We combine traditional craftsmanship with modern innovation
              to create exceptional spaces.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer"
                  variants={fadeUp}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <social.Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, i) => (
                <motion.li key={link.name} variants={fadeUp} transition={{ delay: 0.2 + i * 0.1 }}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {servicesLinks.map((service, i) => (
                <motion.li key={service} variants={fadeUp} transition={{ delay: 0.2 + i * 0.1 }}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
          variants={fadeUp}
          transition={{ delay: 0.6 }}
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            D & R Constructions and Design – Building with Trust in Varanasi
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            © {new Date().getFullYear()} D & R Constructions. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
