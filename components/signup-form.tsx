"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signup } from "@/lib/actions"
import Link from "next/link";


export function SignupForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [dob, setDob] = useState("")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData(event.currentTarget)
    formData.append("dob", dob) // Store DOB as manually entered

    try {
      const result = await signup(formData)

      if (result.error) {
        setError(result.error)
        setIsLoading(false)
        return
      }

      router.push("/login?registered=true")
    } catch (error) {
      setError("An unexpected error occurred. Please try again.")
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" placeholder="Enter your full name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="Enter your email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" placeholder="Create a password" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="dob">Date of Birth (YYYY-MM-DD)</Label>
        <Input
          id="dob"
          name="dob"
          type="text"  // Changed from "date" to "text" to disable calendar popup
          placeholder="YYYY-MM-DD"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          pattern="\d{4}-\d{2}-\d{2}"  // Ensures correct format
          required
        />
      </div>
      {error && <div className="text-sm font-medium text-destructive">{error}</div>}
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Creating account..." : "Create account"}
      </Button>
    </form>
  )
}

