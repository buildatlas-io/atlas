#!/usr/bin/env node

import { Command } from "commander";
import { listFiles } from "../tools/list-files.js";
import { readFile } from "../tools/read-file.js";

const program = new Command();

program
  .name("atlas")
  .description("Open developer infrastructure for builders.")
  .version("0.1.0");

program
  .command("run")
  .description("Run Atlas with a developer task.")
  .argument("<task>", "The task Atlas should receive.")
  .action(async (task: string) => {
    const files = await listFiles();

    console.log("");
    console.log("Atlas v0.1");
    console.log("");
    console.log("Task:");
    console.log(task);
    console.log("");
    console.log("Status:");
    console.log("Received");
    console.log("");
    console.log("Runtime:");
    console.log("Initialized");
    console.log("");
    console.log("Project Files:");

    for (const file of files) {
      console.log(`- ${file}`);
    }

    const readmeContent = await readFile("README.md");
    const readmePreview = readmeContent.split("\n").slice(0, 5).join("\n");

    console.log("");
    console.log("README Preview:");
    console.log(readmePreview);
  });

program.parse(process.argv);