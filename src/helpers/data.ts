import { isObject } from './uitl'
// post请求,数据编码问题
export function stringifyData(data: any): any {
  return isObject(data) ? JSON.stringify(data) : data
}
// 响应的数据是字符串时，尝试解析
export function parseData(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch {
      // Nothing To Do
    }
    return data
  }
}
