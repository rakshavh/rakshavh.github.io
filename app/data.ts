type Project = {
  name: string
  description: string
  link: string
  video: string
  image?: string
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
    name: 'Butternut AI (YC24)',
    description:
      'Led usability testing and interviews to uncover friction in website generation prompts and editor navigation.',
    link: 'https://rakshavh.info/butternut-updated-2',
    video: '',
    image: '/openai-logo-[remix]-2_v1 (1080p).gif',
    id: 'butternut-ai',
  },
  {
    name: 'Netflix Workspaces',
    description:
      'Evaluated media review and sharing workflows to reduce errors and streamline bulk operations.',
    link: 'https://rakshavh.info/netflixworkspace-updated',
    video: '',
    image: '/netflix.gif',
    id: 'netflix-workspaces-2023',
  },
  {
    name: 'UX Research for PCOS Care',
    description:
      'Conducted usability testing with patients and experts to improve a PCOS symptom-tracking app.',
    link: '',
    video: '',
    image: '/pcos-thumbnail.png',
    id: 'pcos-care',
  },
  // {
  //   name: 'Motion Primitives',
  //   description: 'UI kit to make beautiful, animated interfaces.',
  //   link: 'https://motion-primitives.com/',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
  //   id: 'project2',
  // },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'A UX research study examining barriers older adults face at self-checkout kiosks and proposing inclusive, ability-based design improvements',
    title: 'Accessibility in Self-Checkout Kiosks for Older Adults',
    start: '',
    end: '',
    link: 'https://drive.google.com/file/d/1YsdmWZGKKVPBrXNclYY4cH5NAhQB3IrB/view?usp=sharing',
    id: 'work-accessibility-kiosks',
  },
  {
    company: 'Moderation and pseudo-anonymity as enablers of open, respectful dialogue. Findings from observing a subreddit where participants engage in conversations about health, identity, and gender-related issues.',
    title: 'r/AskWomen',
    start: '',
    end: '',
    link: 'https://drive.google.com/file/d/1U0pDAxWM4Mz2QMbivAPXU-voYh0cB_WW/view?usp=sharing',
    id: 'work1',
  },
  {
    company: 'I vibe coded a web app called insight mapper to convert transcripts into themed notes and .csv files',
    title: 'Role of GenAI tools in UX',
    start: '',
    end: '',
    link: 'https://insight-mapper-test.vercel.app/',
    id: 'work-genai-ux',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: '"If we post, what will people think of us?”: Offline Norms, Online Engagement, and Unpacking Gendered Experiences in a Facebook Tech Community',
    description: 'Hamza Naveed*, Sheza Naveed*, Raksha Hungund*, Dr. Michaelanne Thomas (conditionally accepted for CHI 2026). A qualitative HCI research study on gendered participation, mirroring of offline norms, and privacy in a Facebook Tech Community.',
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
    link: 'https://drive.google.com/file/d/13BGB_35aSa5Kiquyt0ebz3s-h2q5BwbJ/view?usp=sharing',
  },
  {
    label: 'CV',
    link: 'https://drive.google.com/file/d/1xCMUtKqacg9Y9wzs66lHze2Lll6G6kqJ/view?usp=drive_link',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/raksha-vh',
  },
  {
    label: 'Substack',
    link: 'https://substack.com/@rakshavh',
  },
]

export const EMAIL = 'rakshavh@umich.edu'
