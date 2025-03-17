const mockUpcomingInterviews = [
  {
    position: "Frontend Developer",
    company: "TechCorp",
    date: "March 18, 2025",
    time: "10:00 AM - 11:30 AM",
    type: "Remote",
    location: "Zoom Meeting",
    interviewer: "Sarah Johnson, Lead Developer",
  },
  {
    position: "UI/UX Designer",
    company: "DesignStudio",
    date: "March 20, 2025",
    time: "2:00 PM - 3:30 PM",
    type: "In-person",
    location: "123 Main St, Suite 400",
    interviewer: "Michael Chen, Design Director",
  },
  {
    position: "Full Stack Developer",
    company: "WebSolutions",
    date: "March 25, 2025",
    time: "11:00 AM - 12:30 PM",
    type: "Remote",
    location: "Google Meet",
    interviewer: "Alex Rodriguez, CTO",
  },
]

const mockPastInterviews = [
  {
    position: "JavaScript Developer",
    company: "CodeWorks",
    date: "March 10, 2025",
    time: "1:00 PM - 2:30 PM",
    type: "Remote",
    location: "Microsoft Teams",
    interviewer: "David Kim, Engineering Manager",
    feedback: "Great technical skills. Moving to the next round.",
  },
  {
    position: "React Developer",
    company: "AppTech",
    date: "March 5, 2025",
    time: "10:00 AM - 11:00 AM",
    type: "In-person",
    location: "456 Tech Blvd, Floor 3",
    interviewer: "Jennifer Lee, Senior Developer",
    feedback: "Strong React knowledge. Need to improve on state management concepts.",
  },
]

// Function to get scheduled interviews
export async function getScheduledInterviews(userId: string) {
  // In a real app, this would fetch from a database based on the user ID
  return {
    upcomingInterviews: mockUpcomingInterviews,
    pastInterviews: mockPastInterviews,
  }
}

