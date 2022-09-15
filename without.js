const without = (arr, ...args) => arr.filter(item => !args.includes(item));
module.exports = without;