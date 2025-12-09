import { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-bold leading-normal tracking-wide transition-all cursor-pointer rounded-xl inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    secondary: 'bg-primary/10 dark:bg-primary/20 text-primary hover:bg-primary/20 dark:hover:bg-primary/30',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  } as const;
  
  const sizes = {
    sm: 'h-10 px-4 text-sm',
    md: 'h-12 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
  } as const;

  return (
    <button 
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
