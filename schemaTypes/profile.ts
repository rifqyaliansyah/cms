import { defineArrayMember, defineField, defineType } from 'sanity'

export const profile = defineType({
  name: 'profile',
  title: 'Profile & Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      initialValue: 'Rifqy Aliansyah',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Hero Headline',
      type: 'text',
      rows: 3,
      description: 'Headline utama di bagian Hero',
      initialValue:
        'Design Engineer who ships products, not just mockups. Part of Google Indonesia',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'avatar',
      title: 'Profile Picture',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
    }),
    defineField({
      name: 'quickSkills',
      title: 'Quick Skill Badges (Hero)',
      description: 'Skill pill badge di bawah Hero (misal: React/Next.js, TypeScript, Figma)',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      initialValue: ['React / Next.js', 'TypeScript', 'Figma', 'Node.js', 'Tailwind CSS'],
    }),
    defineField({
      name: 'heroPreviewImages',
      title: 'Hero Showcase Images (Right side)',
      description: '3 gambar preview di samping hero section',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'alt', type: 'string', title: 'Alt Text' }],
        }),
      ],
    }),
    defineField({
      name: 'aboutHeadline',
      title: 'About Me Headline',
      type: 'string',
      initialValue: 'Design is how I solve problems and create impact.',
    }),
    defineField({
      name: 'aboutBio',
      title: 'About Me Bio',
      type: 'text',
      rows: 4,
      initialValue:
        "I'm a multidisciplinary designer who loves crafting meaningful and functional digital experiences. With a keen eye for detail and a passion for design, I help brands and products connect with their audience.",
    }),
    defineField({
      name: 'highlights',
      title: 'About Me Highlights / Stats',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon Name / Key', type: 'string' },
            { name: 'label', title: 'Highlight Text', type: 'string' },
          ],
        }),
      ],
      initialValue: [
        { label: '5+ Years of Experience', icon: 'briefcase' },
        { label: 'Based in Indonesia', icon: 'map-pin' },
        { label: 'Open to freelance & collaborations', icon: 'sparkles' },
      ],
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'githubUsername',
      title: 'GitHub Username',
      type: 'string',
      initialValue: 'rifqyaliansyah',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform Name',
              type: 'string',
              options: {
                list: [
                  { title: 'X (Twitter)', value: 'x' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Threads', value: 'threads' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'GitHub', value: 'github' },
                ],
              },
            },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        }),
      ],
    }),
  ],
})
