export declare type Metheds = 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE';
export interface HttpRequestConfig {
    url: string;
    methed?: Metheds;
    params?: any;
    data?: any;
}
