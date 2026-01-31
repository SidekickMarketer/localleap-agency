import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'LocalLeap',
  description:
    'We help local service businesses get more customers through proven digital marketing strategies. Google Ads, SEO, Social Media, and more.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://localleap.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/localleap',
    linkedin: 'https://linkedin.com/company/localleap',
    facebook: 'https://facebook.com/localleap',
    instagram: 'https://instagram.com/localleap',
  },
};

export const navigation = [
  { title: 'Services', href: '#services' },
  { title: 'Results', href: '#results' },
  { title: 'Process', href: '#process' },
  { title: 'Pricing', href: '#pricing' },
];

// Default content for when Sanity is not connected
export const defaultContent = {
  hero: {
    badge: 'Now accepting new clients',
    headline: 'Get More Customers.',
    highlightedText: 'Guaranteed.',
    subheadline:
      'We help local service businesses dominate their market with proven digital marketing strategies. No fluff. No long-term contracts. Just results.',
    primaryCta: {
      text: 'Get Your Free Strategy Session',
      href: '#contact',
    },
    secondaryCta: {
      text: 'See Our Results',
      href: '#results',
    },
    features: ['No long-term contracts', 'Results in 30 days'],
  },
  services: [
    {
      _id: '1',
      title: 'Google Ads Management',
      description:
        'Show up at the exact moment customers search for your services. We manage your campaigns for maximum ROI.',
      icon: 'Search',
      features: [
        'Keyword research & strategy',
        'Ad copywriting & testing',
        'Conversion tracking',
      ],
    },
    {
      _id: '2',
      title: 'Local SEO',
      description:
        'Rank #1 in Google Maps and local searches. We optimize your presence so customers find you first.',
      icon: 'MapPin',
      features: [
        'Google Business Profile optimization',
        'Citation building',
        'Review management',
      ],
    },
    {
      _id: '3',
      title: 'Social Media Management',
      description:
        'Stay top of mind with consistent, engaging content. We handle everything from strategy to posting.',
      icon: 'Share2',
      features: [
        'Content creation & design',
        'Community management',
        'Performance analytics',
      ],
    },
    {
      _id: '4',
      title: 'Email Marketing',
      description:
        'Turn past customers into repeat buyers. Automated campaigns that nurture leads and drive sales.',
      icon: 'Mail',
      features: [
        'Automated sequences',
        'Newsletter campaigns',
        'Win-back campaigns',
      ],
    },
    {
      _id: '5',
      title: 'Website Design',
      description:
        'Beautiful websites that convert visitors into customers. Mobile-friendly, fast, and built to generate leads.',
      icon: 'Monitor',
      features: ['Custom design', 'SEO optimized', 'Conversion focused'],
    },
    {
      _id: '6',
      title: 'Meta Ads',
      description:
        'Reach your ideal customers where they spend their time. Targeted campaigns that drive real leads.',
      icon: 'Target',
      features: [
        'Audience targeting',
        'Retargeting campaigns',
        'Lead generation ads',
      ],
    },
  ],
  stats: [
    { value: '127%', label: 'Avg. Lead Increase' },
    { value: '4.2x', label: 'Return on Ad Spend' },
    { value: '#1', label: 'Google Rankings' },
    { value: '50+', label: 'Happy Clients' },
  ],
  caseStudies: [
    {
      _id: '1',
      title: 'Luxe Aesthetics',
      client: 'Luxe Aesthetics',
      industry: 'Med Spa',
      description:
        'LocalLeap transformed our marketing. We went from struggling to fill our calendar to having a 3-week waitlist.',
      metrics: [
        { label: 'Monthly Leads', before: '12', after: '47', improvement: '+292%' },
        { label: 'Google Ranking', before: '#8', after: '#1', improvement: '' },
        { label: 'Revenue Growth', before: '', after: '+186%', improvement: '' },
      ],
      slug: 'luxe-aesthetics',
    },
    {
      _id: '2',
      title: 'Elite Comfort HVAC',
      client: 'Elite Comfort Systems',
      industry: 'HVAC',
      description:
        'Best marketing investment we\'ve ever made. The ROI speaks for itself - we 5x\'d our ad spend in the first month.',
      metrics: [
        { label: 'Cost per Lead', before: '$89', after: '$31', improvement: '-65%' },
        { label: 'Monthly Calls', before: '23', after: '78', improvement: '+239%' },
        { label: 'ROAS', before: '', after: '5.2x', improvement: '' },
      ],
      slug: 'elite-comfort-hvac',
    },
    {
      _id: '3',
      title: 'Bright Smile Dental',
      client: 'Bright Smile Dental',
      industry: 'Dental',
      description:
        'Finally, a marketing partner who understands our industry. New patient numbers have never been better.',
      metrics: [
        { label: 'New Patients/mo', before: '18', after: '52', improvement: '+189%' },
        { label: 'Reviews', before: '89', after: '312', improvement: '+251%' },
        { label: 'Revenue Growth', before: '', after: '+94%', improvement: '' },
      ],
      slug: 'bright-smile-dental',
    },
  ],
  testimonials: [
    {
      _id: '1',
      name: 'Michael Rodriguez',
      role: 'Owner',
      company: 'Elite Comfort HVAC',
      content:
        "We've worked with several marketing agencies before. LocalLeap is the first one that actually delivered on their promises. Our phone hasn't stopped ringing.",
      rating: 5,
    },
    {
      _id: '2',
      name: 'Sarah Kim',
      role: 'Founder',
      company: 'Luxe Aesthetics Med Spa',
      content:
        'From our very first call, I knew these guys were different. They asked questions about my business that no other agency ever asked. The results speak for themselves.',
      rating: 5,
    },
    {
      _id: '3',
      name: 'Dr. James Patterson',
      role: 'Owner',
      company: 'Bright Smile Dental',
      content:
        'I was skeptical about hiring another marketing company after being burned twice. LocalLeap restored my faith. Transparent, honest, and they actually get results.',
      rating: 5,
    },
  ],
  pricing: [
    {
      _id: '1',
      name: 'Starter',
      price: 1500,
      description:
        'Perfect for businesses just getting started with digital marketing.',
      features: [
        'Google Business Profile management',
        '12 social posts/month (2 platforms)',
        'Monthly performance report',
        'Email support',
      ],
      highlighted: false,
      ctaText: 'Get Started',
      ctaHref: '#contact',
    },
    {
      _id: '2',
      name: 'Growth',
      price: 2500,
      description:
        'Our most popular package for established businesses ready to grow.',
      features: [
        'Everything in Starter, plus:',
        'Google Ads management',
        'Local SEO campaign',
        '20 social posts/month (3 platforms)',
        '1 blog post/month',
        'Bi-weekly strategy calls',
      ],
      highlighted: true,
      highlightLabel: 'MOST POPULAR',
      ctaText: 'Get Started',
      ctaHref: '#contact',
    },
    {
      _id: '3',
      name: 'Scale',
      price: 4000,
      description: 'For businesses ready to dominate their market completely.',
      features: [
        'Everything in Growth, plus:',
        'Meta Ads (Facebook/Instagram)',
        '30 social posts/month',
        '4 blog posts/month',
        'Email marketing (2 campaigns/mo)',
        'Weekly strategy calls',
      ],
      highlighted: false,
      ctaText: 'Get Started',
      ctaHref: '#contact',
    },
  ],
  faqs: [
    {
      _id: '1',
      question: 'How quickly will I see results?',
      answer:
        'Most clients see initial results within 30 days. Google Ads typically shows results within the first week. SEO and organic efforts take 3-6 months to fully mature, but you\'ll see incremental improvements along the way.',
    },
    {
      _id: '2',
      question: 'Do you require long-term contracts?',
      answer:
        'No. We believe in earning your business every month. We have a 3-month minimum commitment to allow enough time to show results, then it\'s month-to-month with 30-day cancellation notice.',
    },
    {
      _id: '3',
      question: 'What industries do you work with?',
      answer:
        'We specialize in local service businesses: dental offices, med spas, HVAC, plumbing, roofing, law firms, gyms, restaurants, auto repair, and similar industries. If you serve customers in a specific geographic area, we can likely help.',
    },
    {
      _id: '4',
      question: 'What about ad spend - is that included?',
      answer:
        'Our fees cover management and strategy. Ad spend (what you pay Google or Facebook directly) is separate and paid by you directly to the platform. We typically recommend starting with $1,000-2,000/month in ad spend.',
    },
    {
      _id: '5',
      question: 'How do you communicate with clients?',
      answer:
        "You'll have a dedicated point of contact. We communicate via email and scheduled calls (frequency depends on your package). Premium clients get Slack access for faster communication.",
    },
  ],
  process: [
    {
      title: 'Discovery Call',
      description:
        'We learn about your business, goals, and challenges. Free, no pressure.',
    },
    {
      title: 'Custom Strategy',
      description:
        'We build a marketing plan tailored to your specific market and competition.',
    },
    {
      title: 'Launch & Optimize',
      description:
        'We execute the strategy and continuously optimize for better results.',
    },
    {
      title: 'Watch It Grow',
      description:
        'See more customers, more revenue, and more time back in your schedule.',
    },
  ],
};
