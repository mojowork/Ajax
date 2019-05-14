import { isObject } from './uitl'
// 设置请求头
export function processHeaders(headers: any = {}, data: any): any {
  if (!data) delete headers['Content-Type']
  if (isObject(data) && !headers['Content-Type']) {
    headers['Content-Type'] = 'application/json; charset=utf-8'
  }
  return headers
}
