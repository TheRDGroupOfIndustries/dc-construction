import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    // CHANGE: The height is now set to 'h-screen' to take up the full viewport height.
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Overlay */}
      {/* UPDATED: Switched from deprecated layout="fill" to the modern fill prop. */}
      <Image
        src="/hero.jpg"
        alt="Construction site background"
        fill
        quality={100}
        className="z-0 object-cover" // objectFit is now a className
      />
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div> {/* Dark overlay */}

      {/* Content */}
      <div className="relative z-20 text-white max-w-4xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Building Dreams,
          <br />
          <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
            Designing Futures
          </span>
        </h2>
       <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Varanasi&apos;s premier construction and design firm, creating exceptional spaces with modern innovation and traditional values
        </p>

        {/* Buttons */}
       <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/projects">
            <button className="bg-gradient-to-r from-red-600 to-red-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-red-700 hover:to-red-900 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              Explore Projects
            </button>
          </Link>
          <Link href="/contact">
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all transform hover:scale-105 whitespace-nowrap cursor-pointer">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

    
    </section>
  );
};

export default HeroSection;