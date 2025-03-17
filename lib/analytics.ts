const mockAnalytics = {
  // Overview metrics
  totalApplications: 42,
  totalInterviews: 12,
  totalOffers: 3,
  totalRejections: 15,
  totalViews: 120,

  // Growth rates
  applicationGrowth: 15,
  interviewGrowth: 20,
  offerGrowth: 50,
  rejectionGrowth: -10,

  // Conversion rates
  applicationRate: 35, // % of viewed jobs that were applied to
  interviewRate: 28, // % of applications that led to interviews
  offerRate: 25, // % of interviews that led to offers
  rejectionRate: 36, // % of applications that were rejected

  // Timeline data
  applicationTimeline: [
    { date: "Week 1", count: 5 },
    { date: "Week 2", count: 8 },
    { date: "Week 3", count: 12 },
    { date: "Week 4", count: 7 },
    { date: "Week 5", count: 10 },
  ],

  // Status breakdown
  applicationStatus: [
    { status: "Pending", count: 12 },
    { status: "In Review", count: 10 },
    { status: "Interview", count: 5 },
    { status: "Offer", count: 3 },
    { status: "Rejected", count: 15 },
  ],

  // Job type breakdown
  applicationsByJobType: [
    { type: "Full-time", count: 25 },
    { type: "Contract", count: 10 },
    { type: "Remote", count: 15 },
    { type: "Hybrid", count: 8 },
    { type: "On-site", count: 4 },
  ],

  // Location breakdown
  applicationsByLocation: [
    { location: "New York", count: 15 },
    { location: "San Francisco", count: 10 },
    { location: "Remote", count: 12 },
    { location: "Chicago", count: 5 },
    { location: "Other", count: 10 },
  ],
}

// Function to get user analytics
export async function getUserAnalytics(userId: string) {
  // In a real app, this would fetch from a database based on the user ID
  return mockAnalytics
}

