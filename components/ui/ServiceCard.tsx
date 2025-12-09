import Icon from './Icon';
import Card from './Card';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  hover?: boolean;
}

export default function ServiceCard({ icon, title, description, hover = true }: ServiceCardProps) {
  return (
    <Card hover={hover} className="flex flex-col gap-4">
      <Icon name={icon} className="text-primary text-3xl" />
      <div className="flex flex-col gap-1">
        <h3 className="text-white text-base font-bold leading-tight">
          {title}
        </h3>
        <p className="text-white/60 text-sm font-normal leading-normal">
          {description}
        </p>
      </div>
    </Card>
  );
}
