import { readFile } from "node:fs/promises";
import path from "node:path";

export function readExample(componentName) {
  return readFile(
    path.join(process.cwd(), "example", `${componentName}.jsx`),
    "utf8",
  );
}