# Atlas Agent Runtime Flow v0.1

## Purpose

This document defines the first runtime flow for Atlas Agent.
The runtime flow explains how Atlas receives a developer request, understands the project, creates a plan, proposes actions, asks for confirmation, and summarizes the result.

## Core Principle

Atlas should be understandable before it becomes autonomous.

The developer should always know:

- What Atlas understood
- What Atlas inspected
- What Atlas plans to do
- What files may change
- What risks exist
- What happened after execution

## Runtime Flow

### Step 1: Receive User Request

Atlas receives a task from the terminal.

Example:

```bash
atlas run "Add validation to the login form"
```

Atlas stores the raw request as the current task.

### Step 2: Detect Project Context

Atlas inspects the current working directory.

It should identify:

- Project name
- Package manager
- Main framework
- Important folders
- Config files
- Source directory
- Test setup if available

### Step 3: Understand the Task

Atlas converts the user request into a structured task understanding.

It should produce:

- Task summary
- Expected outcome
- Unknowns
- Possible affected areas
- Risk level

### Step 4: Select Relevant Files

Atlas identifies files that may be relevant to the task.

It should not load the whole codebase.

It should start with:

- File tree
- Config files
- Package files
- Files matching task keywords
- Common entry points

### Step 5: Create Plan

Atlas creates a step-by-step implementation plan.

The plan should include:

- Files to inspect
- Files likely to change
- Proposed changes
- Validation steps
- Risks
- Questions for the developer if needed

### Step 6: Ask for Confirmation

Before making changes, Atlas asks the developer to approve the plan.

Atlas should show:

- What it wants to do
- Why it wants to do it
- Which files may change
- Risk level

### Step 7: Execute Approved Action

If approved, Atlas performs the next safe action.

In early v0.1, execution can be limited to:

- Reading files
- Producing proposed edits
- Showing diffs
- Asking before writing

### Step 8: Observe Result

Atlas observes what happened after the action.

Examples:

- File read successfully
- Command completed
- Error occurred
- Diff created
- Test failed

### Step 9: Continue or Stop

Atlas decides whether to continue, ask another question, or stop.

Atlas should stop when:

- The task is complete
- Developer approval is required
- Risk is too high
- Context is insufficient
- An error needs human decision

### Step 10: Final Summary

Atlas provides a final summary.

It should include:

- What it understood
- What it inspected
- What changed
- What did not change
- Risks or follow-ups
- Suggested next step

## MVP v0.1 Runtime Limitation

Atlas v0.1 should not attempt full autonomy.

The first version should prioritize:

- Clear planning
- Safe file access
- Human confirmation
- Useful summaries
- Developer trust

## Success Criteria

The runtime flow is successful when Atlas can:

- Accept a task
- Inspect a local project
- Identify relevant files
- Produce a useful plan
- Ask before risky actions
- Summarize clearly