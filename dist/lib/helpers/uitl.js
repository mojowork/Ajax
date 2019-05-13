"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toString = Object.prototype.toString;
function isObject(obj) {
    return toString.call(obj) === '[object Object]';
}
exports.isObject = isObject;
function isDate(date) {
    return toString.call(date) === '[object Date]';
}
exports.isDate = isDate;
//# sourceMappingURL=uitl.js.map