import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { writeFile } from "node:fs/promises";

const create = async () => {
  const content = "I am fresh and young";
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const filePath = join(__dirname, "files", "fresh.txt");

  try {
    await writeFile(filePath, content, { encoding: "utf-8", flag: "wx" });
  } catch {
    throw new Error("FS operation failed");
  }
};

await create();
