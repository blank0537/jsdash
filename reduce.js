const reduce = (arr, func, accumulator, isReverse=false) => {
    if (Array.isArray(arr)) {
        const udpatedArr = isReverse ? [...arr].reverse() : [...arr];
        return udpatedArr.reduce((result, value, idx) => func(result, value, idx), accumulator);
    };
    const values = Object.values(arr);
    const keys = Object.keys(arr);
    return values.reduce((result, value, idx) => func(result, value, keys[idx]), accumulator)
};
module.exports = reduce;