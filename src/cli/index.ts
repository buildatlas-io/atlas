#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
  .name("atlas")
  .description("Open developer infrastructure for builders.")
  .version("0.1.0");

program
  .command("run")
  .description("Run Atlas with a developer task.")
  .argument("<task>", "The task Atlas should receive.")
  .action((task: string) => {
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
  });

program.parse(process.argv);