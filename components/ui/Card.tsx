import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = false }: CardProps) {
  return (
    <div 
      className={clsx(
        'rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-4',
        hover && 'transition-all hover:border-primary/50 hover:bg-primary/10 card-lift',
        className
      )}
    >
      {children}
    </div>
  );
}
