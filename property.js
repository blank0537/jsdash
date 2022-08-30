const get = require('./get');
const property = (path) => {
    return (e) => get(e, path, undefined);
};
module.exports = property;