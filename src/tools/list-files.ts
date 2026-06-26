import { readdir } from "node:fs/promises";
import { join } from "node:path";

const IGNORED_DIRECTORIES = new Set([
  "node_modules",
  ".git",
  "dist",
  ".next",
  "coverage",
]);

export async function listFiles(
  directory: string = process.cwd(),
  baseDirectory: string = directory,
): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });

  const files: string[] = [];

  for (const entry of entries) {
    if (IGNORED_DIRECTORIES.has(entry.name)) {
      continue;
    }

    const fullPath = join(directory, entry.name);
    const relativePath = fullPath.replace(`${baseDirectory}/`, "");

    if (entry.isDirectory()) {
      const nestedFiles = await listFiles(fullPath, baseDirectory);
      files.push(...nestedFiles);
      continue;
    }

    if (entry.isFile()) {
      files.push(relativePath);
    }
  }

  return files;
}