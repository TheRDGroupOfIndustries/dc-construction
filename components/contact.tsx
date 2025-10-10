"use client"

import React, { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion } from "framer-motion"

const contactDetails = [
  {
    Icon: MapPin,
    title: "Our Office",
    details: ["123 Construction Plaza, Cantonment Area", "Varanasi, Uttar Pradesh 221002, India"],
  },
  { Icon: Phone, title: "Phone", details: ["+91 9876543210", "+91 9876543211"] },
  { Icon: Mail, title: "Email", details: ["info@drconstructions.com", "projects@drconstructions.com"] },
  {
    Icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday: 9:00 AM - 6:00 PM", "Sunday: 10:00 AM - 4:00 PM"],
  },
]

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [charCount, setCharCount] = useState(0)
  const [status, setStatus] = useState<{ state: "idle" | "sending" | "success" | "error"; message: string }>({ state: 'idle', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (name === "message") setCharCount(value.length)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus({ state: 'sending', message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus({ state: 'success', message: 'Message sent successfully! Thank you.' })
        setFormData({ name: "", email: "", phone: "", message: "" })
        setCharCount(0)
      } else {
        throw new Error(result.error ?? 'Something went wrong.')
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Something went wrong.'
      setStatus({ state: 'error', message })
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 14, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Let&apos;s Build Together</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your construction or design project? Get in touch with us and let&apos;s discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.06 }}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-6"
              variants={{
                hidden: { y: 12, opacity: 0 },
                show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
              }}
            >
              Get In Touch
            </motion.h3>

            <div className="space-y-6">
              {contactDetails.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  variants={{
                    hidden: { y: 12, opacity: 0 },
                    show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: "easeOut" } },
                  }}
                >
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.Icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600">
                      {item.details.map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8"
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <iframe
                src="https://maps.google.com/maps?q=Varanasi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ y: 18, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder:text-gray-400 text-sm" placeholder="Enter your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-black focus:ring-red-500 focus:border-transparent placeholder:text-gray-400 text-sm" placeholder="Enter your email address" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:ring-2 focus:ring-red-500 focus:border-transparent placeholder:text-gray-400 text-sm" placeholder="Enter your phone number" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required maxLength={500} rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm placeholder:text-gray-400  text-black resize-none" placeholder="Tell us about your project requirements..."></textarea>
                  <div className="text-right text-xs text-gray-500 mt-1">{charCount}/500 characters</div>
                </div>

                <button
                  type="submit"
                  disabled={status.state === 'sending'}
                  className="font-semibold rounded-lg transition-all duration-300 cursor-pointer whitespace-nowrap bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-xl px-8 py-4 text-lg w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status.state === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {status.message && (
                  <p className={`text-center text-sm mt-4 ${status.state === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {status.message}
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
