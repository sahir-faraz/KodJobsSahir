import { getUserFromSession } from "@/lib/auth"
import { getUserAnalytics } from "@/lib/analytics"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart, LineChart, PieChart, DonutChart } from "@/components/charts"
import { Calendar, Download, TrendingUp, TrendingDown, Users, Briefcase, CheckCircle, XCircle } from "lucide-react"

export default async function AnalyticsPage() {
  const user = await getUserFromSession()
  const analytics = await getUserAnalytics(user?.user_id)

  return (
    <div className="container py-6">
      <div className="grid gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Job Search Analytics</h1>
            <p className="text-muted-foreground">Track your job search progress and performance metrics</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              Last 30 Days
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Applications</p>
                  <div className="flex items-center">
                    <p className="text-2xl font-bold text-black">{analytics.totalApplications}</p>
                    <Badge className="ml-2 bg-green-500">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      {analytics.applicationGrowth}%
                    </Badge>
                  </div>
                </div>
                <div className="bg-primary/10 p-2 rounded-full">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
              </div>
              <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary" style={{ width: `${analytics.applicationRate}%` }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {analytics.applicationRate}% application rate from job views
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Interviews</p>
                  <div className="flex items-center">
                    <p className="text-2xl font-bold text-black">{analytics.totalInterviews}</p>
                    <Badge className="ml-2 bg-green-500">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      {analytics.interviewGrowth}%
                    </Badge>
                  </div>
                </div>
                <div className="bg-blue-500/10 p-2 rounded-full">
                  <Users className="h-5 w-5 text-blue-500" />
                </div>
              </div>
              <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-blue-500" style={{ width: `${analytics.interviewRate}%` }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {analytics.interviewRate}% interview rate from applications
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Offers</p>
                  <div className="flex items-center">
                    <p className="text-2xl font-bold text-black">{analytics.totalOffers}</p>
                    <Badge className="ml-2 bg-amber-500">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      {analytics.offerGrowth}%
                    </Badge>
                  </div>
                </div>
                <div className="bg-amber-500/10 p-2 rounded-full">
                  <CheckCircle className="h-5 w-5 text-amber-500" />
                </div>
              </div>
              <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-amber-500" style={{ width: `${analytics.offerRate}%` }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">{analytics.offerRate}% offer rate from interviews</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">Rejections</p>
                  <div className="flex items-center">
                    <p className="text-2xl font-bold text-black">{analytics.totalRejections}</p>
                    <Badge className="ml-2 bg-red-500">
                      <TrendingDown className="mr-1 h-3 w-3" />
                      {analytics.rejectionGrowth}%
                    </Badge>
                  </div>
                </div>
                <div className="bg-red-500/10 p-2 rounded-full">
                  <XCircle className="h-5 w-5 text-red-500" />
                </div>
              </div>
              <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-red-500" style={{ width: `${analytics.rejectionRate}%` }}></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {analytics.rejectionRate}% rejection rate from applications
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="interviews">Interviews</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Application Activity</CardTitle>
                  <CardDescription>Your job application activity over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChart data={analytics.applicationTimeline} xAxis="date" yAxis="count" height={300} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Application Status</CardTitle>
                  <CardDescription>Current status of your job applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <DonutChart data={analytics.applicationStatus} category="status" value="count" height={300} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Applications by Job Type</CardTitle>
                  <CardDescription>Distribution of applications by job type</CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChart data={analytics.applicationsByJobType} xAxis="type" yAxis="count" height={300} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Applications by Location</CardTitle>
                  <CardDescription>Distribution of applications by location</CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChart data={analytics.applicationsByLocation} category="location" value="count" height={300} />
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Job Search Funnel</CardTitle>
                <CardDescription>Conversion rates through your job search process</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between h-20">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">{analytics.totalViews}</div>
                    <div className="text-sm text-muted-foreground">Jobs Viewed</div>
                  </div>

                  <div className="h-0.5 w-full max-w-[100px] bg-muted relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                      {analytics.applicationRate}%
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">{analytics.totalApplications}</div>
                    <div className="text-sm text-muted-foreground">Applications</div>
                  </div>

                  <div className="h-0.5 w-full max-w-[100px] bg-muted relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                      {analytics.interviewRate}%
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">{analytics.totalInterviews}</div>
                    <div className="text-sm text-muted-foreground">Interviews</div>
                  </div>

                  <div className="h-0.5 w-full max-w-[100px] bg-muted relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                      {analytics.offerRate}%
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold text-black">{analytics.totalOffers}</div>
                    <div className="text-sm text-muted-foreground">Offers</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-6">
            {/* Applications tab content would go here */}
          </TabsContent>

          <TabsContent value="interviews" className="space-y-6">
            {/* Interviews tab content would go here */}
          </TabsContent>

          <TabsContent value="insights" className="space-y-6">
            {/* Insights tab content would go here */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

