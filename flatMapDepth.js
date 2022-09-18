const flatMap = require('./flatMap');
const flatMapDepth = (arr, op, depth=1) => {
    const flatted = arr.map(x => op(x));
    for (let i = 0; i < depth; i++) {
        const data = flatted[i];
        if (Array.isArray(data)) {
            return flatMapDepth(flatMap(arr, op), x => x, depth - 1)
        }
    };
    return flatted;
};
module.exports = flatMapDepth;