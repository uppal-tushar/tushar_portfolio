export type Experience = {
  company: string;
  location: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
};

export type Education = {
  school: string;
  location: string;
  degree: string;
  dates: string;
  gpa?: string;
};

export type Certification = {
  name: string;
};

export type Resume = {
  name: string;
  phone: string;
  email: string;
  secondaryEmail?: string;
  headline: string;
  summary?: string;
  linkedin?: string;
  github?: string;
  skills: Record<string, string[]>;
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
};

export const resume: Resume = {
  name: "Tushar Uppal",
  phone: "+1 3127746121",
  email: "iamtusharuppal@gmail.com",
  secondaryEmail: "tusharuppal909@gmail.com",
  headline:
    "Robotics Systems Engineer • Deployment & Integration • Field Support",
  linkedin: "https://www.linkedin.com/in/uppal-tushar/",
  github: "https://github.com/uppal-tushar",
  skills: {
    "Robotics Systems": [
      "Deployment",
      "Integration",
      "Commissioning",
      "Support",
    ],
    "System Integration": [
      "Hardware-software interface validation",
      "Equipment qualification",
      "Test plan execution",
    ],
    "Engineering & Lab Operations": [
      "Equipment setup",
      "Calibration",
      "Preventive maintenance",
      "Lab safety compliance",
    ],
    Documentation: [
      "Engineering SOPs",
      "Technical reports",
      "System configuration records",
      "Validation templates",
    ],
    "Troubleshooting & Support": [
      "Middleware troubleshooting",
      "System logs analysis",
      "Incident ticketing",
      "Debugging (Linux, Moba Xterm, Putty)",
    ],
    "Operating Systems": ["Linux", "Windows"],
    "Languages & Tools": [
      "Python",
      "SQL",
      "Jira",
      "Shell scripting",
      "Visual Studio",
      "VS Code",
      "O365",
      "Roboshop",
      "Power BI",
      "Excel",
      "Word",
      "PowerPoint",
      "Visio",
    ],
    "Database & Cloud": ["Oracle", "MySQL", "AWS (Basic)", "Azure (Basic)"],
    "Soft Skills": [
      "Customer service",
      "Communication",
      "Problem-solving",
      "Cross-team coordination",
      "Attention to detail",
    ],
  },
  experience: [
    {
      company: "Grey Orange",
      location: "Los Angeles, California",
      role: "Robotics Systems Engineer",
      start: "Aug 2024",
      end: "Present",
      bullets: [
        "Directed daily warehouse robotic operations, maintaining SLA compliance and reducing downtime incidents.",
        "Partnered with client management and professional services teams to ensure seamless onboarding and operational success for enterprise customers.",
        "Collaborated with Solutions Architects to optimize robotic deployment and integration workflows.",
        "Ensured regulatory and quality compliance across hardware and software rollouts, aligning with B2B client success goals.",
        "Conducted equipment verification and calibration in warehouse/lab environments, ensuring compliance with safety and operational standards.",
        "Supported hardware and software integration during robotic system installations, ensuring seamless communication between mechanical assemblies, sensors, and control software.",
        "Authored knowledge base articles, SOPs, and training documentation, improving team efficiency and onboarding for employees and 3P.",
      ],
    },
    {
      company: "Grey Orange",
      location: "Los Angeles, California",
      role: "Robotics Coordinator (System, Support & Integration)",
      start: "Aug 2024",
      end: "Present",
      bullets: [
        "Supported robotic system commissioning by coordinating hardware and software integrations across onsite environments, ensuring successful live deployment.",
        "Led field-level debugging and issue resolution of robotic system malfunctions, including real-time sensor and motion control failures, minimizing downtime during live warehouse operations.",
        "Delivered insights from cleaning datasets regarding robotic performance metrics after automating essential tracking functions, resulting in findings used to address the three biggest causes of crashes identified during analysis efforts.",
        "Supported experiments involving computer vision libraries (OpenCV, TensorFlow) to debug image-processing pipelines and validate algorithm performance.",
        "Collected and analyzed field failure data and operational metrics to identify trends, improve system reliability, and report actionable insights to cross-functional hardware engineering and quality teams.",
        "Conducted root cause analysis (RCA) for recurring robotic system failures to prevent future incidents.",
        "Analyzed recurring system crashes, identified root causes, and implemented solutions that reduced downtime by 40%.",
      ],
    },
    {
      company: "Proximate Technologies",
      location: "Plano, Texas",
      role: "Software Engineer",
      start: "Feb 2024",
      end: "Aug 2024",
      bullets: [
        "Delivered real-time solutions to technical escalations affecting system availability and performance.",
        "Supported customer success initiatives by proactively managing client escalations and ensuring SLA adherence.",
        "Coordinated with product management and engineering teams to deliver continuous improvements to enterprise systems.",
        "Assisted in the integration of diagnostic and monitoring software with hardware systems, ensuring data accuracy and performance stability.",
      ],
    },
    {
      company: "Governors State University",
      location: "University Park, Illinois",
      role: "Graduate Assistant",
      start: "Oct 2022",
      end: "Dec 2023",
      bullets: [
        "Collaborated with university departments to synchronize technology projects with strategic organizational objectives, enhancing interdepartmental communication and resulting in a streamlined process for project approvals across six different units.",
        "Improved user experience on high-traffic websites by implementing data verification processes, ensuring 100% data accuracy.",
      ],
    },
    {
      company: "Infosys",
      location: "Chandigarh, India",
      role: "Senior Systems Engineer",
      start: "Feb 2020",
      end: "Aug 2022",
      bullets: [
        "Delivered professional services for enterprise automotive clients, focusing on quality assurance and regulatory compliance.",
        "Collaborated with cross-functional hardware and software teams to perform end-to-end system integration, ensuring seamless communication between embedded components, databases, and enterprise applications.",
        "Supported hardware-software compatibility testing and performance validation for automotive diagnostic systems used across Daimler's production facilities.",
        "Conducted system-level verification and calibration in test labs, validating firmware updates and ensuring compliance with engineering specifications.",
        "Followed Engineering SOPs and Design Control guidelines to maintain traceable records of configuration changes, defect tracking, and system test results.",
        "Authored and maintained technical documentation, engineering reports, and validation records to meet both internal quality requirements and client audit standards.",
        "Assisted in developing system configuration baselines and managing version control for integrated components during deployment and release cycles.",
        "Applied engineering design principles to analyze system dependencies, improve modularity, and enhance system reliability during software upgrades.",
      ],
    },
    {
      company: "Infosys",
      location: "Chandigarh, India",
      role: "Systems Engineer",
      start: "Feb 2020",
      end: "Aug 2022",
      bullets: [
        "Delivered first-line and second-line technical support for end-users, ensuring SLA adherence and clear communication with both technical and non-technical stakeholders.",
        "Supported SDK integrations and developer ecosystem tools, enabling smoother development, testing, and deployment workflows.",
        "Participated in deployment activities and collaborated with technical managers on large-scale system upgrades.",
        "Delivered professional services for enterprise automotive clients, focusing on quality assurance and regulatory compliance.",
        "Participated in cross-functional projects involving technology modernization and system engineering enhancements.",
      ],
    },
  ],
  education: [
    {
      school: "Governors State University",
      location: "University Park, IL, USA",
      degree: "Master of Science, Computer Science",
      dates: "Aug 2022 – Dec 2023",
    },
    {
      school: "Chitkara University",
      location: "Punjab, India",
      degree: "Bachelor of Engineering, Computer Science",
      dates: "Aug 2016 – Jul 2020",
    },
  ],
  certifications: [
    { name: "Using Python to Interact with the Operating System — Verify" },
    { name: "Workday Basics Series — Verify" },
    { name: "Crash Course on Python — Verify" },
  ],
};
