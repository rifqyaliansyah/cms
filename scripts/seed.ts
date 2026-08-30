import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function seed() {
  console.log('🚀 Memulai proses seeding data dummy ke Sanity...')

  // 1. Seed Profile
  const profileDoc = {
    _id: 'profile-rifqy',
    _type: 'profile',
    name: 'Rifqy Aliansyah',
    headline:
      'Design Engineer who ships products, not just mockups. Part of Google Indonesia',
    quickSkills: ['React / Next.js', 'TypeScript', 'Figma', 'Node.js', 'Tailwind CSS'],
    aboutHeadline: 'Design is how I solve problems and create impact.',
    aboutBio:
      "I'm a multidisciplinary designer who loves crafting meaningful and functional digital experiences. With a keen eye for detail and a passion for design, I help brands and products connect with their audience.",
    highlights: [
      { _key: 'h1', label: '5+ Years of Experience', icon: 'briefcase' },
      { _key: 'h2', label: 'Based in Indonesia', icon: 'map-pin' },
      { _key: 'h3', label: 'Open to freelance & collaborations', icon: 'sparkles' },
    ],
    githubUsername: 'rifqyaliansyah',
    socialLinks: [
      { _key: 's1', platform: 'x', url: 'https://x.com/' },
      { _key: 's2', platform: 'instagram', url: 'https://instagram.com/' },
      { _key: 's3', platform: 'threads', url: 'https://threads.net/' },
      { _key: 's4', platform: 'linkedin', url: 'https://linkedin.com/' },
      { _key: 's5', platform: 'youtube', url: 'https://youtube.com/' },
      { _key: 's6', platform: 'github', url: 'https://github.com/rifqyaliansyah' },
    ],
  }
  await client.createOrReplace(profileDoc)
  console.log('✅ Profile berhasil di-seed!')

  // 2. Seed Projects
  const projects = [
    {
      _id: 'project-ecommerce',
      _type: 'project',
      title: 'E-commerce Redesign',
      slug: { _type: 'slug', current: 'e-commerce-redesign' },
      description:
        'A complete overhaul of the user experience for a leading e-commerce platform.',
      tags: ['UI/UX', 'E-commerce', 'Web App'],
      isFeatured: true,
      order: 1,
    },
    {
      _id: 'project-fintech',
      _type: 'project',
      title: 'Fintech Mobile App',
      slug: { _type: 'slug', current: 'fintech-mobile-app' },
      description: 'Designing a seamless banking experience for the new generation.',
      tags: ['Mobile App', 'Fintech', 'Design System'],
      isFeatured: true,
      order: 2,
    },
    {
      _id: 'project-healthcare',
      _type: 'project',
      title: 'Healthcare Dashboard',
      slug: { _type: 'slug', current: 'healthcare-dashboard' },
      description:
        'Simplifying complex medical data into intuitive visual interfaces.',
      tags: ['Dashboard', 'Healthcare', 'Data Viz'],
      isFeatured: true,
      order: 3,
    },
    {
      _id: 'project-realestate',
      _type: 'project',
      title: 'Real Estate Platform',
      slug: { _type: 'slug', current: 'real-estate-platform' },
      description:
        'Connecting buyers and sellers through an immersive property search.',
      tags: ['Web Platform', 'Real Estate'],
      isFeatured: true,
      order: 4,
    },
    {
      _id: 'project-travel',
      _type: 'project',
      title: 'Travel Booking Site',
      slug: { _type: 'slug', current: 'travel-booking-site' },
      description:
        'A sleek and modern interface for booking flights and accommodations.',
      tags: ['Travel', 'Booking', 'Web App'],
      isFeatured: true,
      order: 5,
    },
  ]

  for (const proj of projects) {
    await client.createOrReplace(proj)
  }
  console.log(`✅ ${projects.length} Projects berhasil di-seed!`)

  // 3. Seed Writings
  const writings = [
    {
      _id: 'writing-ui-design-2024',
      _type: 'writing',
      title: 'The Future of UI Design in 2024',
      slug: { _type: 'slug', current: 'the-future-of-ui-design-in-2024' },
      excerpt:
        'Exploring upcoming trends in user interface design and how to prepare for them.',
      publishedAt: '2024-01-15T00:00:00Z',
      content: [
        {
          _key: 'b1',
          _type: 'block',
          style: 'normal',
          children: [
            {
              _key: 'c1',
              _type: 'span',
              text: 'The landscape of UI design is rapidly shifting with the emergence of AI tools, spatial interfaces, and dynamic theming systems...',
            },
          ],
        },
      ],
    },
    {
      _id: 'writing-accessible-web',
      _type: 'writing',
      title: 'Building Accessible Web Applications',
      slug: { _type: 'slug', current: 'building-accessible-web-applications' },
      excerpt:
        'A comprehensive guide to ensuring your web apps are usable by everyone.',
      publishedAt: '2024-02-10T00:00:00Z',
      content: [
        {
          _key: 'b2',
          _type: 'block',
          style: 'normal',
          children: [
            {
              _key: 'c2',
              _type: 'span',
              text: 'Accessibility (a11y) is not just a feature; it is a fundamental aspect of creating great user experiences across all devices...',
            },
          ],
        },
      ],
    },
    {
      _id: 'writing-micro-interactions',
      _type: 'writing',
      title: 'Mastering Micro-interactions',
      slug: { _type: 'slug', current: 'mastering-micro-interactions' },
      excerpt:
        'How small animations can make a huge impact on user experience.',
      publishedAt: '2024-03-05T00:00:00Z',
      content: [
        {
          _key: 'b3',
          _type: 'block',
          style: 'normal',
          children: [
            {
              _key: 'c3',
              _type: 'span',
              text: 'Micro-interactions bridge the gap between user intent and system feedback, elevating regular websites to delightful products...',
            },
          ],
        },
      ],
    },
  ]

  for (const post of writings) {
    await client.createOrReplace(post)
  }
  console.log(`✅ ${writings.length} Articles berhasil di-seed!`)

  // 4. Seed Testimonials
  const testimonials = [
    {
      _id: 'testimonial-dimas',
      _type: 'testimonial',
      name: 'Dimas Pratama',
      role: 'Product Manager',
      quote:
        'Rifqy selalu bisa nerjemahin requirement yang ambigu jadi UI yang rapi dan gampang dipakai.',
      order: 1,
    },
    {
      _id: 'testimonial-sarah',
      _type: 'testimonial',
      name: 'Sarah Amelia',
      role: 'UI/UX Designer',
      quote:
        'Kerja bareng Rifqy enak banget, komunikasinya jelas dan hasilnya selalu di atas ekspektasi.',
      order: 2,
    },
    {
      _id: 'testimonial-bagas',
      _type: 'testimonial',
      name: 'Bagas Nugraha',
      role: 'Software Engineer',
      quote:
        'Kolaborasi engineering dan design jadi super smooth, aset dan token desain selalu siap pakai.',
      order: 3,
    },
  ]

  for (const t of testimonials) {
    await client.createOrReplace(t)
  }
  console.log(`✅ ${testimonials.length} Testimonials berhasil di-seed!`)

  // 5. Seed Tools
  const tools = [
    { _id: 'tool-figma', _type: 'tool', name: 'Figma', category: 'design', order: 1 },
    { _id: 'tool-nextjs', _type: 'tool', name: 'React / Next.js', category: 'development', order: 2 },
    { _id: 'tool-typescript', _type: 'tool', name: 'TypeScript', category: 'development', order: 3 },
    { _id: 'tool-tailwind', _type: 'tool', name: 'Tailwind CSS', category: 'development', order: 4 },
    { _id: 'tool-nodejs', _type: 'tool', name: 'Node.js', category: 'development', order: 5 },
    { _id: 'tool-vscode', _type: 'tool', name: 'VS Code', category: 'productivity', order: 6 },
  ]

  for (const tl of tools) {
    await client.createOrReplace(tl)
  }
  console.log(`✅ ${tools.length} Tools berhasil di-seed!`)

  console.log('🎉 Seeding data selesai dengan sukses!')
}

seed().catch((err) => {
  console.error('❌ Error saat seeding data:', err)
  process.exit(1)
})
