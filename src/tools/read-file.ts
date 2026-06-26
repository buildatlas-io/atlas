import { readFile as readFileFromDisk } from "node:fs/promises";
import { resolve } from "node:path";

export async function readFile(filePath: string): Promise<string> {
  const absolutePath = resolve(process.cwd(), filePath);

  return readFileFromDisk(absolutePath, "utf-8");
}