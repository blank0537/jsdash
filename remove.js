const remove = (array, iteratee) => {
    // in order to not mutate the original array until the very end
    // we want to cache the indexes to remove while preparing the result to return
    const toRemove = []
    const result = array.filter((item, i) => iteratee(item) && toRemove.push(i))

    // just before returning, we can then remove the items, making sure we start
    // from the higher indexes: otherwise they would shift at each removal
    toRemove.reverse().forEach(i => array.splice(i, 1))
    return result
};
module.exports = remove;