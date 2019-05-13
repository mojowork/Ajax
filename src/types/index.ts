
/*
 * 字符串字面量类型 约束请求方法类型
 */
export type Metheds = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE';


/*
 * HttpRequestConfig 
 */
export interface HttpRequestConfig {
  url: string
  methed?: Metheds
  params?: any
  data?:any
}