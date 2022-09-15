const zip = (arr, ...args) => arr.map((value, idx) => [value, ...args.map(arr => arr[idx])]);
module.exports = zip;