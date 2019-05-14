import { HttpRequestConfig } from './types'
import { buildUrl } from './helpers/url'
import { stringifyData } from './helpers/data'
import { processHeaders } from './helpers/headers'

function http(config: HttpRequestConfig): void {
  config.url = buildUrl(config.url, config.params)
  config.headers = processHeaders(config.headers, config.data)
  config.data = stringifyData(config.data)
  const { url, method = 'GET', headers, data = null } = config
  const xhr = new XMLHttpRequest()
  xhr.open(method, url, true)
  Object.keys(headers).forEach(key => {
    xhr.setRequestHeader(key, headers[key])
  })
  xhr.send(data)
}

export default http
