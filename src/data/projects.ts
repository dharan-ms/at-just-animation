export type Project = {
  slug: string
  title: string
  year: string
  client: string
  type: string
  tags: string
  description: string
  link?: string
  accent: string
  image: string
}

export const projects: Project[] = [
  {
    slug: 'sustainable-horizons',
    title: 'Sustainable Horizons',
    year: '2023',
    client: 'WSJ',
    type: 'xr',
    tags: '2023 / WSJ / xr',
    description:
      'Explore a vision of the future created with AI. Concept, script, prompt engineering, sound, and visuals were created in a suite of generative AI tools.',
    link: 'https://www.wsj.com/',
    accent: '#c9a84c',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'paper-planes',
    title: 'Paper Planes',
    year: '2016',
    client: 'Google & Droga5',
    type: 'installation',
    tags: '2016 / Google & Droga5 / installation',
    description:
      'A multi-player experience that lets users create, throw and catch paper planes. Created to open the Google IO conference in 2016, users have continued to engage — downloading the app over 500,000 times.',
    link: 'https://paperplanes.world/',
    accent: '#7eb8da',
    image:
      'https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'racer',
    title: 'Racer',
    year: '2014',
    client: 'Google',
    type: 'installation',
    tags: '2014 / Google / installation',
    description:
      'A multi-device racing experience that syncs in real-time. Developed for Google’s I/O developer conference.',
    accent: '#e24a3b',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'discover-your-patronus',
    title: 'Discover your Patronus',
    year: '2016',
    client: 'Warner Bros.',
    type: 'website',
    tags: '2016 / Warner Bros. / website',
    description:
      'An immersive personality experience that guides fans through a cinematic quiz to reveal their Patronus — built for the Wizarding World.',
    accent: '#9ad0ff',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'prometheus',
    title: 'Prometheus',
    year: '2019',
    client: 'Active Theory',
    type: 'xr, ai',
    tags: '2019 / Active Theory / xr, ai',
    description:
      'A real-time generative music and visual system exploring machine collaboration, performance, and reactive 3D worlds.',
    accent: '#d4a0ff',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'echo',
    title: 'E.C.H.O.',
    year: '2020',
    client: 'Active Theory',
    type: 'xr',
    tags: '2020 / Active Theory / xr',
    description:
      'An experimental XR installation where sound, light, and space respond to presence — turning the room into a living instrument.',
    accent: '#62e0c4',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'kandinsky',
    title: 'Kandinsky',
    year: '2021',
    client: 'Active Theory',
    type: 'ai',
    tags: '2021 / Active Theory / ai',
    description:
      'A visual playground inspired by abstract composition — turning generative prompts into kinetic color fields.',
    accent: '#ff8a5b',
    image:
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'welcome-to-hogwarts',
    title: 'Welcome to Hogwarts',
    year: '2018',
    client: 'Warner Bros.',
    type: 'website',
    tags: '2018 / Warner Bros. / website',
    description:
      'A cinematic web experience that invites fans into Hogwarts — storytelling, sound design, and interactive set pieces on the open web.',
    accent: '#c9a227',
    image:
      'https://images.unsplash.com/photo-1509248961158-e54f6932829c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: '20-years-of-xbox',
    title: '20 Years of Xbox',
    year: '2021',
    client: 'Xbox',
    type: 'website',
    tags: '2021 / Xbox / website',
    description:
      'A commemorative interactive timeline celebrating two decades of Xbox — built as a high-performance storytelling experience.',
    accent: '#107c10',
    image:
      'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'secret-sky',
    title: 'Secret Sky',
    year: '2020',
    client: 'Porter Robinson',
    type: 'multiplayer',
    tags: '2020 / Porter Robinson / multiplayer',
    description:
      'A virtual music festival world — communal spaces, live performances, and shared discovery across devices.',
    accent: '#6ec6ff',
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'frontier-within',
    title: 'Frontier Within',
    year: '2022',
    client: 'Active Theory',
    type: 'xr',
    tags: '2022 / Active Theory / xr',
    description:
      'An inward expedition through procedural landscapes — quiet, luminous environments designed for reflection and presence.',
    accent: '#8fd9a8',
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'chile-20',
    title: 'Chile 20',
    year: '2018',
    client: 'Chile',
    type: 'website',
    tags: '2018 / Chile / website',
    description:
      'A national storytelling experience marking twenty years of cultural and creative milestones.',
    accent: '#e63946',
    image:
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'million-piece-mission',
    title: 'Million Piece Mission',
    year: '2017',
    client: 'Active Theory',
    type: 'installation',
    tags: '2017 / Active Theory / installation',
    description:
      'A collaborative installation where millions of digital fragments assemble into a shared monumental form.',
    accent: '#f4d35e',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'harmonic-state',
    title: 'Harmonic State',
    year: '2022',
    client: 'Active Theory',
    type: 'xr, ai',
    tags: '2022 / Active Theory / xr, ai',
    description:
      'A reactive audiovisual world where harmonic structures drive geometry, light, and motion in real time.',
    accent: '#b388ff',
    image:
      'https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&w=1600&q=80',
  },
]

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug)
}
