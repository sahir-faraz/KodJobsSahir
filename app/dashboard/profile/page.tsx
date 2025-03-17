import { getUserFromSession } from "@/lib/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ProfileForm } from "@/components/profile-form"

export default async function ProfilePage() {
  const user = await getUserFromSession()

  return (
    <div className="container py-6">
      <div className="grid gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-muted-foreground">Manage your personal information and account settings</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent>
              <ProfileForm user={user} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Summary</CardTitle>
              <CardDescription>Your account information and statistics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">{user.email}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Age</p>
                <p className="text-sm text-muted-foreground">{user.age} years old</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Account Created</p>
                <p className="text-sm text-muted-foreground">March 15, 2025</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Profile Completion</p>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "85%" }}></div>
                </div>
                <p className="text-xs text-muted-foreground">85% complete</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium">Activity</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg border p-2">
                    <p className="text-lg font-bold">12</p>
                    <p className="text-xs text-muted-foreground">Applications</p>
                  </div>
                  <div className="rounded-lg border p-2">
                    <p className="text-lg font-bold">3</p>
                    <p className="text-xs text-muted-foreground">Interviews</p>
                  </div>
                  <div className="rounded-lg border p-2">
                    <p className="text-lg font-bold">7</p>
                    <p className="text-xs text-muted-foreground">Saved Jobs</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

