const flatMap = require('./flatMap');
const flatMapDeep = (arr, op) => {
    const flatted = flatMap(arr, op);
    for (let i = 0; i < flatted.length; i++) {
        const data = flatted[i];
        if (Array.isArray(data)) {
            return flatMapDeep(flatted, x => x)
        }
    };
    return flatted;
};
module.exports = flatMapDeep;