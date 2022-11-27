export {};

Object.prototype.removeEmptyProperties = function(this: Object) {
    return Object.fromEntries(Object.entries(this).filter(([_, v]) => v != ''));
};