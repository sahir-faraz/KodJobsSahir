import Link from "next/link"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SignupForm } from "@/components/signup-form"
import { getUserFromSession } from "@/lib/auth"

export default async function SignupPage() {
  const user = await getUserFromSession()

  if (user) {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background border-b">
        <div className="container flex h-16 items-center">
        <img 
    src="kodlogo.jpg"  /* Change this to your actual logo path */
    alt="KodJobs Logo" 
    className="w-12 h-12"  /* Adjust size as needed */
  />
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl ffont-bold tracking-tighter">KodJobs</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Create an account</CardTitle>
            <CardDescription>Enter your information to create a KodJobs account</CardDescription>
          </CardHeader>
          <CardContent>
            <SignupForm />
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-4">
            <div className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-primary underline-offset-4 hover:underline">
                Login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

