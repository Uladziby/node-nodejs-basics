import { unlink } from "node:fs";

const remove = async () => {
  const path = "src/fs/files/fileToRemove.txt";

  unlink(path, (err) => {
    if (err) {
      console.error(err, "FS operation failed");
    } else {
      console.dir("File deleted successfully");
    }
  });
};

await remove();
