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
      title: 'Quick Skills (Under Headline)',
      type: 'array',
      description: 'Daftar skill/teknologi yang tampil sebagai badge di bawah headline hero',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'quickSkill',
          title: 'Quick Skill',
          fields: [
            defineField({
              name: 'name',
              title: 'Skill Name',
              type: 'string',
              placeholder: 'e.g. React / Next.js, Figma, TypeScript',
              validation: (Rule) => Rule.required().error('Nama skill wajib diisi'),
            }),
            defineField({
              name: 'icon',
              title: 'Custom Icon (SVG / PNG)',
              type: 'image',
              description:
                'Upload file icon (format SVG/PNG transparan direkomendasikan). Jika dikosongkan, frontend akan menggunakan icon default.',
              options: {
                hotspot: false,
              },
            }),
          ],
          preview: {
            select: {
              title: 'name',
              media: 'icon',
            },
          },
        }),
      ],
      initialValue: [
        { name: 'React / Next.js' },
        { name: 'TypeScript' },
        { name: 'Figma' },
        { name: 'Node.js' },
        { name: 'Tailwind CSS' },
      ],
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
      description: 'Email utama untuk menerima pesan dari tombol "Discuss a project"',
      validation: (Rule) =>
        Rule.required()
          .email()
          .error('Mohon masukkan format email yang valid (contoh: name@domain.com)'),
      initialValue: 'rifqyaliansyah@gmail.com',
    }),
    defineField({
      name: 'githubUsername',
      title: 'GitHub Username',
      type: 'string',
      initialValue: 'rifqyaliansyah',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Footer Social Links',
      type: 'array',
      description:
        'Daftar tautan sosial media yang tampil di footer. Bisa ditambah, dihapus, dan diatur urutannya.',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'socialLink',
          title: 'Social Link',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform / Label',
              type: 'string',
              placeholder: 'e.g. GitHub, X, Instagram, Dribbble, LinkedIn, YouTube',
              validation: (Rule) => Rule.required().error('Nama platform wajib diisi'),
            }),
            defineField({
              name: 'url',
              title: 'Target URL',
              type: 'url',
              placeholder: 'https://...',
              validation: (Rule) =>
                Rule.required()
                  .uri({ scheme: ['http', 'https', 'mailto'] })
                  .error('Mohon masukkan URL yang valid'),
            }),
            defineField({
              name: 'customIcon',
              title: 'Custom Icon (SVG / PNG)',
              type: 'image',
              description:
                'Upload icon kustom (SVG/PNG transparan). Jika dikosongkan, platform populer (X, Instagram, Threads, LinkedIn, YouTube, GitHub) akan menggunakan vector icon bawaan.',
            }),
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
              media: 'customIcon',
            },
          },
        }),
      ],
    }),
  ],
})
