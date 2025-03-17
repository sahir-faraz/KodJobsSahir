import { getUserFromSession } from "@/lib/auth"
import { getUserNotifications } from "@/lib/notifications"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Bell, Mail, MessageSquare, Calendar, Briefcase, CheckCircle, Clock, Settings } from "lucide-react"

export default async function NotificationsPage() {
  const user = await getUserFromSession()
  const { notifications, preferences } = await getUserNotifications(user?.user_id)

  return (
    <div className="container py-6">
      <div className="grid gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">Manage your notifications and email preferences</p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList className="grid w-[400px] grid-cols-4">
              <TabsTrigger value="all">
                All
                <Badge className="ml-2">{notifications.length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="unread">
                Unread
                <Badge className="ml-2">{notifications.filter((n) => !n.read).length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="important">Important</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <Button variant="outline" size="sm">
              <Bell className="mr-2 h-4 w-4" />
              Mark All as Read
            </Button>
          </div>

          <TabsContent value="all" className="space-y-4">
            {notifications.map((notification, index) => (
              <Card key={index} className={notification.read ? "opacity-70" : ""}>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className={`p-2 rounded-full ${getNotificationIconBg(notification.type)}`}>
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{notification.title}</h3>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                          {!notification.read && <Badge className="h-2 w-2 rounded-full p-0" />}
                        </div>
                      </div>
                      {notification.actions && (
                        <div className="flex gap-2 mt-2">
                          {notification.actions.map((action, actionIndex) => (
                            <Button key={actionIndex} size="sm" variant={action.primary ? "default" : "outline"}>
                              {action.label}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="unread" className="space-y-4">
            {notifications
              .filter((n) => !n.read)
              .map((notification, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className={`p-2 rounded-full ${getNotificationIconBg(notification.type)}`}>
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">{notification.title}</h3>
                            <p className="text-sm text-muted-foreground">{notification.message}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">{notification.time}</span>
                            <Badge className="h-2 w-2 rounded-full p-0" />
                          </div>
                        </div>
                        {notification.actions && (
                          <div className="flex gap-2 mt-2">
                            {notification.actions.map((action, actionIndex) => (
                              <Button key={actionIndex} size="sm" variant={action.primary ? "default" : "outline"}>
                                {action.label}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

            {notifications.filter((n) => !n.read).length === 0 && (
              <div className="text-center py-12">
                <CheckCircle className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-2 text-lg font-medium">All caught up!</h3>
                <p className="text-muted-foreground">You have no unread notifications</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="important" className="space-y-4">
            {notifications
              .filter((n) => n.important)
              .map((notification, index) => (
                <Card key={index}>
                  <CardContent className="p-4">{/* Important notification content */}</CardContent>
                </Card>
              ))}

            {notifications.filter((n) => n.important).length === 0 && (
              <div className="text-center py-12">
                <Bell className="mx-auto h-12 w-12 text-muted-foreground" />
                <h3 className="mt-2 text-lg font-medium">No important notifications</h3>
                <p className="text-muted-foreground">Important notifications will appear here</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Email Notifications</CardTitle>
                <CardDescription>Configure which emails you want to receive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <Label htmlFor="email-job-matches">Job Matches</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive emails about new jobs that match your profile
                        </p>
                      </div>
                    </div>
                    <Switch id="email-job-matches" defaultChecked={preferences.emailJobMatches} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <div>
                        <Label htmlFor="email-messages">Messages</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive emails when you get new messages from recruiters
                        </p>
                      </div>
                    </div>
                    <Switch id="email-messages" defaultChecked={preferences.emailMessages} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <Label htmlFor="email-interviews">Interview Reminders</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive email reminders about upcoming interviews
                        </p>
                      </div>
                    </div>
                    <Switch id="email-interviews" defaultChecked={preferences.emailInterviews} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <div>
                        <Label htmlFor="email-applications">Application Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Receive emails about your job application status changes
                        </p>
                      </div>
                    </div>
                    <Switch id="email-applications" defaultChecked={preferences.emailApplications} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>In-App Notifications</CardTitle>
                <CardDescription>Configure which notifications you want to see in the app</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <div>
                        <Label htmlFor="app-job-matches">Job Matches</Label>
                        <p className="text-sm text-muted-foreground">Show notifications for new job matches</p>
                      </div>
                    </div>
                    <Switch id="app-job-matches" defaultChecked={preferences.appJobMatches} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <div>
                        <Label htmlFor="app-messages">Messages</Label>
                        <p className="text-sm text-muted-foreground">Show notifications for new messages</p>
                      </div>
                    </div>
                    <Switch id="app-messages" defaultChecked={preferences.appMessages} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <Label htmlFor="app-interviews">Interview Reminders</Label>
                        <p className="text-sm text-muted-foreground">Show notifications for upcoming interviews</p>
                      </div>
                    </div>
                    <Switch id="app-interviews" defaultChecked={preferences.appInterviews} />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <Label htmlFor="app-applications">Application Updates</Label>
                        <p className="text-sm text-muted-foreground">
                          Show notifications for application status changes
                        </p>
                      </div>
                    </div>
                    <Switch id="app-applications" defaultChecked={preferences.appApplications} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full">
              <Settings className="mr-2 h-4 w-4" />
              Save Notification Preferences
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Helper functions for notification icons
function getNotificationIcon(type: string) {
  switch (type) {
    case "job":
      return <Briefcase className="h-5 w-5 text-blue-500" />
    case "message":
      return <MessageSquare className="h-5 w-5 text-green-500" />
    case "interview":
      return <Calendar className="h-5 w-5 text-purple-500" />
    case "application":
      return <CheckCircle className="h-5 w-5 text-amber-500" />
    default:
      return <Bell className="h-5 w-5 text-gray-500" />
  }
}

function getNotificationIconBg(type: string) {
  switch (type) {
    case "job":
      return "bg-blue-100"
    case "message":
      return "bg-green-100"
    case "interview":
      return "bg-purple-100"
    case "application":
      return "bg-amber-100"
    default:
      return "bg-gray-100"
  }
}

