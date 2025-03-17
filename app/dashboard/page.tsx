import Link from "next/link"
import { getUserFromSession } from "@/lib/auth"
import { JobCard } from "@/components/job-card"
import { getRecentJobs } from "@/lib/jobs"
import { BriefcaseBusiness, FileText, Users, Bookmark, TrendingUp, Bell, Calendar, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default async function DashboardPage() {
  const user = await getUserFromSession()
  const recentJobs = await getRecentJobs(3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <div className="container py-8">
        <div className="grid gap-8">
          <div className="animate-fade-in">
            <div className="rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-background p-8 border shadow-sm">
              <div className="flex flex-col md:flex-row justify-between gap-6">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name}!</h1>
                  <p className="text-muted-foreground max-w-md">
                    Your job search journey is looking great. Here's what's happening with your profile.
                  </p>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-2 bg-background rounded-lg p-3 shadow-sm border">
                    <div className="bg-primary/10 p-2 rounded-md">
                      <TrendingUp className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Profile views</p>
                      <p className="text-2xl font-bold">
                        32 <span className="text-green-500 text-sm font-normal">+12%</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 animate-slide-up">
            <Card className="dashboard-stat-card border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Profile Completion</p>
                    <p className="text-2xl font-bold">85%</p>
                  </div>
                  <div className="bg-primary/10 p-2 rounded-full">
                    <BriefcaseBusiness className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <Progress value={85} className="h-2 mt-4" />
                <p className="text-xs text-muted-foreground mt-2">Complete your profile to increase visibility</p>
              </CardContent>
            </Card>

            <Card className="dashboard-stat-card border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Applications</p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                  <div className="bg-blue-500/10 p-2 rounded-full">
                    <FileText className="h-5 w-5 text-blue-500" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <div className="h-2 bg-blue-500 rounded-full w-3/4"></div>
                  <span className="text-xs text-muted-foreground">75%</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">8 in review, 3 accepted, 1 rejected</p>
              </CardContent>
            </Card>

            <Card className="dashboard-stat-card border-l-4 border-l-amber-500">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Interviews</p>
                    <p className="text-2xl font-bold">3</p>
                  </div>
                  <div className="bg-amber-500/10 p-2 rounded-full">
                    <Users className="h-5 w-5 text-amber-500" />
                  </div>
                </div>
                <div className="mt-4 space-y-1">
                  <div className="flex justify-between text-xs">
                    <span>TechCorp</span>
                    <span className="text-muted-foreground">Tomorrow, 10:00 AM</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span>DataSystems</span>
                    <span className="text-muted-foreground">Mar 18, 2:30 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="dashboard-stat-card border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Saved Jobs</p>
                    <p className="text-2xl font-bold">7</p>
                  </div>
                  <div className="bg-green-500/10 p-2 rounded-full">
                    <Bookmark className="h-5 w-5 text-green-500" />
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4">
                  <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-1/3"></div>
                  </div>
                  <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-1/2"></div>
                  </div>
                  <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-3/4"></div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">3 new matches with your profile</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold tracking-tight">Recommended for You</h2>
                <Link href="/dashboard/jobs">
                  <Button variant="ghost" size="sm" className="text-primary">
                    View all jobs
                  </Button>
                </Link>
              </div>

              <div className="grid gap-4">
                {recentJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Upcoming Events</h3>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <div className="bg-primary/10 p-2 rounded-md flex-shrink-0">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Tech Career Fair</p>
                        <p className="text-xs text-muted-foreground">Mar 17, 2025 • 10:00 AM</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="bg-primary/10 p-2 rounded-md flex-shrink-0">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Resume Workshop</p>
                        <p className="text-xs text-muted-foreground">Mar 20, 2025 • 2:00 PM</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="bg-primary/10 p-2 rounded-md flex-shrink-0">
                        <Bell className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Interview with TechCorp</p>
                        <p className="text-xs text-muted-foreground">Mar 16, 2025 • 10:00 AM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold">Job Search Activity</h3>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <TrendingUp className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Profile Views</span>
                        <span className="font-medium">32</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-3/4"></div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Applications Submitted</span>
                        <span className="font-medium">12</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-1/2"></div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Saved Searches</span>
                        <span className="font-medium">5</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 w-1/4"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-semibold">Quick Job Search</h3>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <input
                      type="search"
                      placeholder="Search jobs..."
                      className="w-full rounded-md border border-input bg-background px-9 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" className="rounded-full">
                      Remote
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Full-time
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Tech
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      Design
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

