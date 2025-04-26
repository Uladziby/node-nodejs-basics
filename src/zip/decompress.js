import fs from "fs";
import zlib from "zlib";

const decompress = async () => {
  const path = "src/zip/files/archive.gz";

  const inputFile = fs.createReadStream(path);
  const outputFile = fs.createWriteStream("src/zip/files/fileToCompress.txt");

  inputFile.pipe(zlib.createUnzip()).pipe(outputFile);
};

await decompress();
