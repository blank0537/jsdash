const countBy = (arr, iteratee) => arr.reduce((result, value) => {
    const key = iteratee(value);
    result[key] = !result[key] ? 1 : ++result[key];
    return result;
}, {});
module.exports = countBy;