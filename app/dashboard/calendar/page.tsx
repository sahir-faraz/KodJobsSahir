import { getUserFromSession } from "@/lib/auth"
import { getScheduledInterviews } from "@/lib/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, MapPin, Video, Users, Check, X } from "lucide-react"
import { InterviewScheduler } from "@/components/interview-scheduler"

export default async function CalendarPage() {
  const user = await getUserFromSession()
  const { upcomingInterviews, pastInterviews } = await getScheduledInterviews(user?.user_id)

  // Get dates with interviews for highlighting in calendar
  const interviewDates = [...upcomingInterviews, ...pastInterviews].map((interview) => new Date(interview.date))

  return (
    <div className="container py-6">
      <div className="grid gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Interview Calendar</h1>
          <p className="text-muted-foreground">Manage your upcoming interviews and schedule new ones</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Interview Schedule</CardTitle>
              <CardDescription>Your upcoming and past interviews</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="upcoming" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="upcoming">Upcoming ({upcomingInterviews.length})</TabsTrigger>
                  <TabsTrigger value="past">Past ({pastInterviews.length})</TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming" className="space-y-4">
                  {upcomingInterviews.length > 0 ? (
                    upcomingInterviews.map((interview, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className="flex border-l-4 border-primary">
                          <div className="p-4 flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="font-semibold text-lg">{interview.position}</h3>
                                <p className="text-sm text-muted-foreground">{interview.company}</p>
                              </div>
                              <Badge className={interview.type === "Remote" ? "bg-blue-500" : "bg-green-500"}>
                                {interview.type}
                              </Badge>
                            </div>

                            <div className="grid grid-cols-2 gap-2 mt-4">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CalendarDays className="h-4 w-4 text-primary" />
                                {interview.date}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="h-4 w-4 text-primary" />
                                {interview.time}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                {interview.type === "Remote" ? (
                                  <Video className="h-4 w-4 text-primary" />
                                ) : (
                                  <MapPin className="h-4 w-4 text-primary" />
                                )}
                                {interview.location}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Users className="h-4 w-4 text-primary" />
                                {interview.interviewer}
                              </div>
                            </div>
                          </div>

                          <div className="bg-muted p-4 flex flex-col justify-between items-center">
                            <Button variant="outline" size="sm" className="w-full mb-2">
                              Reschedule
                            </Button>
                            <Button variant="destructive" size="sm" className="w-full">
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <h3 className="text-lg font-medium">No upcoming interviews</h3>
                      <p className="text-muted-foreground">Schedule an interview to get started</p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="past" className="space-y-4">
                  {pastInterviews.length > 0 ? (
                    pastInterviews.map((interview, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className="flex border-l-4 border-muted">
                          <div className="p-4 flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h3 className="font-semibold text-lg">{interview.position}</h3>
                                <p className="text-sm text-muted-foreground">{interview.company}</p>
                              </div>
                              <Badge variant="outline">Completed</Badge>
                            </div>

                            <div className="grid grid-cols-2 gap-2 mt-4">
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <CalendarDays className="h-4 w-4" />
                                {interview.date}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Clock className="h-4 w-4" />
                                {interview.time}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                {interview.type === "Remote" ? (
                                  <Video className="h-4 w-4" />
                                ) : (
                                  <MapPin className="h-4 w-4" />
                                )}
                                {interview.location}
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Users className="h-4 w-4" />
                                {interview.interviewer}
                              </div>
                            </div>

                            {interview.feedback && (
                              <div className="mt-4 pt-4 border-t">
                                <p className="text-sm font-medium">Feedback:</p>
                                <p className="text-sm text-muted-foreground">{interview.feedback}</p>
                              </div>
                            )}
                          </div>

                          <div className="bg-muted p-4 flex flex-col justify-between items-center">
                            <Button variant="outline" size="sm" className="w-full">
                              Add Notes
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <h3 className="text-lg font-medium">No past interviews</h3>
                      <p className="text-muted-foreground">Your completed interviews will appear here</p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <InterviewScheduler />
            </CardFooter>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>View your interview schedule</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  className="rounded-md border"
                  modifiers={{
                    interview: interviewDates,
                  }}
                  modifiersClassNames={{
                    interview: "bg-primary text-primary-foreground font-bold",
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interview Requests</CardTitle>
                <CardDescription>Pending interview invitations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Frontend Developer</h3>
                      <p className="text-sm text-muted-foreground">TechCorp</p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4 text-primary" />
                        <span>Multiple time slots available</span>
                      </div>
                    </div>
                    <Badge>New</Badge>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="flex-1">
                      <Check className="mr-1 h-4 w-4" />
                      Accept
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <X className="mr-1 h-4 w-4" />
                      Decline
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">UX Designer</h3>
                      <p className="text-sm text-muted-foreground">DesignStudio</p>
                      <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4 text-primary" />
                        <span>Multiple time slots available</span>
                      </div>
                    </div>
                    <Badge>New</Badge>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button size="sm" className="flex-1">
                      <Check className="mr-1 h-4 w-4" />
                      Accept
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <X className="mr-1 h-4 w-4" />
                      Decline
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

