const take = (arr, qty = 1) => [...arr].splice(0, qty);
module.exports = take;