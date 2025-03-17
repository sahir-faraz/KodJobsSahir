const mockNotifications = [
  {
    id: "1",
    type: "job",
    title: "New Job Match",
    message: "We found a new Frontend Developer position at TechCorp that matches your profile.",
    time: "10 minutes ago",
    read: false,
    important: true,
    actions: [
      { label: "View Job", primary: true },
      { label: "Dismiss", primary: false },
    ],
  },
  {
    id: "2",
    type: "interview",
    title: "Interview Reminder",
    message: "Your interview with DataSystems for Backend Engineer is tomorrow at 2:00 PM.",
    time: "1 hour ago",
    read: false,
    important: true,
    actions: [
      { label: "View Details", primary: true },
      { label: "Add to Calendar", primary: false },
    ],
  },
  {
    id: "3",
    type: "application",
    title: "Application Status Update",
    message: "Your application for UX/UI Designer at CreativeMinds has been reviewed.",
    time: "3 hours ago",
    read: true,
    important: false,
    actions: [{ label: "View Status", primary: true }],
  },
  {
    id: "4",
    type: "message",
    title: "New Message",
    message: "Sarah Johnson from TechCorp sent you a message about your application.",
    time: "1 day ago",
    read: true,
    important: false,
    actions: [
      { label: "Read Message", primary: true },
      { label: "Reply", primary: false },
    ],
  },
  {
    id: "5",
    type: "job",
    title: "Job Recommendation",
    message: "Based on your profile, we recommend the Full Stack Developer position at WebSolutions.",
    time: "2 days ago",
    read: true,
    important: false,
    actions: [{ label: "View Job", primary: true }],
  },
]

// Mock notification preferences
const mockPreferences = {
  // Email preferences
  emailJobMatches: true,
  emailMessages: true,
  emailInterviews: true,
  emailApplications: false,

  // In-app notification preferences
  appJobMatches: true,
  appMessages: true,
  appInterviews: true,
  appApplications: true,
}

// Function to get user notifications
export async function getUserNotifications(userId: string) {
  // In a real app, this would fetch from a database based on the user ID
  return {
    notifications: mockNotifications,
    preferences: mockPreferences,
  }
}

