"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { JobCard } from "@/components/job-card"
import { getAllJobs, searchJobs } from "@/lib/jobs"

export default function JobsPage() {
  const [jobs, setJobs] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadJobs() {
      setLoading(true)
      const allJobs = await getAllJobs()
      setJobs(allJobs)
      setLoading(false)
    }

    loadJobs()
  }, [])

  async function handleSearch(e) {
    e.preventDefault()
    setLoading(true)
    const results = await searchJobs(searchQuery)
    setJobs(results)
    setLoading(false)
  }

  return (
    <div className="container py-6">
      <div className="grid gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Find Jobs</h1>
          <p className="text-muted-foreground">
            Browse and search for job opportunities that match your skills and interests.
          </p>
        </div>

        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search jobs by title, company, or location..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button type="submit">Search</Button>
          </form>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {jobs.length > 0 ? (
              jobs.map((job) => <JobCard key={job.id} job={job} />)
            ) : (
              <div className="col-span-full text-center py-8">
                <h3 className="text-lg font-medium">No jobs found</h3>
                <p className="text-muted-foreground">Try adjusting your search criteria</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

