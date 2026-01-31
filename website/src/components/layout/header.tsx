'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { siteConfig, navigation } from '@/lib/config';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-3xl mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Logo - Simple text */}
          <Link href="/" className="font-medium text-stone-900">
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-stone-600 hover:text-stone-900 transition-colors text-sm"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-stone-600" />
            ) : (
              <Menu className="w-5 h-5 text-stone-600" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-stone-600 hover:text-stone-900 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
