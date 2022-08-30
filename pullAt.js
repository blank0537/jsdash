const pullAt = (arr, idxs) =>
    idxs
        .reverse()
        .map(idx => arr.splice(idx, 1)[0])
        .reverse();
module.exports = pullAt;