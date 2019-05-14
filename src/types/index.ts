/*
 * 字符串字面量类型 约束请求方法类型
 */
export type Methods =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'

/*
 * HttpRequestConfig
 */
export interface HttpRequestConfig {
  url: string
  method?: Methods
  params?: any
  data?: any
  headers?: any
}
