'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { siteConfig, navigation } from '@/lib/config';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-6">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="font-semibold text-lg text-stone-900">
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-stone-600 hover:text-stone-900 transition-colors text-sm font-medium"
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors text-sm font-medium"
            >
              Get in touch
              <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
            </Link>
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
          <div className="md:hidden py-4 border-t border-stone-100">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="text-stone-600 hover:text-stone-900 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2.5 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors font-medium mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in touch
                <ArrowRight className="ml-1.5 w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
