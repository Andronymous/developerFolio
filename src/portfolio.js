/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

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
  title: "Hi, I'm Saeed",
  subTitle1: emoji(
    "I'm a DevOps engineer with a strong background in Android development."
  ),
  subTitle2: emoji(
    "I'm Proficient in Linux Administration, Docker, Kubernetes, Openshift, and Jenkins, and I have skills in Java, Kotlin, Android SDK, Git, and some other development tools in the background."
  ),
  subTitle3: emoji(
    "Also, I experienced collaboration with product managers, designers, QA engineers, and cross-functional teams to deliver high-quality products."
  ),

  resumeLink:
    "https://andronymous.ir/resume-en.pdf",
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
  subTitle: "During the last 12 years, I have gained sufficient skills in using these tools and languages:",
  skills: [
    emoji(
      "✅ With these experiences I can help you in:"
    ),
    emoji(
      "⚡ Manage your Projects With Flexibility and Agility."
    ),
    emoji(
      "⚡ Improve your Software Infrastructure and Operations to Streamline Software Delivery."
    ),
    emoji(
      "⚡ Foster Collaboration and  Improve Efficiency in your Team."
    ),
    emoji(
      "⚡ And ..."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Linux Adm",
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
      skillName: "Openshift",
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
      skillName: "Gitlab",
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
      skillName: "Pthon",
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
      logo: require("./assets/images/SheikhBahaeiUniversityLogo.png"),
      subHeader: "Bachelor of Information Technology",
      duration: "2011 - 2016",
      desc: "",
      descBullets: [
      ]
    },
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
      role: "Infrastructure Team Lead",
      company: "Zamin",
      companylogo: require("./assets/images/zamin.png"),
      date: "Feb 2022 - Present . +1 yrs",
      desc: "",
      descBullets: [
      ]
    },
    {
      role: "Senior Android Developer",
      company: "Zamin",
      companylogo: require("./assets/images/zamin.png"),
      date: "Dec 2017 - Feb 2022 · 4 yrs 3 mos",
      desc: ""
    },
    {
      role: "Co-Founder and Senior Android Developer",
      company: "Armin",
      companylogo: require("./assets/images/armin.png"),
      date: "Sep 2016 - Dec 2017 · 1 yr 4 mos",
      desc: ""
    },
    {
      role: "Android Developer",
      company: "Arad",
      companylogo: require("./assets/images/arad.png"),
      date: "Feb 2016 - Jun 2016 · 5 mos",
      desc: ""
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some of the projects that I did independently or was part of the development team",
  projects: [
    {
      image: require("./assets/images/balonet.png"),
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
      image: require("./assets/images/noonet.png"),
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
      image: require("./assets/images/ipeyk.png"),
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
     image: require("./assets/images/alchemist.png"),
     projectName: "Alchemist",
     projectDesc: "",
    },
    {
      image: require("./assets/images/arian.png"),
      projectName: "Arian",
      projectDesc: "",
    },{
      image: require("./assets/images/ranandesho.png"),
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
      image: require("./assets/images/sib.png"),
      projectName: "Sib",
      projectDesc: "",
    },
    {
      image: require("./assets/images/zabdar.png"),
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

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitleName:
      "Saeed Mohammad ali rajab ",
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all. 😊",
  number: "+98-9138934809",
  email_address: "saeedmrdev@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  twitterDetails,
  isHireable
};