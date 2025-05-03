const parseArgs = () => {
    const args = process.argv.slice(2)
    const parsedArgs = []
    args.forEach((arg, i, arr) => {
      if(arg.startsWith('--')) {
        const key = arg.slice(2)
        const value = arr[i+1]
        parsedArgs.push(`${key} is ${value}`)
      }
 
    })

    console.log(parsedArgs.join(', '))

};

parseArgs();