const parseArgs = () => {
  const args = process.argv.slice(2);
  const argsObj = {};
  for (let i = 0; i < args.length; i += 2) {
    argsObj[args[i].slice(2)] = args[i + 1];
  }
  for (const key in argsObj) {
    console.log(`${key} is ${argsObj[key]}`);
  }
};

parseArgs();
