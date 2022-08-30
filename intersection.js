const intersection = (arr, ...args) => arr.filter(item => args.every(arr => arr.includes(item)));
module.exports = intersection;