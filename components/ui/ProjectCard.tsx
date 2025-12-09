import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  href?: string;
}

export default function ProjectCard({ title, category, image, href = '#' }: ProjectCardProps) {
  return (
    <a 
      href={href}
      className="group relative overflow-hidden rounded-xl cursor-pointer block"
    >
      <div className="relative h-80 w-full">
        <Image 
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-white/80 text-sm">{category}</p>
      </div>
    </a>
  );
}
