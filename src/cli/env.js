const parseEnv = () => {
  const env = process.env;
  const prefix = "RSS_";
  const keys = Object.keys(env);

  keys.forEach((key) => {
    if (key.startsWith(prefix)) {
      console.log(`${key}=${env[key]}`);
    }
  });
};

parseEnv();
