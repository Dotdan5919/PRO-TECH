// page composition imports
import Services from '@/components/sections/Services';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import DiagonalTicker from '@/components/ui/DiagonalTicker';

export default function HomePage() {
  return (
    <main className="flex-1">
      <div className="px-4 sm:px-8 md:px-20 lg:px-10 py-5">
        <div className="max-w-[1500px] mx-auto">
          {/* Hero Section */}
          <div className="pt-10 fade-up stagger">
            <div className="p-4">
              <div 
                className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-4 pb-10 sm:px-10"
                style={{
                  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBrE-DQGBuzjtk1E-96WgZO3W0L0M0gyCvPCMKEHEbS8F6IK7Oi3_32vbD6zhNBE8GBBItGhXrvFZOSHG85cjoN5M8-r5YiSrZ2thfFwCQSZqIbIwqn_lgGnbaQ7Hf5k8AimnBwRcnDjKL4tPkH6l6Q4beg-biqa-n5dNJY-EdLh4UwUO4ABowXqO_P98CeVNFvWY84XRw8sBHQTNRVQ7gRLAwJfYbBD6OuQHBCLjhgt967m9LIfoGI1XUIG-Zvy4qush18ibxVJjky")'
                }}
              >
                <div className="flex flex-col gap-2 text-left max-w-2xl">
                  <h1 className="text-white text-4xl sm:text-5xl font-black leading-tight tracking-tight">
                    We Build Powerful Digital Experiences
                  </h1>
                  <h2 className="text-white/90 text-sm sm:text-base font-normal leading-normal">
                    ProTech is your partner in web development, video editing, and brand design. Let us bring your vision to life.
                  </h2>
                </div>
                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 sm:h-12 px-4 sm:px-5 bg-primary hover:bg-primary/90 text-white text-sm sm:text-base font-bold leading-normal tracking-wide transition-colors">
                  <span className="truncate">Start Your Project</span>
                </button>
              </div>
            </div>
          </div>
          {/* Diagonal moving text ticker */}
          <DiagonalTicker />

          {/* Services Section */}
          <Services />

          {/* Featured Projects */}
          <FeaturedProjects />

          {/* Testimonials */}
          <Testimonials />

          {/* CTA Section */}
          <CTA 
            title="Let's Build Something Amazing Together"
            description="Ready to start your next project? Drop us a line and we'll get back to you as soon as possible."
            buttonText="Contact Us"
            buttonHref="/contact"
          />
        </div>
      </div>
    </main>
  );
}

