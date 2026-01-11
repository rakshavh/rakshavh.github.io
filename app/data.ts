type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'r/AskWomen',
    description:
      'Moderation and pseudo-anonymity as enablers of open, respectful dialogue. Findings from observing a subreddit where participants engage in conversations about health, identity, and gender-related issues.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Unbind',
    description:
      'Conducted participatory workshops with rural handicraft communities in India to examine how localized practices of artisans and intergenerational skill transmission inform sustainability and technology interventions.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Moderation and pseudo-anonymity as enablers of open, respectful dialogue. Findings from observing a subreddit where participants engage in conversations about health, identity, and gender-related issues.',
    title: 'r/AskWomen',
    start: '',
    end: '',
    link: 'https://drive.google.com/file/d/1U0pDAxWM4Mz2QMbivAPXU-voYh0cB_WW/view?usp=sharing',
    id: 'work1',
  },
  {
    company: 'Conducted participatory workshops with rural handicraft communities in India to examine how localized practices of artisans and intergenerational skill transmission inform sustainability and technology interventions.',
    title: 'Unbind',
    start: '',
    end: '',
    link: 'https://elastic-coneflower-ca0.notion.site/Workshops-at-Unbind-180d081bc09a80e6bbafe24427d6ede3?source=copy_link',
    id: 'work2',
  },
  {
    company: 'Collaborated in a team of 5 with the Netflix UX Research team to evaluate media review and sharing workflows across production hubs, identifying opportunities to reduce errors and improve bulk processes.',
    title: 'Netflix Workspaces (Winter 2023)',
    start: '',
    end: '',
    link: 'https://www.rakshavh.com/netflixworkspace-updated',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: '"If we post, what will people think of us?”: Offline Norms, Online Engagement, and Unpacking Gendered Experiences in a Pakistani Facebook Tech Community',
    description: 'Research Assistant, co-authored paper (under review). A qualitative HCI research study on gendered participation, harm, and privacy in a Pakistani Facebook Tech Community.',
    link: '/blog/tech-aids',
    uid: 'blog-1',
  },
  {
    title: 'Challenges and design opportunities for online schooling in India',
    description:
      'Nikith Joshua DSouza, Samadrita Sarkar, Raksha Hungund, and Deepak Ranjan Padhi (2022). In Proceedings of the 12th Indian Conference on Human-Computer Interaction (IndiaHCI ’21). Association for Computing Machinery, New York, NY, USA, 94–98.',
    link: 'https://dl.acm.org/doi/10.1145/3506469.3506484',
    uid: 'blog-2',
  }]

  export const RELATED_WORK: BlogPost[] = [
  {
    title: 'r/AskWomen',
    description:
      'Moderation and pseudo-anonymity as enablers of open, respectful dialogue. Findings from observing a subreddit where participants engage in conversations about health, identity, and gender-related issues.',
    link: 'https://drive.google.com/file/d/1U0pDAxWM4Mz2QMbivAPXU-voYh0cB_WW/view?usp=drive_link',
    uid: 'blog-3',
  },
  {
    title: 'Unbind: Participatory design workshops with rural handicraft communities',
    description: 'Conducted participatory workshops with rural handicraft communities in India to examine how localized practices of artisans and intergenerational skill transmission inform sustainability and technology interventions.',
    link: 'https://www.notion.so/Workshops-at-Unbind-180d081bc09a80e6bbafe24427d6ede3',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Resume',
    link: 'https://github.com/ibelick',
  },
  {
    label: 'Bluesky',
    link: 'https://bsky.app/profile/rakshavh.bsky.social',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/raksha-vh',
  },
  {
    label: 'UX Portfolio',
    link: 'https://www.rakshavh.com',
  },
]

export const EMAIL = 'rakshavh@umich.edu'
