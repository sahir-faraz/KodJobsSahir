import { Badge } from "@/components/ui/badge"
import { getUserFromSession } from "@/lib/auth"
import { getUserResume } from "@/lib/resume"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResumeBuilder } from "@/components/resume-builder"
import { ResumePreview } from "@/components/resume-preview"
import { Button } from "@/components/ui/button"
import { Download, Share2, Star } from "lucide-react"

export default async function ResumePage() {
  const user = await getUserFromSession()
  const resume = await getUserResume(user?.user_id)

  return (
    <div className="container py-6">
      <div className="grid gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resume Builder</h1>
          <p className="text-muted-foreground">Create and manage your professional resume to stand out to employers</p>
        </div>

        <Tabs defaultValue="builder" className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList className="grid w-[400px] grid-cols-3">
              <TabsTrigger value="builder">Builder</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          <TabsContent value="builder">
            <ResumeBuilder initialData={resume} />
          </TabsContent>

          <TabsContent value="preview">
            <ResumePreview resume={resume} />
          </TabsContent>

          <TabsContent value="templates">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="overflow-hidden border-2 border-primary">
                <div className="aspect-[3/4] relative">
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="Modern template"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-primary">Active</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Modern</h3>
                    <div className="flex text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Clean, professional design with a modern touch</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="Classic template"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Classic</h3>
                    <div className="flex text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Traditional layout that works for all industries</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-[3/4] relative">
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="Creative template"
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">Creative</h3>
                    <div className="flex text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Stand out with this bold, creative design</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

