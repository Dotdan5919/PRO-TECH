interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className = 'text-3xl' }: IconProps) {
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {name}
    </span>
  );
}
