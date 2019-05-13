import { isObject, isDate} from './uitl';

export function buildUrl(url: string, params?: any) {
  // 如果没有参数，直接返回url
  if (!params) return url;
  // 有对象参数，序列化成一个字符串
  let serializedParams: string = Object.keys(params).reduce((partial, key) => {
    const value = params[key];
    switch(true){
      case value == null:  // 空值忽略  null、undefined
        break;

      case Array.isArray(value):  // 值为数组  foo[]=bar&foo[]=baz'
        let arrStr = value.reduce((str: string, item: any) => {
          return `${str}&${key}[]=${item}`;
        }, '');
        partial = `${partial}${arrStr}`;
        break;

      case isObject(value):  // 值为对象 对象需要encode 
        let objStr = encodeURIComponent(value);
        partial = `${partial}&${key}=${objStr}`;
        break;

      case isDate(value):  // 值为 Date 类型 Date.toISOString()操作
        let dateStr = value.toISOString();
        partial = `${partial}&${key}=${dateStr}`;
        break;

        default: 
        partial = `${partial}&${key}=${value}`;
        break;

    }

    return partial;

  }, '');

  if (url.indexOf('#') !== -1) url = url.substr(0, url.indexOf('#')); // 去除哈希值

  return url.indexOf('?')!== -1
    ? `${url}${serializedParams}`
    : `${url}?${serializedParams.substr(1)}`;

}