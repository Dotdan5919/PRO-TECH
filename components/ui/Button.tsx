import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  href,
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

  const classNames = clsx(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    // When rendering as a Link we intentionally do not forward arbitrary
    // button-only props to avoid type mismatches; className and children
    // are sufficient for styling and content.
    return (
      <Link href={href} className={classNames}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}
