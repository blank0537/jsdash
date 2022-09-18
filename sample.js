const shuffle = require('./shuffle');
const sample = (collection, n = 1) => {
    const result = shuffle(collection).slice(0, n);
    return n > 1 ? result : result[0];
};
module.exports = sample;