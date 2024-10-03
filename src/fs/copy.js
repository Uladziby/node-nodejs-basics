import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const sourceFolder = "/files";
  const destinationFolder = "/files_copy";

  console.dir(__dirname + sourceFolder);

  try {
    if (!fs.promises.access(__dirname + destinationFolder)) {
      fs.promises.mkdir(__dirname + destinationFolder, (err) => {
        if (err) {
          console.error(err, "Error creating destination folder");
        } else {
          console.dir("Destination folder created successfully");
        }
      });
    }
  } catch (err) {
    console.error(err, "Error creating destination folder2");
  }
  /* 
  const items = await fs.readdir(sourceFolder, {
    withFileTypes: true,
  });
  console.dir(items); */
};

await copy();
