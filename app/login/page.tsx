import Link from "next/link"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { LoginForm } from "@/components/login-form"
import { getUserFromSession } from "@/lib/auth"

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { registered?: string }
}) {
  const user = await getUserFromSession()

  if (user) {
    redirect("/dashboard")
  }

  const registered = searchParams.registered === "true"

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Section */}
      <header className="bg-background border-b">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <img src="/kodlogo.jpg" alt="KodJobs Logo" className="w-12 h-12" />  
            <span className="text-3xl font-bold tracking-tighter text-black">KodJobs</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Login to KodJobs</CardTitle>
            <CardDescription>Enter your credentials to access your account</CardDescription>
            {registered && (
              <div className="mt-2 p-2 bg-green-50 text-green-700 rounded-md text-sm">
                Account created successfully! You can now log in.
              </div>
            )}
          </CardHeader>

          <CardContent>
            <LoginForm />
          </CardContent>

          {/* Login & Signup Buttons */}
          <CardFooter className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
        
              <Link href="/signup" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                Signup
              </Link>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
