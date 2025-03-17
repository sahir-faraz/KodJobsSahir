const jobs = [
  {
    id: "1",
    title: "Frontend Developer",
    company: "TechCorp",
    location: "New York, NY",
    type: "Full-time",
    salary: "$80K - $120K",
    posted: "2 days ago",
    logo: "/placeholder.svg?height=48&width=48",
    description:
      "We are looking for a skilled Frontend Developer to join our team. The ideal candidate should have experience with React, TypeScript, and modern CSS frameworks.",
    requirements: [
      "3+ years of experience with React",
      "Strong knowledge of TypeScript",
      "Experience with CSS frameworks like Tailwind",
      "Understanding of responsive design principles",
      "Familiarity with version control systems (Git)",
    ],
  },
  {
    id: "2",
    title: "Backend Engineer",
    company: "DataSystems",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$100K - $150K",
    posted: "1 week ago",
    logo: "/placeholder.svg?height=48&width=48",
    description:
      "Join our backend team to build scalable and efficient APIs. You'll work with Node.js, Express, and MongoDB to create robust backend solutions.",
    requirements: [
      "4+ years of experience with Node.js",
      "Experience with Express or similar frameworks",
      "Knowledge of MongoDB or other NoSQL databases",
      "Understanding of RESTful API design",
      "Experience with microservices architecture",
    ],
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: "CreativeMinds",
    location: "Remote",
    type: "Contract",
    salary: "$70K - $90K",
    posted: "3 days ago",
    logo: "/placeholder.svg?height=48&width=48",
    description:
      "We're seeking a talented UX/UI Designer to create beautiful and intuitive user interfaces. You'll work closely with our product and development teams.",
    requirements: [
      "Portfolio demonstrating UI/UX skills",
      "Experience with Figma or similar design tools",
      "Understanding of user-centered design principles",
      "Knowledge of accessibility standards",
      "Ability to create wireframes and prototypes",
    ],
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$90K - $130K",
    posted: "5 days ago",
    logo: "/placeholder.svg?height=48&width=48",
    description:
      "Looking for a DevOps Engineer to help us build and maintain our cloud infrastructure. Experience with AWS, Docker, and CI/CD pipelines is required.",
    requirements: [
      "3+ years of experience with AWS or similar cloud platforms",
      "Experience with Docker and Kubernetes",
      "Knowledge of CI/CD pipelines",
      "Familiarity with infrastructure as code (Terraform, CloudFormation)",
      "Understanding of monitoring and logging systems",
    ],
  },
  {
    id: "5",
    title: "Full Stack Developer",
    company: "WebSolutions",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$85K - $125K",
    posted: "1 day ago",
    logo: "/placeholder.svg?height=48&width=48",
    description:
      "Join our team as a Full Stack Developer working on exciting web applications. You'll be responsible for both frontend and backend development.",
    requirements: [
      "Experience with React or similar frontend frameworks",
      "Knowledge of Node.js or Python for backend development",
      "Familiarity with SQL and NoSQL databases",
      "Understanding of RESTful API design",
      "Experience with version control systems (Git)",
    ],
  },
  {
    id: "6",
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$110K - $160K",
    posted: "4 days ago",
    logo: "/placeholder.svg?height=48&width=48",
    description:
      "We're looking for a Data Scientist to help us extract insights from our data. You'll work with large datasets and build machine learning models.",
    requirements: [
      "Advanced degree in Computer Science, Statistics, or related field",
      "Experience with Python and data science libraries (Pandas, NumPy, etc.)",
      "Knowledge of machine learning algorithms",
      "Familiarity with SQL and data visualization tools",
      "Strong analytical and problem-solving skills",
    ],
  },
]

// Get all jobs
export async function getAllJobs() {
  // In a real app, this would fetch from an API or database
  return jobs
}

// Get recent jobs (limited number)
export async function getRecentJobs(limit = 3) {
  // In a real app, this would fetch from an API or database
  return jobs.slice(0, limit)
}

// Get job by ID
export async function getJobById(id: string) {
  // In a real app, this would fetch from an API or database
  return jobs.find((job) => job.id === id) || null
}

// Search jobs
export async function searchJobs(query: string) {
  // In a real app, this would search in an API or database
  if (!query) return jobs

  const lowercaseQuery = query.toLowerCase()
  return jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(lowercaseQuery) ||
      job.company.toLowerCase().includes(lowercaseQuery) ||
      job.location.toLowerCase().includes(lowercaseQuery) ||
      job.type.toLowerCase().includes(lowercaseQuery),
  )
}

