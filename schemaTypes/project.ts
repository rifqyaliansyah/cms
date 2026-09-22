import { defineArrayMember, defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Deskripsi 1-2 kalimat untuk kartu di landing page',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Project Gallery',
      type: 'array',
      description: 'Galeri foto pendukung proyek / case study',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
        }),
      ],
    }),
    defineField({
      name: 'content',
      title: 'Project Content (Rich Editor)',
      type: 'blockContent',
      description: 'Dokumentasi lengkap / Case Study proyek',
    }),
    defineField({
      name: 'projectUrl',
      title: 'Live URL / Case Study Link',
      type: 'url',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Feature on Landing Page?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
