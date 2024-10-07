import zlib from "zlib";
import fs from "fs";

const compress = async () => {
  const path = "src/zip/files/fileToCompress.txt";

  const stream = fs.createReadStream(path);

  const outputFile = fs.createWriteStream("src/zip/files/archive.gz");

  const gzip = zlib.createGzip();

  stream.pipe(gzip).pipe(outputFile);
};

await compress();
