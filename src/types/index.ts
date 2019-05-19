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
  responseType?: XMLHttpRequestResponseType
}

/*
 * HttpResponseConfig
 */
export interface HttpResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: HttpRequestConfig
  request: any
}

/*
 * 函数返回的是一个 Promise 对象
 */
export interface HttpPromise extends Promise<HttpResponse> {}
