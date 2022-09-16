const forEach = (collection, iteratee, isReverse=false) => {
    let result = null;
    const updatedCollection = isReverse ? collection.reverse() : collection;
    if(Array.isArray(updatedCollection)){
        result = updatedCollection.forEach((item, index) => iteratee(item, index));
    }else {
        const keys = Object.keys(updatedCollection);
        const values = Object.values(updatedCollection);
        result = values.forEach((x,i) => iteratee(x, keys[i]));
    };
    return result;
};
module.exports = forEach;