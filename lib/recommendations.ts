import { getAllJobs } from "./jobs"

// Mock skill gaps that would be calculated based on job market trends
const mockSkillGaps = ["Docker", "Kubernetes", "AWS", "GraphQL", "CI/CD", "Testing"]

// Mock function to get recommended jobs based on user profile
export async function getRecommendedJobs(userId: string) {
  // In a real app, this would use an algorithm to match user skills with job requirements
  const allJobs = await getAllJobs()

  // Generate random match scores between 70-98%
  const matchScores = allJobs.map(() => Math.floor(Math.random() * 28) + 70)

  // Sort jobs by match score
  const sortedJobs = [...allJobs].sort((a, b) => {
    const indexA = allJobs.findIndex((job) => job.id === a.id)
    const indexB = allJobs.findIndex((job) => job.id === b.id)
    return matchScores[indexB] - matchScores[indexA]
  })

  // Get top recommended jobs
  const recommendedJobs = sortedJobs.slice(0, 6)

  // Sort match scores to match the order of recommended jobs
  const sortedScores = recommendedJobs.map((job) => {
    const originalIndex = allJobs.findIndex((j) => j.id === job.id)
    return matchScores[originalIndex]
  })

  return {
    recommendedJobs,
    matchScores: sortedScores,
    skillGaps: mockSkillGaps,
  }
}

