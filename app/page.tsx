import Link from "next/link"
import { redirect } from "next/navigation"
import { ArrowRight, CheckCircle, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { getUserFromSession } from "@/lib/auth"

export default async function Home() {
  const user = await getUserFromSession()

  if (user) {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background/80 backdrop-blur-sm fixed w-full z-10 border-b">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
 <img 
    src="kodlogo.jpg"  /* Change this to your actual logo path */
    alt="KodJobs Logo" 
    className="w-12 h-12"  /* Adjust size as needed */
  />
            <span className="text-3xl ffont-bold tracking-tighter">KodJobs</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-b from-primary/10 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                   <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                   Welcome to KodJobs <span className="text-2xl font-bold tracking-tighter sm:text-2xl xl:text-4xl/none">Your Dream Career Starts Here</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Join thousands of successful professionals who found their perfect job through KodJobs.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" className="gap-1 bg-black text-white hover:bg-gray-800">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    <img
                      src="images.png?height=40&width=40"
                      alt="User"
                      className="rounded-full border-2 border-background w-10 h-10"
                    />
                    <img
                      src="images.png?height=40&width=40"
                      alt="User"
                      className="rounded-full border-2 border-background w-10 h-10"
                    />
                    <img
                      src="images.png?height=40&width=40"
                      alt="User"
                      className="rounded-full border-2 border-background w-10 h-10"
                    />
                    <img
                      src="images.png?height=40&width=40"
                      alt="User"
                      className="rounded-full border-2 border-background w-10 h-10"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">10,000+</span> professionals hired last month
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
                  <img
                    alt="Welcome"
                    className="relative z-10 rounded-xl object-cover shadow-lg border"
                     height="200"
                    src="/placeholder.jpg?height=400&width=600"
                    width="550"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from professionals who transformed their careers with KodJobs
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-start space-y-4 rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src="/images.png?height=80&width=80"
                    alt="Sarah Johnson"
                    className="rounded-full h-16 w-16 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold">Sarah Johnson</h3>
                    <p className="text-sm text-muted-foreground">Software Engineer</p>
                  </div>
                </div>
                <div className="flex text-amber-400">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
                <p className="text-muted-foreground">
                  "KodJobs helped me land my dream role at a top tech company. The process was seamless and I received
                  multiple offers within weeks!"
                </p>
              </div>

              <div className="flex flex-col items-start space-y-4 rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src="/images.png?height=80&width=80"
                    alt="Michael Chen"
                    className="rounded-full h-16 w-16 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold">Michael Chen</h3>
                    <p className="text-sm text-muted-foreground">Backend Developer</p>
                  </div>
                </div>
                <div className="flex text-amber-400">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
                <p className="text-muted-foreground">
                    "After struggling for months, I found the perfect role according to my skills through KodJobs. Their job matching
                  algorithm is incredibly accurate!"
                </p>
              </div>

              <div className="flex flex-col items-start space-y-4 rounded-lg border bg-card p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src="/images.png?height=80&width=80"
                    alt="Mohammed"
                    className="rounded-full h-16 w-16 object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold">Mohammed</h3>
                    <p className="text-sm text-muted-foreground">UX Designer</p>
                  </div>
                </div>
                <div className="flex text-amber-400">
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                  <Star className="fill-current h-5 w-5" />
                </div>
                <p className="text-muted-foreground">
                  "KodJobs connected me with companies that truly valued my design skills. I'm now working at my dream
                  company with an amazing team!"
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Why Top Companies Choose KodJobs</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    We connect the best talent with leading companies across industries.
                  </p>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Access to a pool of pre-screened, qualified candidates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Advanced matching algorithm for perfect job-candidate fit</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Streamlined hiring process saving time and resources</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>Dedicated support team for employers and candidates</span>
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-8">
                  <div className="text-4xl ffont-bold tracking-tighter">93%</div>
                  <p className="text-center text-sm text-muted-foreground">Placement success rate</p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-8">
                  <div className="text-4xl ffont-bold tracking-tighter">15K+</div>
                  <p className="text-center text-sm text-muted-foreground">Companies hiring</p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-8">
                  <div className="text-4xl ffont-bold tracking-tighter">2M+</div>
                  <p className="text-center text-sm text-muted-foreground">Registered job seekers</p>
                </div>
                <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-8">
                  <div className="text-4xl ffont-bold tracking-tighter">48hrs</div>
                  <p className="text-center text-sm text-muted-foreground">Average time to hire</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Find Your Dream Job?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of professionals who found success with KodJobs
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/signup">
                  <Button size="lg" className="gap-1 bg-black text-white hover:bg-gray-800">
                    Create Your Profile
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline" className="border-black text-black hover:bg-gray-100">
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 KodJobs. All rights reserved to Developer Sahir Faraz
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Contact 
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

