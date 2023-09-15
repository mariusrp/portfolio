import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
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
  resumeLink: '/cv',
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

export const skillsSection = {
  title: 'What do I know?',
  subTitle: 'SELFTAUGHT FULL STACK DEVELOPER',
  data: [
    {
      title: 'Frontend Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json',
      skills: [
        emoji('🔹 Designing and developing UI using HTML5 & CSS3'),
        emoji('🔹 Creating dynamic applications using JavaScript & TypeScript'),
        emoji('🔹 Building responsive UIs with React.js & Next.js'),
        emoji('🔹 State management using Redux'),
      ],
      softwareSkills: [
        { skillName: 'HTML5', iconifyTag: 'logos:html-5' },
        { skillName: 'CSS3', iconifyTag: 'logos:css-3' },
        { skillName: 'JavaScript', iconifyTag: 'logos:javascript' },
        { skillName: 'TypeScript', iconifyTag: 'logos:typescript-icon' },
        { skillName: 'Reactjs', iconifyTag: 'vscode-icons:file-type-reactjs' },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },
        { skillName: 'Redux', iconifyTag: 'logos:redux' },
        { skillName: 'Bootstrap', iconifyTag: 'logos:bootstrap' },
      ],
    },
    {
      title: 'Backend Development',
      lottieAnimationFile: '/lottie/skills/backend.json',
      skills: [
        emoji('🔹 Building RESTful APIs using Node.js & Express.js'),
        emoji('🔹 Scalable backend with TypeScript, MongoDB, and MySQL'),
        emoji('🔹 Cache management using Redis'),
      ],
      softwareSkills: [
        { skillName: 'JavaScript', iconifyTag: 'logos:javascript' },
        { skillName: 'TypeScript', iconifyTag: 'logos:typescript-icon' },
        { skillName: 'Express', iconifyTag: 'logos:express' },
        { skillName: 'nodejs', iconifyTag: 'logos:nodejs-icon' },
        { skillName: 'MongoDB', iconifyTag: 'logos:mongodb' },
        { skillName: 'MySQL', iconifyTag: 'logos:mysql' },
        { skillName: 'Redis', iconifyTag: 'logos:redis' },
        { skillName: 'Git', iconifyTag: 'logos:git-icon' },
        { skillName: 'Python', iconifyTag: 'logos:python' },
      ],
    },
    {
      title: 'Cloud Platforms & Services',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json',
      skills: [
        emoji('🔹 Working on AWS & Azure cloud platforms'),
        emoji('🔹 Deploying and maintaining apps on Firebase'),
        emoji('🔹 Version control and collaboration using GitHub'),
      ],
      softwareSkills: [
        { skillName: 'AWS', iconifyTag: 'logos:aws' },
        { skillName: 'Azure', iconifyTag: 'logos:microsoft-azure' },
        { skillName: 'Github', iconifyTag: 'akar-icons:github-fill' },
        { skillName: 'Firebase', iconifyTag: 'logos:firebase' },
      ],
    },
  ],
};

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
    name: 'AutomateHub',
    projectImg: 'img/icons/common/automatehub.png',
    desc: 'Ecommerce website built to sell smart home related gadgets (15sec reload-time)',
    github: 'https://github.com/mariusrp/ts-ecommerce',
    link: 'https://automatehub.onrender.com/',
  },
  {
    name: 'Google Clone',
    projectImg: 'img/icons/common/google-clone.png',
    desc: 'A Google clone application built by implementing the Google API',
    github: 'https://github.com/mariusrp/ts-ecommerce',
    link: 'https://google-clone-kb96uz4fc-mariusrp.vercel.app/',
  },
  {
    name: 'IMDB Clone',
    projectImg: 'img/icons/common/imdb-clone.png',
    desc: 'An IMDB Clone application built by implementing the IMDB API',
    github: 'https://imdb-final-opl93phml-mariusrp.vercel.app/',
    link: 'https://mpmovies.vercel.app/',
  },
];

export const showContactMe: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Marius Phillips',
  description: 'A passionate Full Stack Web Developer.',
  author: 'Marius Phillips',
  image:
    'https://avatars.githubusercontent.com/u/119750054?s=400&u=7504bf9d9fde17e1fd5df6ea2f894b1159cb98a8&v=4',
  url: 'https://mariusp.vercel.app',
  keywords: [
    'Marius',
    'Marius Phillips',
    '@mariusep',
    'mariusep',
    'mariusrp',
    'marius phillips',
    'marius phillips portfolio',
    'mariusp',
    'mariusp portfolio',
    '@mariusrp',
    '@mariusrp portfolio',
    'Portfolio',
    'Marius Portfolio ',
    'Marius Phillips Portfolio',
  ],
};

export const contactMessage: any = emoji('Feel free to get in touch ✉️');
