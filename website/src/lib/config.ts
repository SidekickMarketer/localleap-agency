import type { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'LocalLeap',
  description:
    'I help local service businesses get more customers through digital marketing that actually works.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://localleap.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: '', // Add your Twitter/X if you have one
    linkedin: '', // Add your LinkedIn
  },
};

// Your info - REPLACE THESE WITH YOUR REAL DETAILS
export const founderInfo = {
  name: '[YOUR NAME]', // e.g., "Kyle Naughtrip"
  email: 'hello@localleap.com',
  phone: '', // Optional: your business phone
  location: '', // e.g., "Austin, TX" or leave blank
  calendlyUrl: '', // Your Calendly or Cal.com link for booking calls
  linkedinUrl: '',
  twitterUrl: '',
};

export const navigation = [
  { title: 'Services', href: '/services' },
  { title: 'Pricing', href: '/pricing' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' },
];

// Services you actually offer
export const services = [
  {
    title: 'Google Ads',
    slug: 'google-ads',
    shortDescription: 'Get in front of people actively searching for your services.',
    description:
      'When someone searches "dentist near me" or "emergency plumber," you want to be the first result they see. I set up and manage Google Ads campaigns that put you there.',
    whatYouGet: [
      'Campaign setup and structure',
      'Keyword research for your specific market',
      'Ad copywriting that converts',
      'Ongoing optimization and testing',
      'Monthly reporting on what\'s working',
    ],
  },
  {
    title: 'Local SEO',
    slug: 'local-seo',
    shortDescription: 'Show up when locals search for what you do.',
    description:
      'Most of your customers will find you through Google. Local SEO makes sure you show up in the map pack and local results when they search.',
    whatYouGet: [
      'Google Business Profile optimization',
      'Local citation building',
      'Review generation strategy',
      'On-page SEO for local keywords',
      'Monthly ranking reports',
    ],
  },
  {
    title: 'Social Media',
    slug: 'social-media',
    shortDescription: 'Stay visible to your community.',
    description:
      'You don\'t need to go viral. You need to stay top of mind with the people in your area. Consistent, relevant posts that remind people you exist.',
    whatYouGet: [
      'Content planning and strategy',
      'Post creation and scheduling',
      'Community engagement',
      'Monthly performance review',
    ],
  },
  {
    title: 'Website Design',
    slug: 'website-design',
    shortDescription: 'A website that actually brings in business.',
    description:
      'Most local business websites are either outdated or built for looks, not leads. I build simple, fast websites designed to turn visitors into customers.',
    whatYouGet: [
      'Custom design that fits your business',
      'Mobile-friendly and fast',
      'Clear calls to action',
      'Basic SEO setup',
      'Easy to update yourself',
    ],
  },
];

// How you work - be honest about your process
export const workProcess = [
  {
    step: 1,
    title: 'We Talk',
    description:
      'A 30-minute call where I learn about your business, your goals, and what you\'ve tried before. No pitch, just conversation.',
  },
  {
    step: 2,
    title: 'I Dig In',
    description:
      'I look at your current online presence, your competitors, and your market. Then I put together a straightforward plan.',
  },
  {
    step: 3,
    title: 'We Decide',
    description:
      'I walk you through what I\'d recommend and why. You decide if it makes sense. No pressure.',
  },
  {
    step: 4,
    title: 'I Get to Work',
    description:
      'If we move forward, I handle the execution. You get regular updates and can always reach me with questions.',
  },
];

// FAQs - honest answers
export const faqs = [
  {
    question: 'How much does this cost?',
    answer:
      'It depends on what you need. Most clients spend between $1,500-3,000/month for ongoing marketing. One-time projects like website design start around $3,000. I\'ll give you a clear quote after we talk.',
  },
  {
    question: 'Do you lock people into contracts?',
    answer:
      'No long-term contracts. I ask for a 3-month minimum to give things time to work, then it\'s month-to-month. If I\'m not delivering, you can leave.',
  },
  {
    question: 'How quickly will I see results?',
    answer:
      'Google Ads can start bringing leads within days. SEO takes longer - usually 3-6 months to see real movement. I\'ll set realistic expectations upfront.',
  },
  {
    question: 'What industries do you work with?',
    answer:
      'Local service businesses - dentists, med spas, HVAC, plumbers, lawyers, gyms. If you serve customers in a specific area, we should talk.',
  },
  {
    question: 'Will I own everything you create?',
    answer:
      'Yes. Your website, your ad accounts, your content - it\'s all yours. If we stop working together, you keep everything.',
  },
];
