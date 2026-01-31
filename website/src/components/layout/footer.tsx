import Link from 'next/link';
import { TrendingUp } from 'lucide-react';
import { Container } from '@/components/ui';
import { siteConfig } from '@/lib/config';

const quickLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Results', href: '/results' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const services = [
  { name: 'Google Ads', href: '/services/google-ads' },
  { name: 'Local SEO', href: '/services/local-seo' },
  { name: 'Social Media', href: '/services/social-media' },
  { name: 'Meta Ads', href: '/services/meta-ads' },
  { name: 'Email Marketing', href: '/services/email-marketing' },
  { name: 'Website Design', href: '/services/website-design' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <Container>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mb-4 max-w-md">{siteConfig.description}</p>
            <p className="text-sm">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
