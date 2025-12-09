import ProjectCard from '../ui/ProjectCard';

const projects = [
  {
    title: 'Public Health Website',
    category: 'Web Development',
    image: '/images/publichealth.jpg',
  },
  {
    title: 'Startup Rebranding',
    category: 'Brand Design',
    image: '/images/pavilionEXP.jpg',
  },  
];

export default function FeaturedProjects() {
  return (
    <section className="py-16 fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-2xl font-bold mb-6">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-2">
          {projects.map((project) => (
            <div key={project.title} className="fade-up">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
