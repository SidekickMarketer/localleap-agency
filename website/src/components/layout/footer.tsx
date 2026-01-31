import Link from 'next/link';
import { siteConfig, founderInfo, navigation } from '@/lib/config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 py-12">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-medium text-stone-900">
              {siteConfig.name}
            </Link>
            <p className="text-stone-500 text-sm mt-2 max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12">
            <div>
              <div className="text-xs uppercase tracking-wide text-stone-400 mb-3">
                Pages
              </div>
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-stone-600 hover:text-stone-900 text-sm transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-wide text-stone-400 mb-3">
                Contact
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href={`mailto:${founderInfo.email}`}
                  className="text-stone-600 hover:text-stone-900 transition-colors"
                >
                  {founderInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-stone-200 text-stone-400 text-sm">
          &copy; {currentYear} {siteConfig.name}
        </div>
      </div>
    </footer>
  );
}
