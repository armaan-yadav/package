#!/usr/bin/env node
import { execSync } from "child_process";
import path from "path";
import fs from "fs";
import inquirer from "inquirer";

const repoUrls = {
  ts: "https://github.com/armaan-yadav/react-ts-tail-shadkit-template",
  js: "https://github.com/armaan-yadav/react-js-tail-shadkit-template",
};

const args = process.argv.slice(2);
const projectName = args.find((arg) => !arg.startsWith("-")) || "my-app";
const projectPath = path.join(process.cwd(), projectName);

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

const promptUser = async () => {
  const { template } = await inquirer.prompt([
    {
      type: "list",
      name: "template",
      message: "Select a template:",
      choices: [
        { name: "TypeScript (Recommended)", value: "ts" },
        { name: "JavaScript", value: "js" },
      ],
    },
  ]);
  return template;
};

const setupProject = async () => {
  const template = await promptUser();
  const repoUrl = repoUrls[template];

  console.log(
    `🚀 Creating project: ${projectName} (${
      template === "js" ? "JavaScript" : "TypeScript"
    })`
  );

  runCommand(`git clone ${repoUrl} ${projectName}`);

  process.chdir(projectPath);

  if (fs.existsSync(".git")) {
    fs.rmSync(".git", { recursive: true, force: true });
  }

  console.log("📦 Installing dependencies...");
  runCommand("npm install");

  console.log("🚀 Starting development server...");
  runCommand("npm run dev");
};

setupProject();
