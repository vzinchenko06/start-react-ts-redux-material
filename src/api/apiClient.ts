import { HttpInterface } from './httpAdapter'

export default class ApiClient {
  constructor(protected http: HttpInterface) {}

  setToken(token: string) {
    this.http.setBearerToken(token)
  }

  getHealthCheck() {
    return this.http.get('/health-check')
  }
}