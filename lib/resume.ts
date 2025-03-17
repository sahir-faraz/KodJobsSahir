const mockResume = {
  personalInfo: {
    name: "John Doe",
    title: "Frontend Developer",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    location: "New York, NY",
    website: "johndoe.com",
    summary:
      "Experienced frontend developer with 5+ years of experience building responsive web applications using React, TypeScript, and modern CSS frameworks.",
  },
  skills: [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Redux",
    "Next.js",
    "Git",
    "Responsive Design",
  ],
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "New York, NY",
      startDate: "Jan 2022",
      endDate: "Present",
      description:
        "Lead frontend development for multiple projects, implementing responsive designs and optimizing performance. Collaborate with UX/UI designers and backend developers to create seamless user experiences.",
      achievements: [
        "Reduced page load time by 40% through code optimization",
        "Implemented component library used across 5 different projects",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions",
      location: "Boston, MA",
      startDate: "Mar 2019",
      endDate: "Dec 2021",
      description:
        "Developed and maintained multiple client websites using React and modern JavaScript frameworks. Worked closely with designers to implement pixel-perfect UI components.",
      achievements: [
        "Built responsive e-commerce platform with 50K+ monthly users",
        "Implemented automated testing that increased code coverage by 70%",
        "Contributed to open-source projects and internal libraries",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "Boston, MA",
      startDate: "Sep 2015",
      endDate: "May 2019",
      description: "Graduated with honors. Focused on web development and user interface design.",
    },
  ],
  certifications: [
    {
      name: "React Developer Certification",
      issuer: "React Training",
      date: "Jun 2021",
      expires: "Jun 2024",
    },
    {
      name: "Advanced JavaScript",
      issuer: "Udemy",
      date: "Mar 2020",
      expires: "N/A",
    },
  ],
  projects: [
    {
      title: "E-commerce Platform",
      description:
        "Built a full-featured e-commerce platform with React, Node.js, and MongoDB. Implemented features like product search, filtering, cart management, and checkout process.",
      link: "https://github.com/johndoe/ecommerce",
    },
    {
      title: "Weather Dashboard",
      description:
        "Created a weather dashboard that displays current weather and forecasts for multiple locations. Used React, OpenWeather API, and Chart.js for data visualization.",
      link: "https://github.com/johndoe/weather-app",
    },
  ],
}

// Function to get user resume
export async function getUserResume(userId: string) {
  // In a real app, this would fetch from a database based on the user ID
  return mockResume
}

