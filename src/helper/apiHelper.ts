import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com'
const token = localStorage.getItem('token') || '#Fake Token'
class ApiService {
  private instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL,
    })
  }

  private setHeaders(withHeaders: boolean): AxiosRequestConfig {
    if (withHeaders) {
      return {
        headers: {'Content-Type': 'application/json', Authorization: `Bearer ${token}`},
      }
    }
    return {}
  }

  public get<T>(url: string, withHeaders: boolean = false): Promise<AxiosResponse<T>> {
    const headers = this.setHeaders(withHeaders)
    return this.instance.get<T>(url, headers)
  }
}

const api = new ApiService()
export {api}
