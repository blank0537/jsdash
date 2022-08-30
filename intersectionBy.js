const intersectionBy = (arr, ...args) => {
    let iteratee = args.pop()
    if (typeof iteratee === 'string') {
        const prop = iteratee
        iteratee = item => item[prop]
    };
    return arr.filter(item1 =>
        args.every(arr2 => arr2.find(item2 => iteratee(item1) === iteratee(item2)))
    );
};
module.exports = intersectionBy;