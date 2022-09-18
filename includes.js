const isObject = require('./isObject');
const includes = (collection, value, fromIndex=0) => {
    const newCollection = isObject(collection) ? Object.values(collection) : collection.slice(fromIndex);
    return newCollection.includes(value);
};
module.exports = includes;