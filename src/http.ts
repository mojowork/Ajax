import { HttpRequestConfig, HttpResponse, HttpPromise } from './types'
import { buildUrl } from './helpers/url'
import { stringifyData, parseData } from './helpers/data'
import { processHeaders, parseHeaders } from './helpers/headers'

function http(config: HttpRequestConfig): HttpPromise {
  return new Promise(resolve => {
    // 处理Url所带的参数
    config.url = buildUrl(config.url, config.params)
    // 处理Headers 特别是Post请求所带的数据的编码格式问题
    config.headers = processHeaders(config.headers, config.data)
    config.data = stringifyData(config.data)
    const { url, method = 'GET', responseType, headers, data = null } = config
    const xhr = new XMLHttpRequest()
    if (responseType) xhr.responseType = responseType
    xhr.open(method, url, true)
    Object.keys(headers).forEach(key => {
      xhr.setRequestHeader(key, headers[key])
    })
    xhr.send(data)
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        // readyState===4, 意味着请求完成
        const responseHeaders = xhr.getAllResponseHeaders()
        const responseData =
          responseType && responseType !== 'text'
            ? xhr.response
            : xhr.responseText
        const response: HttpResponse = {
          data: parseData(responseData),
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(responseHeaders),
          config,
          request: xhr
        }
        resolve(response)
      }
    }
  })
}

export default http
