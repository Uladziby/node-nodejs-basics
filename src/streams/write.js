import fs from "fs";
import { join } from "path";

const dirname = import.meta.dirname;

const write = async () => {
  const path = join(dirname, "files", "fileToWrite.txt");

  const writableStream = fs.createWriteStream(path);

  process.stdin.pipe(writableStream);
};

await write();
