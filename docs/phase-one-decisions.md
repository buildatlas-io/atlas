# Atlas Phase One Decisions

## Decision 1: Atlas starts as a CLI-first tool

Atlas Phase One will start as a command-line tool.

Reason:
A CLI is the fastest way to build a real coding agent that works directly inside local development projects. It avoids wasting time on UI too early and keeps the focus on the core agent runtime, tools, context, and safety.

## Decision 2: Atlas will be local-first

Atlas should run against the developer’s local project directory.

Reason:
Builders should keep control over their code, files, and workflow.

## Decision 3: Atlas v0.1 will focus on planning before editing

The first working version should understand a task, inspect the project, identify relevant files, and produce a plan before making changes.

Reason:
Safe planning is the foundation of a trustworthy coding agent.

## Decision 4: Atlas will ask before file changes

Atlas should never modify files silently.

Reason:
Developer trust is more important than automation speed.

## Decision 5: Atlas will be built through real daily usage

Every feature should come from a real development problem.

Reason:
Atlas should avoid fake demos, empty hype, and AI slop.