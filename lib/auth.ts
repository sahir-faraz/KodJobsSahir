import { cookies } from "next/headers"
import fs from "fs"
import path from "path"

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

// Get all users
function getUsers(): User[] {
  try {
    if (!fs.existsSync(usersFilePath)) {
      return []
    }
    const data = fs.readFileSync(usersFilePath, "utf8")
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}

// Get user from session
export async function getUserFromSession() {
  const sessionId = cookies().get("session")?.value

  if (!sessionId) {
    return null
  }

  const users = getUsers()
  const user = users.find((user) => user.user_id === sessionId)

  if (!user) {
    return null
  }

  // Don't return the password
  const { password, ...userWithoutPassword } = user
  return userWithoutPassword
}

