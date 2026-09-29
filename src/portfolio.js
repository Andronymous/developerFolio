/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import {
  SiAndroid,
  SiAnsible,
  SiArgo,
  SiContainerd,
  SiDocker,
  SiGit,
  SiGitlab,
  SiGnubash,
  SiGrafana,
  SiHelm,
  SiIstio,
  SiJenkins,
  SiKotlin,
  SiKubernetes,
  SiKubespray,
  SiLinux,
  SiMongodb,
  SiNginx,
  SiOpenjdk,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiRedhatopenshift,
  SiSonarqubeserver,
  SiSonatype,
  SiVmware,
  SiYaml
} from "react-icons/si";
import {
  TbCertificate,
  TbGitMerge,
  TbLoadBalancer,
  TbRepeat,
  TbShieldSearch,
  TbWorldWww
} from "react-icons/tb";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import {dateRange, yearsSince} from "./utils/dates";

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Saeed",
  title: "Hi, I'm Saeed", // Greeting.jsx appends an animated 👋
  subTitle1: emoji(
    "I'm a Senior DevOps & Platform Engineer with a background in Android development."
  ),
  subTitle2: emoji(
    "I build and run the systems that take software from a commit to production reliably: Linux servers, containers on Docker and Kubernetes, CI/CD pipelines, and the monitoring that keeps it all healthy."
  ),
  subTitle3: emoji(
    "Having spent years on the developer side, I know what teams need from their platform. I enjoy working closely with developers, designers, QA and product managers to ship things people actually use."
  ),

  resumeLink: "https://andronymous.ir/resume-en.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Andronymous",
  linkedin: "https://www.linkedin.com/in/saeed-mohammad-ali-rajab-658025100/",
  gmail: "saeedmrdev@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/4008227/andronymous",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Proficiency",
  subTitle: `Over the last ${yearsSince(2020, 5, 21)} years, I have built solid skills with these tools and languages:`,
  skills: [
    emoji("✅ What I can help with:"),
    emoji(
      "⚡ Designing and running reliable infrastructure environments, from Linux servers to production Kubernetes clusters"
    ),
    emoji(
      "⚡ Building CI/CD and GitOps pipelines that make releases fast, repeatable and easy to roll back"
    ),
    emoji(
      "⚡ Setting up monitoring, logging and alerting so problems surface before users notice them"
    ),
    emoji(
      "⚡ Adding code quality and security checks into the delivery pipeline"
    ),
    emoji(
      "⚡ Bridging development and operations, backed by years of hands-on app development"
    )
  ],

  /* Skills grouped under small headings. Icons are Simple Icons brand logos
  (react-icons/si); concepts without a brand logo use Tabler outline icons
  (react-icons/tb), or the parent project's logo where that is accurate. */
  softwareSkills: [
    {
      group: "Linux & Scripting",
      skills: [
        {name: "Linux Admin\u00adistration", icon: SiLinux},
        {name: "Bash / Shell Scripting", icon: SiGnubash},
        {name: "Python", icon: SiPython},
        {name: "YAML", icon: SiYaml}
      ]
    },
    {
      group: "Containers & Orchestration",
      skills: [
        {name: "Docker", icon: SiDocker},
        {name: "Containerd", icon: SiContainerd},
        {name: "Kubernetes", icon: SiKubernetes},
        {name: "OpenShift", icon: SiRedhatopenshift},
        {name: "Kubespray", icon: SiKubespray},
        {name: "Helm", icon: SiHelm},
        {name: "Istio Service Mesh", icon: SiIstio}
      ]
    },
    {
      group: "CI/CD & Automation",
      skills: [
        {name: "Git", icon: SiGit},
        {name: "GitLab", icon: SiGitlab},
        {name: "GitLab CI/CD", icon: SiGitlab},
        {name: "Jenkins", icon: SiJenkins},
        {name: "Argo CD", icon: SiArgo},
        {name: "GitOps", icon: TbGitMerge},
        {name: "Ansible", icon: SiAnsible}
      ]
    },
    {
      group: "Observability",
      skills: [
        {name: "Prometheus", icon: SiPrometheus},
        {name: "Grafana", icon: SiGrafana},
        {name: "Alertmanager", icon: SiPrometheus}, // part of Prometheus
        {name: "Loki", icon: SiGrafana} // by Grafana Labs
      ]
    },
    {
      group: "Security & Code Quality",
      skills: [
        {name: "SonarQube", icon: SiSonarqubeserver},
        {name: "Semgrep", icon: TbShieldSearch},
        {name: "SSL/TLS", icon: TbCertificate}
      ]
    },
    {
      group: "Networking & Web",
      skills: [
        {name: "Nginx", icon: SiNginx},
        {name: "HAProxy", icon: TbLoadBalancer},
        {name: "DNS", icon: TbWorldWww}
      ]
    },
    {
      group: "Data & Infrastructure",
      skills: [
        {name: "PostgreSQL", icon: SiPostgresql},
        {name: "MongoDB", icon: SiMongodb},
        {name: "Nexus Repository Manager", icon: SiSonatype}, // by Sonatype
        {name: "VMware vCenter", icon: SiVmware}
      ]
    },
    {
      group: "Development & Process",
      skills: [
        {name: "Android", icon: SiAndroid},
        {name: "Java", icon: SiOpenjdk}, // Simple Icons has no Java logo
        {name: "Kotlin", icon: SiKotlin},
        {name: "Scrum / Agile", icon: TbRepeat}
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "SheikhBahaeei University",
      logo: new URL(
        "./assets/images/SheikhBahaeiUniversityLogo.png",
        import.meta.url
      ).href,
      subHeader: "Bachelor of Information Technology",
      duration: "2011 - 2016",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Linux System Administration", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Docker",
      progressPercentage: "60%"
    },
    {
      Stack: "Kubernetes",
      progressPercentage: "40%"
    },
    {
      Stack: "OpenShift",
      progressPercentage: "35%"
    },
    {
      Stack: "Shell Scripting",
      progressPercentage: "20%"
    },
    {
      Stack: "Jenkins",
      progressPercentage: "40%"
    },
    {
      Stack: "Prometheus",
      progressPercentage: "20%"
    },
    {
      Stack: "Grafana",
      progressPercentage: "28%"
    },
    {
      Stack: "Nexus",
      progressPercentage: "22%"
    },
    {
      Stack: "HAProxy",
      progressPercentage: "70%"
    },
    {
      Stack: "Nginx",
      progressPercentage: "80%"
    },
    {
      Stack: "Android Development",
      progressPercentage: "95%"
    },
    {
      Stack: "Java",
      progressPercentage: "90%"
    },
    {
      Stack: "Kotlin",
      progressPercentage: "80%"
    },
    {
      Stack: "Git",
      progressPercentage: "95%"
    },
    {
      Stack: "Scrum Methodology",
      progressPercentage: "95%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior DevOps Engineer",
      company: "Acctech Technology",
      companylogo: new URL("./assets/images/acctech-logo.png", import.meta.url)
        .href,
      date: dateRange([2025, 6, 22]),
      desc: "",
      descBullets: []
    },
    {
      role: "Infrastructure Team Lead",
      company: "Zamin",
      companylogo: new URL("./assets/images/zamin.png", import.meta.url).href,
      date: dateRange([2022, 2], [2025, 6, 21]),
      desc: "",
      descBullets: []
    },
    {
      role: "Senior Android Developer",
      company: "Zamin",
      companylogo: new URL("./assets/images/zamin.png", import.meta.url).href,
      date: dateRange([2017, 12], [2022, 2]),
      desc: ""
    },
    {
      role: "Co-Founder and Senior Android Developer",
      company: "Armin",
      companylogo: new URL("./assets/images/armin.png", import.meta.url).href,
      date: dateRange([2016, 9], [2017, 12]),
      desc: ""
    },
    {
      role: "Android Developer",
      company: "Arad",
      companylogo: new URL("./assets/images/arad.png", import.meta.url).href,
      date: dateRange([2016, 2], [2016, 6]),
      desc: ""
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
Needs public/profile.json, which the template's fetch.js generated from the
GitHub API (removed; restore it from git history before enabling this) */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle:
    "Some of the projects that I did independently or was part of the development team",
  projects: [
    {
      image: new URL("./assets/images/balonet.png", import.meta.url).href,
      projectName: "Balonet",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://balonet.net/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: new URL("./assets/images/noonet.png", import.meta.url).href,
      projectName: "Noonet",
      projectDesc: "",
      footerLink: [
        {
          name: "Download",
          url: "https://cafebazaar.ir/app/ir.irik.app.noonet"
        }
      ]
    },
    {
      image: new URL("./assets/images/ipeyk.png", import.meta.url).href,
      projectName: "Ipeyk",
      projectDesc: "",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://iropeyk.ir/"
        }
      ]
    },
    {
      image: new URL("./assets/images/alchemist.png", import.meta.url).href,
      projectName: "Alchemist",
      projectDesc: ""
    },
    {
      image: new URL("./assets/images/arian.png", import.meta.url).href,
      projectName: "Arian",
      projectDesc: ""
    },
    {
      image: new URL("./assets/images/ranandesho.png", import.meta.url).href,
      projectName: "Ranandesho",
      projectDesc: "",
      footerLink: [
        {
          name: "Download",
          url: "https://cafebazaar.ir/app/ir.GreenTouchSoft.app.RanandeSho/"
        }
      ]
    },
    {
      image: new URL("./assets/images/sib.png", import.meta.url).href,
      projectName: "Sib",
      projectDesc: ""
    },
    {
      image: new URL("./assets/images/zabdar.png", import.meta.url).href,
      projectName: "Zabdar",
      projectDesc: "",
      footerLink: [
        {
          name: "Download",
          url: "https://cafebazaar.ir/app/com.andronymous.zabdar.demo/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display Medium blogs from public/blogs.json instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitleName: "Saeed Mohammad Ali Rajab",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all. 😊",
  number: "+98-9138934809",
  email_address: "saeedmrdev@gmail.com"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  isHireable
};
