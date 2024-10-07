import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const child = spawn("node", ["src/cp/files/script.js", ...args]);

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);

  child.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  child.on("error", (err) => {
    console.error("Failed to start child process:", err);
  });

  child.on("close", (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

spawnChildProcess(["arg1", "arg2"]);
