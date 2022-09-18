const groupBy = (arr, criteria) => {
	return arr.reduce((obj, item) => {
		let key = typeof criteria === 'function' ? criteria(item) : item[criteria];
		if (!obj.hasOwnProperty(key)) {
			obj[key] = [];
		};
		obj[key].push(item);
		return obj;
	}, {});
};
module.exports = groupBy;