import { isObject } from './uitl'
// 设置请求头
export function processHeaders(headers: any = {}, data: any): any {
  if (!data) delete headers['Content-Type']
  if (isObject(data) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json; charset=utf-8'
  }
  return headers
}

// 格式化响应头
export function parseHeaders(header: string): any {
  return (header || '').split('\r\n').reduce((reducer, line) => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if (key) reducer[key] = val.trim()
    return reducer
  }, Object.create(null))
}
