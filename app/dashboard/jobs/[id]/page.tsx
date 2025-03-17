import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Briefcase, CalendarDays, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getJobById } from "@/lib/jobs"

export default async function JobDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const job = await getJobById(params.id)

  if (!job) {
    notFound()
  }

  return (
    <div className="container py-6">
      <div className="grid gap-6">
        <div className="flex items-center gap-2">
          <Link href="/dashboard/jobs">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Jobs
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="p-6 flex flex-row items-start gap-4">
                <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 bg-muted flex items-center justify-center">
                  <img
                    alt={`${job.company} logo`}
                    src={job.logo || "/placeholder.svg"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1 flex-1">
                  <h1 className="text-2xl font-bold">{job.title}</h1>
                  <p className="text-lg text-muted-foreground">{job.company}</p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Badge variant="secondary">{job.type}</Badge>
                    <Badge variant="outline">{job.salary}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-6">
                <div className="flex flex-col gap-2 text-sm sm:flex-row sm:gap-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-1 h-4 w-4" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Briefcase className="mr-1 h-4 w-4" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <CalendarDays className="mr-1 h-4 w-4" />
                    Posted {job.posted}
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">Job Description</h2>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">Requirements</h2>
                  <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex flex-wrap gap-4">
                <Button size="lg">Apply Now</Button>
                <Button variant="outline" size="lg">
                  Save Job
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Company Information</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0 bg-muted flex items-center justify-center">
                    <img
                      alt={`${job.company} logo`}
                      src={job.logo || "/placeholder.svg"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{job.company}</h3>
                    <p className="text-sm text-muted-foreground">{job.location}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    {job.company} is a leading company in the technology industry, focused on creating innovative
                    solutions for businesses and consumers.
                  </p>
                </div>
                <Button variant="outline" className="w-full">
                  View Company Profile
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-4">
              <CardHeader>
                <h2 className="text-xl font-semibold">Similar Jobs</h2>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0 bg-muted flex items-center justify-center">
                      <img
                        alt="Company logo"
                        src="/placeholder.svg?height=40&width=40"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">Senior Frontend Developer</h3>
                      <p className="text-xs text-muted-foreground">WebTech • Remote</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0 bg-muted flex items-center justify-center">
                      <img
                        alt="Company logo"
                        src="/placeholder.svg?height=40&width=40"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">UI Developer</h3>
                      <p className="text-xs text-muted-foreground">DesignCo • New York, NY</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md overflow-hidden flex-shrink-0 bg-muted flex items-center justify-center">
                      <img
                        alt="Company logo"
                        src="/placeholder.svg?height=40&width=40"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">React Developer</h3>
                      <p className="text-xs text-muted-foreground">AppWorks • San Francisco, CA</p>
                    </div>
                  </div>
                </div>
                <Button variant="link" className="w-full">
                  View More Similar Jobs
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

