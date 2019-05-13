"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uitl_1 = require("./uitl");
function buildUrl(url, params) {
    // 如果没有参数，直接返回url
    if (!params)
        return url;
    // 有对象参数，序列化成一个字符串
    var serializedParams = Object.keys(params).reduce(function (partial, key) {
        var value = params[key];
        switch (true) {
            case value == null: // 空值忽略  null、undefined
                break;
            case Array.isArray(value): // 值为数组  foo[]=bar&foo[]=baz'
                var arrStr = value.reduce(function (str, item) {
                    return str + "&" + key + "[]=" + item;
                }, '');
                partial = "" + partial + arrStr;
                break;
            case uitl_1.isObject(value): // 值为对象 对象需要encode 
                var objStr = encodeURIComponent(value);
                partial = partial + "&" + key + "=" + objStr;
                break;
            case uitl_1.isDate(value): // 值为 Date 类型 Date.toISOString()操作
                var dateStr = value.toISOString();
                partial = partial + "&" + key + "=" + dateStr;
                break;
            default:
                partial = partial + "&" + key + "=" + value;
                break;
        }
        return partial;
    }, '');
    if (url.indexOf('#') !== -1)
        url = url.substr(0, url.indexOf('#')); // 去除哈希值
    return url.indexOf('?') !== -1
        ? "" + url + serializedParams
        : url + "?" + serializedParams.substr(1);
}
exports.buildUrl = buildUrl;
//# sourceMappingURL=url.js.map