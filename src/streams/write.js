import fs from "fs";

const write = async () => {
  const path = "src/streams/files/fileToWrite.txt";

  const writableStream = fs.createWriteStream(path);

  process.stdin.on("readable", () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
      process.stdout.write(`data: ${chunk}`);
    }
  });

  process.stdin.on("data", (data) => {
    console.log(`You typed ${data.toString()}`);
    process.exit();
  });

  writableStream.on("finish", () => {
    console.log("Data successfully written to fileToWrite.txt");
  });

  process.stdin.on("end", () => {
    writableStream.end();
  });
};

await write();
