import fs from "fs";

const list = async () => {
  const path = "src/fs/files";

  try {
    const items = await fs.promises.readdir(path, {
      withFileTypes: true,
    });

    for (const file of items) console.log(file);
  } catch (err) {
    console.error(err, "FS operation failed");
  }
};

await list();
