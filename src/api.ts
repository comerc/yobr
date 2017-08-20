import { apiUrl } from './config'

class Api {
  apiUrl: string
  prefix: string
  token: string
  constructor(options: any) {
    this.apiUrl = apiUrl
    this.prefix = ''
    if (!options) {
      return
    }
    const { token } = options
    this.token = token
  }
  getJsonHeaders() {
    return {
      Accept: 'application/json',
    }
  }
  postJsonHeaders() {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }
  setToken(token: string) {
    this.token = token
  }
  handleUnauthed(res: any) {
    if (res.status === 401) {
      return new Promise(() => ({}))
    } else {
      return res
    }
  }
  _buildQueryString(data: any) {
    return '?' + Object.keys(data).map(d => d + '=' + encodeURIComponent(data[d]))
  }
}

export class MainApi extends Api {
  constructor(options: any) {
    super(options)
    this.prefix = '/api'
  }
}
