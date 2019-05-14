import { isObject } from './uitl'
// post请求
export function stringifyData(data: any): any {
  return isObject(data) ? JSON.stringify(data) : data
}
