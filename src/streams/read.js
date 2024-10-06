import fs from "fs";

const read = async () => {
  const path = "src/fs/files/fileToRead.txt";
  const stream = fs.createReadStream(path);

  stream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
