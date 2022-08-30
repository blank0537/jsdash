const pull = (arr, ...args) => arr.filter(x => !args.includes(x));
module.exports = pull;