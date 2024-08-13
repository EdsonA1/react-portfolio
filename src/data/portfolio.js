import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const portfolioData = {
  name: "Edson Augustin",
  contactInfo: [
    { type: "Email", link: "mailto:Eaugust2@nd.edu", icon: faEnvelope },
    { type: "Phone", link: "tel:561-805-4561", icon: faPhone },
    { type: "LinkedIn", link: "https://linkedin.com/in/edson-augustin/", icon: faLinkedin },
    { type: "GitHub", link: "https://github.com/EdsonA1", icon: faGithub }
  ],
  interests: [
    { name: "Coding 💻" },
    { name: "AI & ML 🤖" },
    { name: "Web Development 🌐" },
    { name: "Cybersecurity 🔒" },
    { name: "Hackathons 🏆" },
    { name: "Data Science 📊" },
    { name: "Cloud Computing ☁️" },
    { name: "Open Source 🌍" },
    { name: "Gaming 🎮" }
  ],
  projects: [
    {
      title: 'Clearance Capital',
      description: 'Description for Clearance Capital.',
      image: require('../assets/ClearanceCapital.png'),
      link: ''
    },
    {
      title: 'PantryPal',
      description: 'Description for PantryPal.',
      image: require('../assets/PantryPal.png'),
      link: ''
    },
    {
      title: 'TRIBE',
      description: 'Description for TRIBE.',
      image: require('../assets/TRIBE.png'),
      link: ''
    },
  ],
  education: [
    {
      institution: "University of Notre Dame",
      date: "May 2025",
      degree: "Bachelor of Engineering in Computer Science with Minor in Real Estate and Engineering Corporate Practice",
      additionalInfo: [
        "Study Abroad: Real Estate & Built Environment, Bangkok, Thailand; London Gateway Engineering, London, UK",
        "Relevant Coursework: Algorithms, Programming Paradigms, Operating System, Data Structures, Database Concepts, Theory of Computing, Computer Architecture, Computing-Based Entrepreneurship"
      ]
    }
  ],
  technicalSkills: {
    languages: ["C/C++", "Python", "Java", "JavaScript/HTML/CSS", "SQL"],
    frameworksLibraries: ["Next.js", "Express.js", "Node.js", "React.js", "Django", "Flask", "Bootstrap", "TailwindCSS", "MongoDB"],
    tools: ["Git", "Linux", "MATLAB", "Figma", "AWS", "Microsoft Power Platform", "Autodesk Suite", "Adobe Dreamweaver"]
  },
  experience: [
    {
      company: "Starbucks",
      location: "Seattle, WA",
      date: "May 2024 – Present",
      role: "Software Development Engineer Intern",
      responsibilities: [
        "Engineered server-side applications with React.js and APIs using Node.js, ensuring scalability and optimized database design for efficient data management.",
        "Developed and maintained applications using Microsoft Power Platform and Azure OpenAI model to create a chatbot to streamline operations and enhance support, ensuring user-centric design and compatibility across devices."
      ]
    },
    {
      company: "Plante Moran",
      location: "Chicago, IL",
      date: "June 2023 – August 2023",
      role: "Cybersecurity Track Intern",
      responsibilities: [
        "Conducted cybersecurity assessments for diverse companies, evaluating business process controls and information technology general controls using frameworks including SOX, SOC, HITRUST, and PCI.",
        "Developed documentation for controls, prepared compliance reports, and assisted in mitigating internal and external risks associated with personal identifiable information and information assets."
      ]
    },
    {
      company: "Idea Center",
      location: "Notre Dame, IN",
      date: "August 2022 – May 2023",
      role: "Technical Market Analyst",
      responsibilities: [
        "Analyzed new inventions and technology startups with a Total Addressable Market up to $500M.",
        "Evaluated the market and key statistics to predict future market performance."
      ]
    }
  ],
  technicalProjects: [
    {
      name: "Smart Drive Through",
      role: "Software Developer",
      date: "July 2024 – Present",
      details: [
        "Utilized License Plate Recognition API to develop hackathon project using React.js, Express.js, & Node-RED."
      ]
    },
    {
      name: "Pantry Pal",
      role: "Software Developer & Product Manager",
      date: "October 2023 – December 2023",
      details: [
        "Co-developed a full stack application with a React.js front-end, designed to assist users in meal planning by leveraging a vast repository of over 10,000+ ingredients and recipes, ensuring a rich, budget-friendly diet.",
        "Constructed a resilient MySQL database and orchestrated sophisticated JSON APIs capable of efficiently querying and manipulating extensive datasets, enhancing the application's performance and user experience."
      ]
    },
    {
      name: "TRiBE Hub",
      role: "Hackathon Winner Project Software Developer",
      date: "March 2023 – December 2023",
      details: [
        "Co-developed a secure web platform to connect the University of Notre Dame's community of 12,000+ members for collaborative resource sharing, featuring an innovative trust scoring system.",
        "Implemented interactive features and a stringent user authentication system using JavaScript, React.js, TailwindCSS, and Python, restricting access to individuals with verified university email addresses."
      ]
    }
  ],
  leadershipExperience: [
    {
      role: "President",
      organization: "National Society of Black Engineers",
      date: "May 2024 - Present",
      responsibilities: [
        "Implement strategies to enhance the representation of culturally responsible black engineers in the industry."
      ]
    },
    {
      role: "Cofounder",
      organization: "ColorStack Notre Dame Chapter",
      date: "January 2024 – Present",
      responsibilities: [
        "Cofounded a chapter whose mission is to increase the number of Black and Latinx CS graduates and careers."
      ]
    },
    {
      role: "Career Preparation Fellow",
      organization: "Management Leadership for Tomorrow",
      date: "Feb 2023 – Present",
      responsibilities: [
        "Selected among thousands of applicants for Software Engineering career preparation and professional development."
      ]
    },
    {
      role: "Client Engineering & Technical Sales Track",
      organization: "IBM Accelerate Program 2023",
      date: "June 2023 – July 2023",
      responsibilities: [
        "Built an AI Chatbot for a financial institution utilizing IBM Watson Assistant, enhancing interactions and efficiency."
      ]
    }
  ]
};
