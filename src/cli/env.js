const parseEnv = () => {
    const envVars = process.env

    const res = Object.keys(envVars).filter(variable => variable.startsWith('RSS_')).map(variable => `${variable}=${envVars[variable]}`).join('; ')
    console.log(res)
};

parseEnv();