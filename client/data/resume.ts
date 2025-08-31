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
  headline: string;
  summary?: string;
  skills: Record<string, string[]>;
  experience: Experience[];
  education: Education[];
  certifications: Certification[];
};

export const resume: Resume = {
  name: "Tushar Uppal",
  phone: "+1 3127746121",
  email: "tusharuppal909@gmail.com",
  headline: "Robotics Coordinator • Systems Support & Integration",
  skills: {
    "Robotics Systems": [
      "Deployment",
      "Integration",
      "Commissioning",
      "Support",
    ],
    "Troubleshooting & Support": [
      "Middleware troubleshooting",
      "System logs analysis",
      "Incident ticketing",
      "Debugging (Linux, MobaXterm, PuTTY)",
    ],
    "Operating Systems": ["Linux", "Windows"],
    "Languages & Tools": [
      "Python",
      "SQL",
      "Jira",
      "Shell scripting",
      "Visual Studio",
      "XML",
      "VS Code",
      "O365",
      "Roboshop",
      "Power BI",
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
      role: "Robotics Coordinator (System, Support & Integration)",
      start: "Aug 2024",
      end: "Present",
      bullets: [
        "Directed daily warehouse robotic operations, maintaining SLA compliance and reducing downtime incidents.",
        "Worked in live warehouse environments (Walmart, Sam’s Club, and Dillard's) to provide system support under tight SLA constraints.",
        "Delivered on-site technical support during hardware deployment and retrofitting phases, ensuring optimal hardware functionality, training delivery, and tooling readiness across multiple facilities.",
        "Collected and analyzed field failure data and operational metrics to identify trends, improve system reliability, and report actionable insights to cross-functional hardware engineering and quality teams.",
        "Supported robotic system commissioning by coordinating hardware and software integrations across onsite environments, ensuring successful live deployment.",
        "Delivered insights from cleaning datasets regarding robotic performance metrics after automating essential tracking functions, resulting in findings used to address the three biggest causes of crashes identified during analysis efforts.",
        "Led field-level debugging and issue resolution of robotic system malfunctions, including real-time sensor and motion control failures, minimizing downtime during live warehouse operations.",
        "Conducted root cause analysis (RCA) for recurring robotic system failures to prevent future incidents.",
        "Analyzed recurring system crashes, identified root causes, and implemented solutions that reduced downtime by 40%.",
      ],
    },
    {
      company: "Proximate Technologies",
      location: "Plano, Texas",
      role: "System Analyst",
      start: "Feb 2024",
      end: "Aug 2024",
      bullets: [
        "Conducted log analysis using Python, improving system issue resolution efficiency by 30%.",
        "Automated system performance monitoring processes, reducing manual intervention by 25%.",
        "Delivered real-time solutions to technical escalations affecting system availability and performance.",
      ],
    },
    {
      company: "Governors State University",
      location: "University Park, Illinois",
      role: "Graduate Assistant",
      start: "Oct 2022",
      end: "Dec 2023",
      bullets: [
        "Collaborated with university departments to synchronize technology projects with strategic organizational objectives, enhancing inter-departmental communication and resulting in a streamlined process for project approvals across six different units.",
        "Improved user experience on high-traffic websites by implementing data verification processes, ensuring 100% data accuracy.",
      ],
    },
    {
      company: "Infosys",
      location: "Chandigarh, India",
      role: "Systems Engineer",
      start: "Feb 2020",
      end: "Aug 2022",
      bullets: [
        "Engaged in over 30 hours of professional development annually, mastering Python and JavaScript to align with industry trends and enhance technical skill set.",
        "Participated in deployment activities and collaborated with technical managers on large-scale system upgrades.",
        "Developed custom dashboards on Grafana to visualize KPIs from monitored applications, enhancing troubleshooting efficiency and enabling three major software updates within two months.",
      ],
    },
  ],
  education: [
    {
      school: "Governors State University",
      location: "University Park, IL",
      degree: "Master of Science, Computer Science",
      dates: "Aug 2022 – Dec 2023",
      gpa: "GPA: 3.97",
    },
    {
      school: "Chitkara University",
      location: "Chandigarh, India",
      degree: "Bachelor of Engineering, Computer Science",
      dates: "Aug 2016 – Jul 2020",
      gpa: "GPA: 3.71",
    },
  ],
  certifications: [
    { name: "Using Python to Interact with the Operating System" },
    { name: "Workday Basics Series" },
    { name: "Crash Course on Python" },
  ],
};
