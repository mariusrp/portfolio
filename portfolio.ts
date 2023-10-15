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
    'A passionate Full Stack Web Developer and have experience in building Web applications with TypeScript / Reactjs / Nodejs / .NET and some other cool libraries and frameworks.',
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
        { skillName: 'TypeScript', iconifyTag: 'logos:typescript-icon' },
        { skillName: 'React', iconifyTag: 'vscode-icons:file-type-reactjs' },
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
        { skillName: 'TypeScript', iconifyTag: 'logos:typescript-icon' },
        { skillName: 'nodejs', iconifyTag: 'logos:nodejs-icon' },
        { skillName: 'dotnet', iconifyTag: 'logos:dotnet' },
        { skillName: 'MongoDB', iconifyTag: 'logos:mongodb' },
        { skillName: 'MySQL', iconifyTag: 'logos:mysql' },
        { skillName: 'Azure DB', iconifyTag: 'logos:azure' },
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
    desc: 'Fullstack Ecommerce platform offering user authentication, search, database interactions, admin features, and more.',
    github: 'https://github.com/mariusrp/ts-ecommerce',
    link: 'https://automatehub-2f20f689285e.herokuapp.com/',
    tags: ['Typescript', 'NodeJs', 'React', 'MongoDB', 'Paypal-API'],
  },
  {
    name: 'NyttPluss',
    projectImg: 'img/icons/common/nyttpluss-screenshot.png',
    desc: 'Responsive newspage displaying live norwegian news. Offers google login and saving favorite news.',
    github: 'https://github.com/mariusrp/NyttPluss-backend',
    link: 'https://nyttpluss-frontend.vercel.app/',
    tags: ['.NET', 'Typescript', 'React', 'Azure DB', 'Google Login API'],
  },

  {
    name: 'Portfolio',
    projectImg: 'img/icons/common/portfolio-screenshot.png',
    desc: 'Beautiful fully responsive portfolio website to display experience, skills, and education.',
    github: 'https://github.com/mariusrp/portfolio',
    link: 'https://mariusrp.com/',
    tags: ['NextJS', 'TypeScript', 'React'],
  },

  // {
  //   name: 'Google Clone',
  //   projectImg: 'img/icons/common/google-clone.png',
  //   desc: 'Replica of the iconic Google search engine, leveraging the Google Search API and Next.js for rapid development.',
  //   github: 'https://github.com/mariusrp/google-clone',
  //   link: 'https://google-clone-kb96uz4fc-mariusrp.vercel.app/',
  //   tags: [
  //     'NextJS',
  //     'TailwindCSS',
  //     'Autoprefixer',
  //     'React',
  //     'React-Icons',
  //     'Google Search API',
  //   ],
  // },
  {
    name: 'IMDB Clone',
    projectImg: 'img/icons/common/imdb-clone.png',
    desc: "Movie database web app mirroring IMDB's functionality. Uses TMDB API, and built with Next.js.",
    github: 'https://github.com/mariusrp/imdb-clone',
    link: 'https://mpmovies.vercel.app/',
    tags: ['NextJS', 'TailwindCSS', 'React', 'TMDB API'],
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
