import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
      options: {
        list: [
          { title: 'Dental', value: 'dental' },
          { title: 'Med Spa', value: 'medspa' },
          { title: 'HVAC', value: 'hvac' },
          { title: 'Plumbing', value: 'plumbing' },
          { title: 'Roofing', value: 'roofing' },
          { title: 'Law Firm', value: 'law' },
          { title: 'Restaurant', value: 'restaurant' },
          { title: 'Fitness', value: 'fitness' },
          { title: 'Auto Repair', value: 'auto' },
          { title: 'Real Estate', value: 'realestate' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metrics',
      title: 'Results Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'before', title: 'Before', type: 'string' },
            { name: 'after', title: 'After', type: 'string' },
            { name: 'improvement', title: 'Improvement %', type: 'string' },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(2).max(4),
    }),
    defineField({
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'fullContent',
      title: 'Full Case Study',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    }),
  ],
  preview: {
    select: {
      title: 'client',
      subtitle: 'industry',
      media: 'image',
    },
  },
});
