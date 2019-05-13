"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = require("./helpers/url");
function http(config) {
    var url = config.url, _a = config.methed, methed = _a === void 0 ? 'GET' : _a, _b = config.params, params = _b === void 0 ? null : _b, _c = config.data, data = _c === void 0 ? null : _c;
    var buildedUrl = url;
    if (methed === 'GET') {
        buildedUrl = url_1.buildUrl(url, params);
    }
    var xhr = new XMLHttpRequest();
    xhr.open(methed, buildedUrl, true);
    xhr.send(data);
}
exports.default = http;
//# sourceMappingURL=http.js.map