import ServiceCard from '../ui/ServiceCard';

const services = [
  {
    icon: 'code',
    title: 'Web Development',
    description: 'Creating responsive, high-performance websites that drive growth and engagement.',
  },
  {
    icon: 'movie_edit',
    title: 'Video Editing',
    description: 'Producing compelling video content that tells your story and captivates your audience.',
  },
  {
    icon: 'design_services',
    title: 'Brand Design',
    description: 'Building memorable brand identities that resonate with your target market.',
  },
];

export default function Services() {
  return (
    <section className="py-16 fade-up">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-4 mb-8">
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight">
            What We Do
          </h2>
          <p className="text-slate-600 dark:text-white/70 text-base md:text-lg max-w-2xl">
            We offer a complete suite of creative and technical services to elevate your brand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 stagger-2">
          {services.map((service) => (
            <div key={service.title} className="fade-up">
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
