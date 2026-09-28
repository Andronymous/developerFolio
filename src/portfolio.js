/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Month range with a LinkedIn-style duration, counting both the first and the
// last month, e.g. "Dec 2017 - Feb 2022 · 4 yrs 3 mos". Without an end month the
// range runs to the current month and ends in "Present", so it never goes stale.
function dateRange([startYear, startMonth], end) {
  const now = new Date();
  const [endYear, endMonth] = end || [now.getFullYear(), now.getMonth() + 1];
  const total = (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  const monthName = (year, month) =>
    new Date(year, month - 1).toLocaleString("en-US", {month: "short"}) +
    ` ${year}`;
  const endLabel = end ? monthName(endYear, endMonth) : "Present";
  return `${monthName(startYear, startMonth)} - ${endLabel} · ${parts.join(" ")}`;
}

// Whole years since the given date, recomputed on every page load
function yearsSince(year, month, day) {
  const now = new Date();
  const hadAnniversary =
    now.getMonth() + 1 > month ||
    (now.getMonth() + 1 === month && now.getDate() >= day);
  return now.getFullYear() - year - (hadAnniversary ? 0 : 1);
}

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
    "I'm a Senior DevOps Engineer with a background in Android development."
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

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Linux Admin",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fa fa-dharmachakra"
    },
    {
      skillName: "OpenShift",
      fontAwesomeClassname: "fab fa-redhat"
    },
    {
      skillName: "Shell Scripting",
      fontAwesomeClassname: "fa fa-code"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "GitLab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "Prometheus",
      fontAwesomeClassname: "fas fa-fire-alt"
    },
    {
      skillName: "Grafana",
      fontAwesomeClassname: "fa fa-sun"
    },
    {
      skillName: "Nexus RM",
      fontAwesomeClassname: "fa fa-database"
    },
    {
      skillName: "HAProxy",
      fontAwesomeClassname: "fa fa-globe"
    },
    {
      skillName: "Nginx",
      fontAwesomeClassname: "fab fa-neos"
    },
    {
      skillName: "Security",
      fontAwesomeClassname: "fa fa-user-secret"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-kickstarter-k"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "Scrum Methodology",
      fontAwesomeClassname: "fa fa-rocket"
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
      companylogo: new URL("./assets/images/acctech.png", import.meta.url).href,
      date: dateRange([2025, 6]),
      desc: "",
      descBullets: []
    },
    {
      role: "Infrastructure Team Lead",
      company: "Zamin",
      companylogo: new URL("./assets/images/zamin.png", import.meta.url).href,
      date: dateRange([2022, 2], [2025, 6]),
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
