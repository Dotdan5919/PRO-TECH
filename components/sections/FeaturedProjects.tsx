
import Link from 'next/link';
import ProjectCard from '../ui/ProjectCard';


// Add as many project entries here as you like. For seamless infinite scrolling
// we'll duplicate the list in the track so it appears continuous.
const projects = [
  {
    title: 'Public Health Website',
    category: 'Web Development',
    image: '/images/publichealth.jpg',
    href: '/portfolio/public-health-website',
  },
  {
    title: 'Startup Rebranding',
    category: 'Brand Design',
    image: '/images/pavilionEXP.jpg',
     href: '/portfolio/public-health-website'
  },
  {
    title: 'Salem Edinburgh',
    category: 'Web Development',
    image: '/images/salem.png',
     href: '/portfolio/public-health-website'
  },
  {
    title: 'Kainos Autos',
    category: 'Ui/Ux Design',
    image: '/images/KAE.jpg',
     href: '/portfolio/public-health-website'
  },
];

export default function FeaturedProjects() {
  // Duplicate array for seamless loop
  const loopItems = [...projects, ...projects];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-2xl font-bold mb-6">Featured Projects</h2>

        {/* Horizontal infinite marquee */}
        <div className="relative overflow-hidden">
          <div  className="marquee" aria-hidden>
            <div className="marquee-track">
              {loopItems.map((project, idx) => (
                <div  key={`${project.title}-${idx}`} className="marquee-item w-72 mr-6">
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>

          {/* Controls: pause on hover is enabled in CSS; optionally add arrows or buttons here */}
        </div>
      </div>
    </section>
  );
}
