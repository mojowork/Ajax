import { HttpRequestConfig } from './types';
import { buildUrl } from './helpers/url';

function http(config: HttpRequestConfig): void {
  const {url, methed='GET', params=null, data=null} = config;
  let buildedUrl = url;
  if (methed === 'GET'){
    buildedUrl = buildUrl(url, params);
  }
  const xhr = new XMLHttpRequest();
  xhr.open(methed, buildedUrl, true);
  xhr.send(data);
}

export default http;
