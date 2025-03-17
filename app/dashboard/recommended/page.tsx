import { getUserFromSession } from "@/lib/auth"
import { getRecommendedJobs } from "@/lib/recommendations"
import { JobCard } from "@/components/job-card"
import { Sliders, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"

export default async function RecommendedJobsPage() {
  const user = await getUserFromSession()
  const { recommendedJobs, matchScores, skillGaps } = await getRecommendedJobs(user?.user_id)

  return (
    <div className="container py-6">
      <div className="grid gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Recommended Jobs</h1>
          <p className="text-muted-foreground">
            Jobs that match your skills and preferences, personalized for your profile
          </p>
        </div>

        <Tabs defaultValue="matches" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="matches">Best Matches</TabsTrigger>
            <TabsTrigger value="skills">Skills Match</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          <TabsContent value="matches" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {recommendedJobs.map((job, index) => (
                <div key={job.id} className="relative">
                  <div className="absolute -top-2 -right-2 z-10">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white">
                      {matchScores[index]}% Match
                    </Badge>
                  </div>
                  <JobCard job={job} />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Skills Match</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">React</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">TypeScript</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Node.js</span>
                      <span className="text-sm text-muted-foreground">70%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: "70%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">UI/UX Design</span>
                      <span className="text-sm text-muted-foreground">60%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-amber-500 rounded-full" style={{ width: "60%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">DevOps</span>
                      <span className="text-sm text-muted-foreground">40%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full" style={{ width: "40%" }}></div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h3 className="font-medium mb-2">Skill Gaps to Fill</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGaps.map((skill, index) => (
                      <Badge key={index} variant="outline" className="bg-muted/50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Link href="/dashboard/resume">
                    <Button className="w-full">
                      Update Skills in Resume Builder
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Job Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Salary Range</label>
                      <span className="text-sm text-muted-foreground">$80K - $120K</span>
                    </div>
                    <Slider defaultValue={[80, 120]} min={40} max={200} step={5} className="py-4" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Experience Level</label>
                      <span className="text-sm text-muted-foreground">Mid-Senior</span>
                    </div>
                    <Slider defaultValue={[3]} min={0} max={10} step={1} className="py-4" />
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="text-sm font-medium">Remote Work Preference</label>
                      <span className="text-sm text-muted-foreground">Hybrid</span>
                    </div>
                    <Slider defaultValue={[50]} min={0} max={100} step={10} className="py-4" />
                  </div>

                  <div className="pt-2">
                    <h3 className="text-sm font-medium mb-2">Job Types</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-primary">Full-time</Badge>
                      <Badge variant="outline">Contract</Badge>
                      <Badge variant="outline">Part-time</Badge>
                      <Badge variant="outline">Freelance</Badge>
                    </div>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-sm font-medium mb-2">Industries</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-primary">Technology</Badge>
                      <Badge className="bg-primary">Finance</Badge>
                      <Badge variant="outline">Healthcare</Badge>
                      <Badge variant="outline">Education</Badge>
                      <Badge variant="outline">E-commerce</Badge>
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  <Sliders className="mr-2 h-4 w-4" />
                  Update Preferences
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

