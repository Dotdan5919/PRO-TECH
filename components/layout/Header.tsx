'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { clsx } from 'clsx';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-10">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 text-slate-900 dark:text-white">
            <Icon name="hub" className="text-primary text-2xl" />
            <h2 className="text-lg font-bold leading-tight tracking-tight">ProTech</h2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-9">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'text-sm font-medium leading-normal transition-colors',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-slate-700 dark:text-white/80 hover:text-primary'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button size="sm" className="hidden md:flex">
              Get a Quote
            </Button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-900 dark:text-white"
              aria-label="Toggle menu"
            >
              <Icon name={mobileMenuOpen ? 'close' : 'menu'} className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={clsx(
                  'block text-sm font-medium py-2 transition-colors',
                  pathname === item.href
                    ? 'text-primary'
                    : 'text-slate-700 dark:text-white/80'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" className="w-full">
              Get a Quote
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
