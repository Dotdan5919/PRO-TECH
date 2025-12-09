import Image from 'next/image';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamMember({ name, role, image }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
      <div className="relative w-24 h-24 mb-4">
        <Image 
          src={image}
          alt={`Headshot of ${name}`}
          fill
          className="rounded-full object-cover border-2 border-primary"
        />
      </div>
      <h3 className="text-slate-900 dark:text-white text-lg font-bold">{name}</h3>
      <p className="text-primary text-sm font-medium">{role}</p>
    </div>
  );
}
