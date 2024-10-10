import { Worker } from "worker_threads";

const performCalculations = async () => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./src/wt/worker.js");

    worker.onmessage = (message) => {
      console.log("Received from worker:", message.data);
      resolve(message.data);
    };

    worker.onerror = (error) => {
      reject(error);
    };

    worker.postMessage(10);
  });
};

await performCalculations();
