const keyBy = (collection, iteratee) => {
    const isFunc = typeof iteratee === 'function';
    return collection.reduce((result, value) => {
        const key = !isFunc ? value[iteratee] : iteratee(value);
        result[key] = value;
        return result;
    }, {});
};
module.exports = keyBy;