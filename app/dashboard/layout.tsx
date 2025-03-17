import type React from "react"
import { redirect } from "next/navigation"
import { getUserFromSession } from "@/lib/auth"
import { DashboardNav } from "@/components/dashboard-nav"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getUserFromSession()

  if (!user) {
    redirect("/login")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <DashboardNav user={user} />
      <div className="flex-1">{children}</div>
    </div>
  )
}

