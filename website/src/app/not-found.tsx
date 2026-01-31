import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="text-8xl font-serif text-stone-200 mb-4">404</div>
        <h1 className="text-2xl font-serif text-stone-900 mb-4">
          Page not found
        </h1>
        <p className="text-stone-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors font-medium"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
