"use server"

import { cookies } from "next/headers"
import fs from "fs"
import path from "path"
import { v4 as uuidv4 } from "uuid"
import { differenceInYears } from "date-fns"

// Type definitions
type User = {
  user_id: string
  name: string
  email: string
  password: string
  dob: string
  age: number
}

// Path to users.json file
const usersFilePath = path.join(process.cwd(), "data/users.json")

// Ensure data directory exists
function ensureDataDirectoryExists() {
  const dataDir = path.join(process.cwd(), "data")
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }

  if (!fs.existsSync(usersFilePath)) {
    fs.writeFileSync(usersFilePath, JSON.stringify([]))
  }
}

// Get all users
function getUsers(): User[] {
  ensureDataDirectoryExists()

  try {
    const data = fs.readFileSync(usersFilePath, "utf8")
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}

// Save users to file
function saveUsers(users: User[]) {
  ensureDataDirectoryExists()
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))
}

// Calculate age from date of birth
function calculateAge(dob: string): number {
  return differenceInYears(new Date(), new Date(dob))
}

// Signup action
export async function signup(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const dob = formData.get("dob") as string

  // Validate inputs
  if (!name || !email || !password || !dob) {
    return { error: "All fields are required" }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { error: "Invalid email format" }
  }

  // Validate password length
  if (password.length < 6) {
    return { error: "Password must be at least 6 characters long" }
  }

  // Validate date of birth
  const dobDate = new Date(dob)
  if (isNaN(dobDate.getTime())) {
    return { error: "Invalid date of birth" }
  }

  // Calculate age
  const age = calculateAge(dob)

  // Check if user is at least 18 years old
  if (age < 18) {
    return { error: "You must be at least 18 years old to register" }
  }

  // Get existing users
  const users = getUsers()

  // Check if email already exists
  if (users.some((user) => user.email === email)) {
    return { error: "Email already registered" }
  }

  // Create new user
  const newUser: User = {
    user_id: uuidv4(),
    name,
    email,
    password, // In a real app, you would hash this password
    dob,
    age,
  }

  // Add user to users array
  users.push(newUser)

  // Save updated users array
  saveUsers(users)

  return { success: true }
}

// Login action
export async function login(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // Validate inputs
  if (!email || !password) {
    return { error: "Email and password are required" }
  }

  // Get users
  const users = getUsers()

  // Find user by email
  const user = users.find((user) => user.email === email)

  // Check if user exists and password matches
  if (!user || user.password !== password) {
    return { error: "Invalid email or password" }
  }

  // Set session cookie
  cookies().set("session", user.user_id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
  })

  return { success: true }
}

// Logout action
export async function logout() {
  cookies().delete("session")
  return { success: true }
}

