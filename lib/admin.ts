import fs from "fs"
import path from "path"

// Path to users.json file
const usersFilePath = path.join(process.cwd(), "data/users.json")

// Type definitions
type User = {
  user_id: string
  name: string
  email: string
  password: string
  dob: string
  age: number
}

// Get all users
export async function getAllUsers(): Promise<User[]> {
  try {
    // Check if file exists
    if (!fs.existsSync(usersFilePath)) {
      return []
    }

    // Read and parse the file
    const data = fs.readFileSync(usersFilePath, "utf8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading users.json:", error)
    return []
  }
}

