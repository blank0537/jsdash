const map = (collection, iteratee) => {
    let result = null;
    if(Array.isArray(collection)){
        result = collection.map((item, index) => typeof iteratee !== 'function' ? item[iteratee] : iteratee(item, index));
    }else {
        const keys = Object.keys(collection);
        const values = Object.values(collection);
        result = values.map((x,i) => iteratee(x, keys[i]));
    };
    return result;
};
module.exports = map;