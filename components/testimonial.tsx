"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

// --- Testimonial Data ---
const testimonialsData = [
  {
    image: "/testimonials/client-1.jpg",
    name: "Rajesh Sharma",
    title: "Homeowner",
    location: "Assi Ghat, Varanasi",
    quote:
      "D & R Constructions transformed our vision into reality. Their attention to detail and respect for our cultural preferences made the entire process seamless. Our new home perfectly blends modern comfort with traditional Varanasi charm.",
    rating: 5,
  },
  {
    image: "/testimonials/client-2.webp",
    name: "Priya Agarwal",
    title: "Business Owner",
    location: "Cantonment, Varanasi",
    quote:
      "The commercial complex they built for us exceeded all expectations. The project was completed on time and within budget. Their team's professionalism and expertise in local regulations saved us countless headaches.",
    rating: 5,
  },
  {
    image: "/testimonials/client-3.webp",
    name: "Dr. Amit Verma",
    title: "Medical Professional",
    location: "Lanka, Varanasi",
    quote:
      "When we needed to renovate our century-old clinic, D & R was the obvious choice. They preserved the building's historical character while creating a modern, functional medical facility. Exceptional work!",
    rating: 5,
  },
  {
    image: "/testimonials/client-4.webp",
    name: "Sunita Devi",
    title: "Silk Weaver",
    location: "Sarai Mohana, Varanasi",
    quote:
      "They built affordable housing for our weaving community with such care and understanding. The homes are beautiful, practical, and honor our traditions. We are grateful for their commitment to our community.",
    rating: 5,
  },
  {
    image: "/testimonials/client-5.webp",
    name: "Vikash Singh",
    title: "Hotel Owner",
    location: "Dashashwamedh Ghat, Varanasi",
    quote:
      "Our heritage hotel renovation was a complex project, but D & R handled it with expertise and sensitivity. They maintained the historical authenticity while adding modern amenities. Our guests love the result!",
    rating: 5,
  },
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? testimonialsData.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonialsData.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  const currentTestimonial = testimonialsData[currentIndex]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: 14, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about their
            experience with D & R Constructions.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            key={currentIndex}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Image
                  src={currentTestimonial.image || "/placeholder.svg"}
                  alt={currentTestimonial.name}
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="text-yellow-400" fill="currentColor" size={24} />
                  ))}
                </div>
                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
                  &quot;{currentTestimonial.quote}&quot;
                </blockquote>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{currentTestimonial.name}</div>
                  <div className="text-red-600 font-medium">{currentTestimonial.title}</div>
                  <div className="text-gray-600 text-sm">{currentTestimonial.location}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 md:-left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 transition-colors cursor-pointer"
          >
            <ChevronLeft className="text-red-600" size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 md:-right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-50 transition-colors cursor-pointer"
          >
            <ChevronRight className="text-red-600" size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonialsData.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                currentIndex === slideIndex ? "bg-red-600" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
