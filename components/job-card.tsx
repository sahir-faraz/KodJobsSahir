"use client";  // <-- Add this at the top

import Link from "next/link"
import { CalendarDays, MapPin, Bookmark, Briefcase } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"


type Job = {
  id: string
  title: string
  company: string
  location: string
  type: string
  salary: string
  posted: string
  logo: string
}

export function JobCard({ job }: { job: Job }) {
  const [saved, setSaved] = useState(false)

  const handleSaveJob = () => {
    setSaved(!saved)
  }

  return (
    <Card className="overflow-hidden job-card border-l-4 border-gradient shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg">
      <CardHeader className="p-5 pb-0 flex flex-row items-start gap-4">
        {/* Job Logo with Fallback */}
        <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center border">
          {job.logo ? (
            <img alt={`${job.company} logo`} src={job.logo} className="w-full h-full object-cover" />
          ) : (
            <span className="text-gray-600 font-bold text-lg">{job.company.charAt(0)}</span>
          )}
        </div>

        {/* Job Title & Company Name */}
        <div className="flex-1 space-y-1">
          <h3 className="font-semibold text-lg">{job.title}</h3>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <Briefcase className="h-4 w-4 text-primary" /> {job.company}
          </p>
        </div>

        {/* Save Job Button */}
        <Button
          variant="ghost"
          size="icon"
          className={`h-9 w-9 transition-colors ${saved ? "text-yellow-500" : "text-gray-400 hover:text-primary"}`}
          onClick={handleSaveJob}
        >
          <Bookmark className={`h-5 w-5 ${saved ? "fill-yellow-500" : ""}`} />
        </Button>
      </CardHeader>

      {/* Job Details */}
      <CardContent className="p-5 pt-2">
        <div className="flex flex-wrap gap-3 mb-3">
          <Badge variant="secondary" className="text-xs px-3 py-1">
            {job.type}
          </Badge>
          <Badge variant="outline" className="text-xs px-3 py-1">
            {job.salary}
          </Badge>
        </div>

        {/* Location & Date Posted */}
        <div className="flex flex-col gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-primary" />
            {job.location}
          </div>
          <div className="flex items-center gap-1">
            <CalendarDays className="h-4 w-4 text-primary" />
            Posted {job.posted}
          </div>
        </div>
      </CardContent>

      {/* Apply Now Button */}
      <CardFooter className="p-5 pt-0">
        <Link href={`/dashboard/jobs/${job.id}`} className="w-full">
          <Button size="lg" className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            Apply Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

