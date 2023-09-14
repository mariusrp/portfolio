import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'mariusrp',
  title: 'Marius Phillips',
  jobTitle: ['Front End Developer', 'Back End Developer', 'Software Engineer'],
  description:
    'A passionate Full Stack Web Developer and have experience in building Web applications with JavaScript / Reactjs / Nodejs / Python and some other cool libraries and frameworks.',
  resumeLink: 'https://drive.googl',
};

export const openSource = {
  githubUserName: 'mariusrp',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://mariusrp.github.io/',
  linkedin: 'https://www.linkedin.com/in/marius-phillips-85a10b247/',
  github: 'https://github.com/mariusrp',
};

export const skillsSection: SkillsSectionType = {
  title: 'What do I know?',
  subTitle: 'SELFTAUGHT FULL STACK DEVELOPER',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('🔹  Building responsive applications using React.js'),
        emoji('🔹  Building RESTful APIs in Node.js & Express.js'),
        emoji('🔹  Building scalable backend applications using Typescript'),
        emoji('🔹  Building and deploying fullstack applications'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json',
      skills: [
        emoji('🔹 Experience of working on multiple cloud platforms'),
        emoji(
          '🔹 Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        // {
        //   skillName: 'Docker',
        //   iconifyTag: 'logos:docker-icon',
        // },
        // {
        //   skillName: 'Github Actions',
        //   iconifyTag: 'logos:github-actions',
        // },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design',
    progressPercentage: '90',
  },
  {
    Stack: 'Backend',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Knarvik VGS',
    subHeader: 'Automation - Techincal and General Studies (TAF)',
    duration: 'September 2019 - June 2022',
    desc: '',
    grade: 'Bergen, Norway',
    descBullets: [
      'General subjects: Mathematics, Physics, English, Norwegian, History, Social Studies',
      'Technical subjects: Automation, Electronics, Mechanics, Computers & electronics, Electrical Energy',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Automation Engineer',
    company: 'FRAMO AS',
    companyLogo: '/img/icons/common/framo.png',
    date: 'Aug 2019 – Now',
    desc: 'Apprenticeship through TAF (Tekniske almenne fag) at Knarvik VGS.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'AutomateHub (Ecommerce)',
    projectImg: 'img/icons/common/automatehub.png',
    desc: 'Ecommerce website built to sell smart home related gadgets (15sec reload-time)',
    github: 'https://github.com/mariusrp/ts-ecommerce',
    link: 'https://automatehub.onrender.com/',
  },
  {
    name: 'Google Clone',
    projectImg: 'img/icons/common/google-clone.png',
    desc: 'A Google clone application built by implementing the IMDB API',
    github: 'https://github.com/mariusrp/ts-ecommerce',
    link: 'https://google-clone-kb96uz4fc-mariusrp.vercel.app/',
  },
  {
    name: 'IMDB Clone',
    projectImg: 'img/icons/common/imdb-clone.png',
    desc: 'An IMDB Clone application built by implementing the google API',
    github: 'https://imdb-final-opl93phml-mariusrp.vercel.app/',
    link: 'https://automatehub.onrender.com/',
  },
];

export const showContactMe: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Marius Phillips',
  description: 'A passionate Full Stack Web Developer.',
  author: 'Marius Phillips',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Marius',
    'Marius Phillips',
    '@mariusep',
    'mariusep',
    'mariusrp',
    '@mariusrp',
    '@mariusrp portfolio',
    'Portfolio',
    'Marius Portfolio ',
    'Marius Phillips Portfolio',
  ],
};

export const contactMessage: any = emoji('Feel free to get in touch ✉️');
