import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pricing',
  title: 'Pricing Tier',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Package Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Monthly Price',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'features',
      title: 'Included Features',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: 'highlighted',
      title: 'Highlight This Tier',
      type: 'boolean',
      description: 'Make this the featured/recommended tier',
      initialValue: false,
    }),
    defineField({
      name: 'highlightLabel',
      title: 'Highlight Label',
      type: 'string',
      description: 'e.g., "Most Popular"',
      hidden: ({ parent }) => !parent?.highlighted,
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'Get Started',
    }),
    defineField({
      name: 'ctaHref',
      title: 'CTA Link',
      type: 'string',
      initialValue: '#contact',
    }),
  ],
  orderings: [
    {
      title: 'Price',
      name: 'priceAsc',
      by: [{ field: 'price', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      price: 'price',
    },
    prepare({ title, price }) {
      return {
        title,
        subtitle: `$${price}/month`,
      };
    },
  },
});
