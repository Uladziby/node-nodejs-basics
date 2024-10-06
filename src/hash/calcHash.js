/*
 implement function that calculates SHA256 hash for 
 file fileToCalculateHashFor.txt and
  logs it into console as hex using Streams API
*/

import crypto from "crypto";
const calculateHash = async () => {
  const path = "src/fs/files/fileToCalculateHashFor.txt";
  const hash = crypto.createHash("sha256").update(path).digest("hex");

  console.log(hash);
};

await calculateHash();
