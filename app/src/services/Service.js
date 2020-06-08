const doRequest = (url, method, options) => {
  options = options || {};

  return fetch(url + buildParams(options.params), {
    method: method,
    headers: buildHeaders(options.headers),
    body: buildBody(options.body),
  })
    .then(async res => {
      if (options.returnRes) {
        return res;
      }
      if (res.ok || res.stattus === 200) {
        return await res.json();
      }
      console.error(res);
      return res.json();
    })
    .catch(res => {
      console.error(res);
      return Promise.reject(res);
    });
};

const buildParams = paramsObj => {
  if (!paramsObj) {
    return '';
  }
  let params = '?';
  for (let [key, value] of Object.entries(paramsObj)) {
    if (!!value || value === 0 || value === false) {
      params += `${key}=${value}&`;
    }
  }
  return params.substring(0, params.length - 1);
};

const buildBody = bodyObj => {
  if (!bodyObj) {
    return undefined;
  }
  for (let [key, value] of Object.entries(bodyObj)) {
    if (!value && value !== 0 && value !== false) {
      delete bodyObj[key];
    }
  }
  return JSON.stringify(bodyObj);
};

const buildHeaders = headersObj => {
  if (!headersObj) {
    return Service.headers;
  }
  let headers = Service.headers;
  for (let [key, value] of Object.entries(headersObj)) {
    headers.append(key, value);
  }
  return headers;
};

export default class Service {
  static get headers() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }

  post(url, body, options) {
    return doRequest(url, 'POST', { body, ...options });
  }

  put(url, body, options) {
    return doRequest(url, 'PUT', { body, ...options });
  }

  delete(url, options) {
    return doRequest(url, 'DELETE', { ...options });
  }

  get(url, params, options) {
    return doRequest(url, 'GET', { params, ...options });
  }
}
