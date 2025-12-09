'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../ui/Button';
import Icon from '../ui/Icon';
import { clsx } from 'clsx';
import Image from 'next/image';
import Logo from '@/public/images/protech_white.png';

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
    <header className="sticky top-0 z-50 bg-[#240202]/80  backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-10">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 text-white">
            
            <Image src={Logo} alt="ProTech Logo" width={100} height={24} className=" " />
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
                    : 'text-white/80 hover:text-primary'
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
              className="md:hidden text-white"
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
                    : 'text-white/80'
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
