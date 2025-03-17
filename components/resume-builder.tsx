"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus, Trash2, Save, Award, Briefcase, GraduationCap, Code } from "lucide-react"
import { Badge } from "@/components/ui/badge"

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

export function ResumeBuilder({ initialData }: { initialData: ResumeData }) {
  const [resumeData, setResumeData] = useState<ResumeData>(initialData)
  const [newSkill, setNewSkill] = useState("")
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle")

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [name]: value,
      },
    })
  }

  const addSkill = () => {
    if (newSkill.trim() && !resumeData.skills.includes(newSkill.trim())) {
      setResumeData({
        ...resumeData,
        skills: [...resumeData.skills, newSkill.trim()],
      })
      setNewSkill("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setResumeData({
      ...resumeData,
      skills: resumeData.skills.filter((skill) => skill !== skillToRemove),
    })
  }

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experience: [
        ...resumeData.experience,
        {
          title: "",
          company: "",
          location: "",
          startDate: "",
          endDate: "",
          description: "",
          achievements: [],
        },
      ],
    })
  }

  const updateExperience = (index: number, field: string, value: string) => {
    const updatedExperience = [...resumeData.experience]
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value,
    }
    setResumeData({
      ...resumeData,
      experience: updatedExperience,
    })
  }

  const removeExperience = (index: number) => {
    setResumeData({
      ...resumeData,
      experience: resumeData.experience.filter((_, i) => i !== index),
    })
  }

  const addAchievement = (experienceIndex: number, achievement: string) => {
    if (!achievement.trim()) return

    const updatedExperience = [...resumeData.experience]
    updatedExperience[experienceIndex] = {
      ...updatedExperience[experienceIndex],
      achievements: [...updatedExperience[experienceIndex].achievements, achievement],
    }

    setResumeData({
      ...resumeData,
      experience: updatedExperience,
    })
  }

  const removeAchievement = (experienceIndex: number, achievementIndex: number) => {
    const updatedExperience = [...resumeData.experience]
    updatedExperience[experienceIndex] = {
      ...updatedExperience[experienceIndex],
      achievements: updatedExperience[experienceIndex].achievements.filter((_, i) => i !== achievementIndex),
    }

    setResumeData({
      ...resumeData,
      experience: updatedExperience,
    })
  }

  const saveResume = () => {
    setSaveStatus("saving")
    // In a real app, this would send the data to the server
    setTimeout(() => {
      setSaveStatus("saved")
      setTimeout(() => setSaveStatus("idle"), 2000)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Resume Editor</h2>
        <Button onClick={saveResume} disabled={saveStatus === "saving"}>
          <Save className="mr-2 h-4 w-4" />
          {saveStatus === "idle" && "Save Resume"}
          {saveStatus === "saving" && "Saving..."}
          {saveStatus === "saved" && "Saved!"}
        </Button>
      </div>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Add your personal details to help employers contact you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={resumeData.personalInfo.name}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={resumeData.personalInfo.title}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={resumeData.personalInfo.email}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={resumeData.personalInfo.phone}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={resumeData.personalInfo.location}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website/Portfolio</Label>
                  <Input
                    id="website"
                    name="website"
                    value={resumeData.personalInfo.website}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="summary">Professional Summary</Label>
                <Textarea
                  id="summary"
                  name="summary"
                  rows={4}
                  value={resumeData.personalInfo.summary}
                  onChange={handlePersonalInfoChange}
                />
                <p className="text-sm text-muted-foreground">
                  Write a short summary highlighting your experience, skills, and career goals.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Add your technical and professional skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a skill (e.g., JavaScript, Project Management)"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      addSkill()
                    }
                  }}
                />
                <Button onClick={addSkill}>
                  <Plus className="h-4 w-4" />
                  Add
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {resumeData.skills.map((skill, index) => (
                  <Badge key={index} className="px-3 py-1 flex items-center gap-1">
                    {skill}
                    <button
                      onClick={() => removeSkill(skill)}
                      className="ml-1 text-primary-foreground/70 hover:text-primary-foreground"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}

                {resumeData.skills.length === 0 && (
                  <p className="text-sm text-muted-foreground">No skills added yet. Add your first skill above.</p>
                )}
              </div>

              <div className="mt-4 pt-4 border-t">
                <h3 className="text-sm font-medium mb-2">Skill Tips:</h3>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc pl-4">
                  <li>Include both technical and soft skills</li>
                  <li>Add skills that are relevant to the jobs you're applying for</li>
                  <li>Be specific with technical skills (e.g., "React" instead of just "JavaScript")</li>
                  <li>Include skill level if relevant (e.g., "Advanced SQL")</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="experience" className="space-y-4 mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Work Experience</CardTitle>
                <CardDescription>Add your work history, starting with your most recent position</CardDescription>
              </div>
              <Button onClick={addExperience}>
                <Plus className="mr-2 h-4 w-4" />
                Add Experience
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <Accordion type="multiple" className="w-full">
                {resumeData.experience.map((exp, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <span>
                          {exp.title || "New Position"} {exp.company ? `at ${exp.company}` : ""}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`job-title-${index}`}>Job Title</Label>
                          <Input
                            id={`job-title-${index}`}
                            value={exp.title}
                            onChange={(e) => updateExperience(index, "title", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`company-${index}`}>Company</Label>
                          <Input
                            id={`company-${index}`}
                            value={exp.company}
                            onChange={(e) => updateExperience(index, "company", e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`location-${index}`}>Location</Label>
                          <Input
                            id={`location-${index}`}
                            value={exp.location}
                            onChange={(e) => updateExperience(index, "location", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`start-date-${index}`}>Start Date</Label>
                          <Input
                            id={`start-date-${index}`}
                            value={exp.startDate}
                            onChange={(e) => updateExperience(index, "startDate", e.target.value)}
                            placeholder="e.g., Jan 2020"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`end-date-${index}`}>End Date</Label>
                          <Input
                            id={`end-date-${index}`}
                            value={exp.endDate}
                            onChange={(e) => updateExperience(index, "endDate", e.target.value)}
                            placeholder="e.g., Present"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor={`description-${index}`}>Job Description</Label>
                        <Textarea
                          id={`description-${index}`}
                          value={exp.description}
                          onChange={(e) => updateExperience(index, "description", e.target.value)}
                          rows={3}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>Key Achievements</Label>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex gap-2">
                              <Input
                                value={achievement}
                                onChange={(e) => {
                                  const updatedExperience = [...resumeData.experience]
                                  updatedExperience[index].achievements[achievementIndex] = e.target.value
                                  setResumeData({
                                    ...resumeData,
                                    experience: updatedExperience,
                                  })
                                }}
                              />
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => removeAchievement(index, achievementIndex)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          ))}

                          <div className="flex gap-2">
                            <Input
                              placeholder="Add an achievement"
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  e.preventDefault()
                                  addAchievement(index, e.currentTarget.value)
                                  e.currentTarget.value = ""
                                }
                              }}
                            />
                            <Button
                              variant="outline"
                              onClick={(e) => {
                                const input = e.currentTarget.previousSibling as HTMLInputElement
                                addAchievement(index, input.value)
                                input.value = ""
                              }}
                            >
                              <Plus className="h-4 w-4" />
                              Add
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button variant="destructive" size="sm" onClick={() => removeExperience(index)}>
                          <Trash2 className="mr-2 h-4 w-4" />
                          Remove Position
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {resumeData.experience.length === 0 && (
                <div className="text-center py-8">
                  <Briefcase className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-2 text-lg font-medium">No work experience added</h3>
                  <p className="text-sm text-muted-foreground">
                    Add your work history to showcase your professional experience
                  </p>
                  <Button className="mt-4" onClick={addExperience}>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Experience
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education" className="space-y-4 mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Education</CardTitle>
                <CardDescription>Add your educational background and certifications</CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Education
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <Accordion type="multiple" className="w-full">
                {resumeData.education.map((edu, index) => (
                  <AccordionItem key={index} value={`edu-${index}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        <span>
                          {edu.degree} - {edu.institution}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      {/* Education form fields would go here */}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="pt-6 border-t">
                <h3 className="text-lg font-medium mb-4">Certifications</h3>
                <Accordion type="multiple" className="w-full">
                  {resumeData.certifications.map((cert, index) => (
                    <AccordionItem key={index} value={`cert-${index}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          <span>
                            {cert.name} - {cert.issuer}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4">
                        {/* Certification form fields would go here */}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <Button className="mt-4">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Certification
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="space-y-4 mt-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Projects</CardTitle>
                <CardDescription>Add your personal or professional projects</CardDescription>
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Project
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <Accordion type="multiple" className="w-full">
                {resumeData.projects.map((project, index) => (
                  <AccordionItem key={index} value={`project-${index}`}>
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-2">
                        <Code className="h-4 w-4 text-primary" />
                        <span>{project.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">{/* Project form fields would go here */}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {resumeData.projects.length === 0 && (
                <div className="text-center py-8">
                  <Code className="mx-auto h-12 w-12 text-muted-foreground" />
                  <h3 className="mt-2 text-lg font-medium">No projects added</h3>
                  <p className="text-sm text-muted-foreground">
                    Add your projects to showcase your skills and accomplishments
                  </p>
                  <Button className="mt-4">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Project
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

