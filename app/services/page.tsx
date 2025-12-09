import ServiceCard from '@/components/ui/ServiceCard';
import Button from '@/components/ui/Button';
import CTA from '@/components/sections/CTA';
import Image from 'next/image';
import webdev from '@/public/images/webdev.jpg';

const webDevFeatures = [
  {
    icon: 'devices',
    title: 'Responsive Design',
    description: 'Websites that look and perform perfectly on any device, from desktops to smartphones.',
  },
  {
    icon: 'shopping_cart',
    title: 'E-commerce Solutions',
    description: 'Powerful online stores that drive sales and provide a seamless customer experience.',
  },
  {
    icon: 'view_quilt',
    title: 'Custom CMS',
    description: "Easy-to-manage content systems that put you in control of your website's content.",
  },
];

const videoFeatures = [
  {
    icon: 'motion_photos_on',
    title: 'Motion Graphics',
    description: 'Dynamic animations and effects that captivate your audience and elevate your message.',
  },
  {
    icon: 'palette',
    title: 'Color Grading',
    description: 'Professional color correction and grading to create a stunning, cinematic look.',
  },
  {
    icon: 'graphic_eq',
    title: 'Sound Design',
    description: 'Crystal-clear audio mixing and sound effects that bring your video to life.',
  },
];

const brandFeatures = [
  {
    icon: 'design_services',
    title: 'Logo Design',
    description: "A unique and memorable logo that perfectly represents your brand's essence.",
  },
  {
    icon: 'auto_stories',
    title: 'Brand Style Guides',
    description: 'Comprehensive guidelines to ensure your brand remains consistent across all platforms.',
  },
  {
    icon: 'perm_media',
    title: 'Marketing Collateral',
    description: 'Beautifully designed materials, from business cards to digital ads, that make an impact.',
  },
];

export default function ServicesPage() {
  return (
    <main className="flex-1  fade-up stagger">
      <div className="px-4 sm:px-8 md:px-20 lg:px-10 py-5">
        <div className="max-w-[1500px] mx-auto">
          {/* Hero Section */}
          <section className="py-16 sm:py-20 lg:py-24">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex flex-col gap-6 text-left md:w-1/2">
                <h1 className="text-white text-4xl md:text-5xl font-black leading-tight">
                  Building Digital Experiences That Drive Results.
                </h1>
                <p className="text-white/70 text-base md:text-lg">
                  ProTech crafts exceptional websites, videos, and brands to elevate your digital presence and drive business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="#">Get a Quote</Button>
                  <Button  href="#" variant="secondary">Our Work</Button>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative h-96 fade-up stagger">
                <Image 
                  src={webdev}
                  alt="Abstract gradient"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </section>

          {/* Web Development */}
          <section className="py-16 border-t border-primary/20 fade-up stagger">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Custom Web Development
            </h2>
            <p className="text-white/70 text-base mb-6 max-w-2xl">
              We build bespoke websites tailored to your unique business needs, from custom solutions and e-commerce platforms to powerful Content Management Systems.
            </p>
            <Button className="mb-8">View Web Projects</Button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {webDevFeatures.map((feature) => (
                <ServiceCard key={feature.title} {...feature} />
              ))}
            </div>
          </section>

          {/* Video Editing */}
          <section className="py-16 border-t border-primary/20 fade-up stagger">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Engaging Video Editing
            </h2>
            <p className="text-white/70 text-base mb-6 max-w-2xl">
              Our video editing services transform your raw footage into compelling stories. We specialize in motion graphics, color grading, and sound design.
            </p>
            <Button className="mb-8">Learn More</Button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {videoFeatures.map((feature) => (
                <ServiceCard key={feature.title} {...feature} />
              ))}
            </div>
          </section>

          {/* Brand Design */}
          <section className="py-16 border-t border-primary/20 fade-up stagger">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Strategic Brand Design
            </h2>
            <p className="text-white/70 text-base mb-6 max-w-2xl">
              We help you build a powerful brand identity that resonates with your target audience. From logo design to complete marketing collateral.
            </p>
            <Button className="mb-8">See Our Branding Work</Button>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {brandFeatures.map((feature) => (
                <ServiceCard key={feature.title} {...feature} />
              ))}
            </div>
          </section>

          {/* CTA */}
          <CTA 
            title="Ready to Start Your Project?"
            description="Let's build something amazing together. Contact us today to discuss your vision and get a free quote."
            buttonText="Contact Us Today"
          />
        </div>
      </div>
    </main>
  );
}