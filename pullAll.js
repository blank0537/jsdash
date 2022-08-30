const pullAll = (arr, arr2) => arr.filter(x => !arr2.includes(x));
module.exports = pullAll;