var toString = Object.prototype.toString;
function isObject(obj) {
    return toString.call(obj) === '[object Object]';
}
function isDate(date) {
    return toString.call(date) === '[object Date]';
}

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
            case isObject(value): // 值为对象 对象需要encode 
                var objStr = encodeURIComponent(value);
                partial = partial + "&" + key + "=" + objStr;
                break;
            case isDate(value): // 值为 Date 类型 Date.toISOString()操作
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

function http(config) {
    var url = config.url, _a = config.methed, methed = _a === void 0 ? 'GET' : _a, _b = config.params, params = _b === void 0 ? null : _b, _c = config.data, data = _c === void 0 ? null : _c;
    var buildedUrl = url;
    if (methed === 'GET') {
        buildedUrl = buildUrl(url, params);
    }
    var xhr = new XMLHttpRequest();
    xhr.open(methed, buildedUrl, true);
    xhr.send(data);
}

export default http;
//# sourceMappingURL=http.es5.js.map
