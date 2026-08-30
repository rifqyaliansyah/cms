import { defineField, defineType } from 'sanity'

export const tool = defineType({
  name: 'tool',
  title: 'Tools I Use',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Tool Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Design', value: 'design' },
          { title: 'Development', value: 'development' },
          { title: 'Productivity', value: 'productivity' },
        ],
      },
      initialValue: 'design',
    }),
    defineField({
      name: 'icon',
      title: 'Tool Icon / Logo',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Official Website URL',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
  ],
})
