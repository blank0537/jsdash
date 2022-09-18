const sortBy = ( key, cb ) => {
    if ( !cb ) cb = () => 0;
    return (a,b) => String(a[key]).localeCompare(String(b[key])) === 0 ? cb(a,b) : String(a[key]).localeCompare(String(b[key]));
};
const sortByDesc = ( key, cb ) => {
    if ( !cb ) cb = () => 0;
    return (b,a) => String(a[key]).localeCompare(String(b[key])) === 0 ? cb(b,a) : String(a[key]).localeCompare(String(b[key]));
};
const orderBy = (collection, keys, orders=[] ) => {
    let cb = () => 0;
    keys.reverse();
    orders.reverse();
    for ( const [i, key] of keys.entries() ) {
        const order = orders[i] || 'asc';
        if ( order == 'asc' )
            cb = sortBy( key, cb );
        else if ( order == 'desc' )
            cb = sortByDesc( key, cb );
        else
            throw new Error( `Unsupported order "${order}"` );
    }
    return collection.concat().sort(cb);
};
module.exports = orderBy;