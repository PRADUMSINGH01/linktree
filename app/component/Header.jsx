import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-500 to-blue-600 text-white dark:bg-black py-20 font-basic">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-5xl font-extrabold leading-tight mb-6 animate-fade-in-down">
            Simplify Link Sharing <br />
            with <span className="text-yellow-300">YourSaaS</span>
          </h1>
          <p className="text-lg mb-8 animate-fade-in-up">
            Create your own personalized link page, share it with anyone, and
            track your engagement. Perfect for creators, influencers, and
            businesses.
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
            <Link
              href="/Dashboard"
              className="px-6 py-3 bg-yellow-400 text-black rounded-full font-bold hover:bg-yellow-300"
            >
              Get Started
            </Link>
            <Link
              href="/learn-more"
              className="px-6 py-3 bg-gray-200 text-black rounded-full font-bold hover:bg-gray-100"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right SVG Image */}
        <div className="mt-12 lg:mt-0 lg:w-1/2">
          <Image
            src="/svgs/linktree.svg"
            alt="Hero Illustration"
            width={500}
            height={500}
            className="animate-float"
          />
        </div>
      </div>

      {/* Decorative Blur Circles */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-10 w-40 h-40 bg-blue-400 opacity-30 rounded-full blur-3xl"></div>
    </section>
  );
}
