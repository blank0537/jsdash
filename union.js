const union = (arr, ...args) => [...new Set(arr.concat(...args))];
module.exports = union;