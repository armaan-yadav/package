#!/usr/bin/env node
import { execSync } from "child_process";
import path from "path";
import fs from "fs";

// GitHub repository URL
const repoUrl = "https://github.com/armaan-yadav/react-ts-tail-shadkit-template";

// Get project name from CLI arguments
const projectName = process.argv[2] || "my-app";
const projectPath = path.join(process.cwd(), projectName);

console.log(`🚀 Creating a new project: ${projectName}`);

try {
  // Clone the repository
  execSync(`git clone ${repoUrl} ${projectName}`, { stdio: "inherit" });

  // Change directory and remove Git history
  process.chdir(projectPath);
  fs.rmSync(".git", { recursive: true, force: true });

  console.log("📦 Installing dependencies...");
  execSync(`npm install`, { stdio: "inherit" });

  console.log("🚀 Starting development server...");
  execSync(`npm run dev`, { stdio: "inherit" });

  console.log(`✅ Project setup complete!`);
} catch (error) {
  console.error("❌ Error:", error.message);
  process.exit(1); // Exit with error code
}