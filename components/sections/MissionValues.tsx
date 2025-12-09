import ServiceCard from '../ui/ServiceCard';

const values = [
  {
    icon: 'lightbulb',
    title: 'Innovation',
    description: 'We constantly explore new technologies to deliver cutting-edge solutions.',
  },
  {
    icon: 'verified',
    title: 'Quality',
    description: 'Our commitment to excellence ensures every project meets the highest standards.',
  },
  {
    icon: 'handshake',
    title: 'Partnership',
    description: 'We work collaboratively with our clients to achieve shared success.',
  },
];

export default function MissionValues() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-2xl font-bold mb-6">
          Our Mission & Values
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <ServiceCard key={value.title} {...value} hover={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
