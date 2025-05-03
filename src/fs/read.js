import fs from "fs";
const read = async () => {
  // Write your code here
  const path = "src/fs/files/fileToRead.txt";

  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(err, "FS operation failed");
    } else {
      console.log(data);
    }
  });
};

await read();
