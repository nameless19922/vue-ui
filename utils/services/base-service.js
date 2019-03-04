import axios from 'axios';

export default class BaseSerive {
  constructor(endpoint, headers = {}) {
    this.endpoint = endpoint;
    this.service = axios.create( { headers });
  }

  redirectTo(path) {
    if (typeof path === 'string' && path.length) {
      window.location.href = path;
    }
  }

  request(method, payload = {}) {
    return this.service.request({
      method: method.toUpperCase(),
      url: this.endpoint,
      responseType: 'json',
      data: payload
    });
  }

  get(payload = {}) {
    return this.request('GET', payload);
  }

  post(payload = {}) {
    return this.request('POST', payload);
  }
}