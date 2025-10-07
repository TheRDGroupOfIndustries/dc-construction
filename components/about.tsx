import Image from "next/image";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content and Stats */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Story</h2> {/* Increased margin */}
            <p className="text-lg text-gray-700 mb-8"> {/* Increased margin */}
              Founded in the heart of Varanasi, D &amp; R Constructions and Design has been transforming the architectural landscape of this ancient city for over a decade. We understand the delicate balance between preserving Varanasi&apos;s rich heritage and embracing modern construction techniques.
            </p>
            <p className="text-lg text-gray-700 mb-8"> {/* Increased margin */}
              Our journey began with a simple vision: to create spaces that honor the cultural essence of Varanasi while meeting contemporary lifestyle needs. From traditional homes in the old city to modern commercial complexes, we&apos;ve built our reputation on quality, integrity, and innovation.
            </p>
            <p className="text-lg text-gray-700 mb-10"> {/* Increased margin */}
              Today, we stand as Varanasi&apos;s trusted construction partner, having completed over 200 projects and touched countless lives through our work. Our team combines local expertise with global best practices, ensuring every project reflects our commitment to excellence.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">200+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">12+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">500+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Column: Image and Award Badge */}
          <div className="relative">
            <Image
              src="/story.jpg" // Using your specified image source
              alt="Professional construction team and architects working on building plans"
              width={800}
              height={533}
              className="rounded-lg shadow-2xl object-cover w-full h-96"
            />

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center">
                  {/* Cleaned up SVG Icon */}
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"/><circle cx="12" cy="8" r="6"/></svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Award Winning</div>
                  <div className="text-gray-600">Excellence in Construction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;