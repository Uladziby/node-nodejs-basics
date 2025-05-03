import fs from "fs";

const rename = async () => {
  // Write your code here
  const oldNmae = "src/fs/files/wrongFilename.txt";
  const newName = "src/fs/files/properFilename.md";

  fs.rename(oldNmae, newName, (err) => {
    if (err) {
      console.error(err, "FS operation failed");
    } else {
      console.dir("File renamed successfully");
    }
  });
};

await rename();
