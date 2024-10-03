import fs from "fs";

const create = async () => {
  const content = "I am fresh and young";

  const path = "src/fs/files/fresh.txt";

  fs.writeFile(path, content, (err) => {
    if (err) {
      console.error("FS operation failed");
    } else {
      console.dir("File created successfully");
    }
  });
};

await create();
