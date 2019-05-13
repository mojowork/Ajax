const toString = Object.prototype.toString;

export function isObject(obj: any) : boolean{
  return toString.call(obj) === '[object Object]';
}

export function isDate(date: any): boolean {
  return toString.call(date) === '[object Date]';
}