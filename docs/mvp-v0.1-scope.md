# Atlas MVP v0.1 Scope

## Goal

Atlas MVP v0.1 is the first working version of Atlas Agent.

The goal is not to build a full coding agent yet. The goal is to prove that Atlas can understand a local project, create a useful plan, and safely guide the developer through the first steps of a coding task.

## Mission Connection

Atlas exists to expand what is possible and earn the world's attention by building world-class open developer infrastructure.

MVP v0.1 is the first small step toward that mission.

## Primary User

The primary user for MVP v0.1 is Shady.

Atlas will be tested daily on real projects, real codebases, and real development tasks.

## MVP v0.1 Must Do

Atlas v0.1 must be able to:

- Accept a user task from the terminal
- Read the current project directory
- Understand the basic project structure
- Identify relevant files for the task
- Produce a clear implementation plan
- Explain what files may need to change
- Ask for confirmation before any file modification
- Summarize its reasoning in a developer-friendly way
- Produce a final task summary

## MVP v0.1 Should Not Do Yet

Atlas v0.1 will not:

- Train a custom AI model
- Build a full IDE
- Run fully autonomous coding sessions
- Modify files without confirmation
- Support multiple users
- Support cloud sync
- Support plugins
- Have a marketplace
- Have complex memory
- Replace existing coding tools immediately

## First User Flow

1. Developer opens a project in the terminal.
2. Developer runs Atlas with a task.
3. Atlas scans the project structure.
4. Atlas identifies relevant files.
5. Atlas creates a clear plan.
6. Atlas shows what it would change.
7. Developer approves or rejects.
8. Atlas gives a final summary.

## Example Command

```bash
atlas run "Add validation to the login form"