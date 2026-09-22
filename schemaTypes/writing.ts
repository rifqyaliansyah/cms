import { defineField, defineType } from 'sanity'

export const writing = defineType({
  name: 'writing',
  title: 'Writing / Articles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Article Title',
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
      name: 'excerpt',
      title: 'Excerpt / Summary',
      type: 'text',
      rows: 2,
      description: 'Ringkasan singkat untuk tampilan kartu di landing page',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
    }),
    defineField({
      name: 'content',
      title: 'Article Content (Rich Editor)',
      type: 'blockContent',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External Article URL (Optional)',
      type: 'url',
      description: 'Isi jika artikel di-host di platform eksternal seperti Medium/Substack',
    }),
  ],
})
