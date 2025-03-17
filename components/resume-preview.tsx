"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Globe, Briefcase, GraduationCap, Award, Code } from "lucide-react"

type ResumeData = {
  personalInfo: {
    name: string
    title: string
    email: string
    phone: string
    location: string
    website: string
    summary: string
  }
  skills: string[]
  experience: Array<{
    title: string
    company: string
    location: string
    startDate: string
    endDate: string
    description: string
    achievements: string[]
  }>
  education: Array<{
    degree: string
    institution: string
    location: string
    startDate: string
    endDate: string
    description: string
  }>
  certifications: Array<{
    name: string
    issuer: string
    date: string
    expires: string
  }>
  projects: Array<{
    title: string
    description: string
    link: string
  }>
}

export function ResumePreview({ resume }: { resume: ResumeData }) {
  return (
    <div className="flex justify-center">
      <Card className="w-full max-w-[800px] shadow-lg">
        <CardContent className="p-8">
          {/* Header */}
          <div className="border-b pb-6 mb-6">
            <h1 className="text-3xl font-bold text-center">{resume.personalInfo.name}</h1>
            <p className="text-xl text-center text-muted-foreground mt-1">{resume.personalInfo.title}</p>

            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="flex items-center gap-1 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span>{resume.personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span>{resume.personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{resume.personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Globe className="h-4 w-4 text-primary" />
                <span>{resume.personalInfo.website}</span>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Professional Summary</h2>
            <p className="text-muted-foreground">{resume.personalInfo.summary}</p>
          </div>

          {/* Skills */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {resume.skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Work Experience
            </h2>

            <div className="space-y-6">
              {resume.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {exp.company}, {exp.location}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>

                  <p className="text-sm mt-2">{exp.description}</p>

                  {exp.achievements.length > 0 && (
                    <div className="mt-2">
                      <p className="text-sm font-medium">Key Achievements:</p>
                      <ul className="list-disc pl-5 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </h2>

            <div className="space-y-4">
              {resume.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">
                        {edu.institution}, {edu.location}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {edu.startDate} - {edu.endDate}
                    </p>
                  </div>

                  {edu.description && <p className="text-sm mt-2">{edu.description}</p>}
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Certifications
            </h2>

            <div className="grid grid-cols-2 gap-4">
              {resume.certifications.map((cert, index) => (
                <div key={index} className="border rounded-md p-3">
                  <h3 className="font-medium">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>Issued: {cert.date}</span>
                    {cert.expires !== "N/A" && <span>Expires: {cert.expires}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              Projects
            </h2>

            <div className="space-y-4">
              {resume.projects.map((project, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <h3 className="font-medium">{project.title}</h3>
                  <p className="text-sm mt-1">{project.description}</p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-primary hover:underline mt-1 inline-block"
                    >
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

