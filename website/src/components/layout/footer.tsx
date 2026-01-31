import Link from 'next/link';
import { siteConfig, founderInfo, navigation } from '@/lib/config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-400 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-semibold text-lg text-white">
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-md leading-relaxed">
              {siteConfig.description}
            </p>
            <p className="mt-6 text-sm">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-xs uppercase tracking-wider text-stone-500 mb-4 font-medium">
                Navigation
              </div>
              <div className="flex flex-col gap-3">
                {navigation.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="hover:text-white transition-colors text-sm"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider text-stone-500 mb-4 font-medium">
                Contact
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <a
                  href={`mailto:${founderInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {founderInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
