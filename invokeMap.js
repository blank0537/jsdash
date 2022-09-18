const apply = require('./apply');
const invokeMap = (collection, path, ...args) => {
    const type = typeof path;
    return collection.reduce((result, value, idx) => {
        result[idx] = type === 'string' ? value[path]() : apply(path, value, args);
        return result;
    }, []);
};
module.exports = invokeMap;