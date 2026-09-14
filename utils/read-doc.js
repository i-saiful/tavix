import { readFile } from "node:fs/promises";
import path from "node:path";

export function readDoc(fileName) {
  return readFile(path.join(process.cwd(), "content/docs", fileName), "utf8");
}
