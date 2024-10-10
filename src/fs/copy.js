import { readdir, mkdir, copyFile } from "node:fs/promises";
import path, { join } from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourceFolder = "/files";
  const destinationFolder = "/files_copy";

  try {
    const [files] = await Promise.all([
      readdir(__dirname + sourceFolder),
      mkdir(__dirname + destinationFolder),
    ]);

    await Promise.all(
      files.map(async (file) => {
        const source = join(__dirname, sourceFolder, file);
        const destination = join(__dirname, destinationFolder, file);
        await copyFile(source, destination);
      })
    );
  } catch (err) {
    console.error(err, "FS operation failed");
  }
};

await copy();
