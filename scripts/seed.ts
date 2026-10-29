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
    quickSkills: [
      { _key: 'qs1', name: 'React / Next.js' },
      { _key: 'qs2', name: 'TypeScript' },
      { _key: 'qs3', name: 'Figma' },
      { _key: 'qs4', name: 'Node.js' },
      { _key: 'qs5', name: 'Tailwind CSS' },
    ],
    stats: [
      { _key: 'st1', label: 'Projects Shipped', value: 12, suffix: '+' },
      { _key: 'st2', label: 'REST APIs Built', value: 10, suffix: '+' },
      { _key: 'st3', label: 'Years Building', value: 2, suffix: '+' },
      { _key: 'st4', label: 'Certifications', value: 6, suffix: '' },
      { _key: 'st5', label: 'Technologies', value: 12, suffix: '+' },
      { _key: 'st6', label: 'Internship', value: 1, suffix: '' },
    ],
    aboutHeadline: 'Design is how I solve problems and create impact.',
    aboutBio:
      "I'm a multidisciplinary designer who loves crafting meaningful and functional digital experiences. With a keen eye for detail and a passion for design, I help brands and products connect with their audience.",
    highlights: [
      { _key: 'h1', label: '5+ Years of Experience', icon: 'briefcase' },
      { _key: 'h2', label: 'Based in Indonesia', icon: 'map-pin' },
      { _key: 'h3', label: 'Open to freelance & collaborations', icon: 'sparkles' },
    ],
    email: 'rifqyaliansyah@gmail.com',
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
      isFeatured: true,
      order: 1,
    },
    {
      _id: 'project-fintech',
      _type: 'project',
      title: 'Fintech Mobile App',
      slug: { _type: 'slug', current: 'fintech-mobile-app' },
      description: 'Designing a seamless banking experience for the new generation.',
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

  // 4. Seed Tools
  const tools = [
    { _id: 'tool-figma', _type: 'tool', name: 'Figma', order: 1 },
    { _id: 'tool-nextjs', _type: 'tool', name: 'React / Next.js', order: 2 },
    { _id: 'tool-typescript', _type: 'tool', name: 'TypeScript', order: 3 },
    { _id: 'tool-tailwind', _type: 'tool', name: 'Tailwind CSS', order: 4 },
    { _id: 'tool-nodejs', _type: 'tool', name: 'Node.js', order: 5 },
    { _id: 'tool-vscode', _type: 'tool', name: 'VS Code', order: 6 },
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
