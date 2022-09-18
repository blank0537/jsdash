const size = (collection) => Array.isArray(collection) ? collection.length : Object.keys(collection).length;
module.exports = size;