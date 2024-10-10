import crypto from "crypto";

const calculateHash = async () => {
  const path = "src/fs/files/fileToCalculateHashFor.txt";
  const hash = crypto.createHash("sha256").update(path).digest("hex");

  console.dir(hash);
};

await calculateHash();
