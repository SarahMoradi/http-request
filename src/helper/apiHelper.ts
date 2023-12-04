import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const token = localStorage.getItem('token') || '#Fake Token'

const headers: Readonly<Record<string, string | boolean>> = {
	Accept: 'application/json',
	'Content-Type': 'application/json; charset=utf-8',
	'Access-Control-Allow-Credentials': true,
	'X-Requested-With': 'XMLHttpRequest',
};

const injectToken = (
	config: AxiosRequestConfig<string>
): string | AxiosRequestConfig<string> => {
	try {
		if (token && config.headers) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	} catch (error) {
		throw new Error(String(error));
	}
};

class Api {

	private instance: AxiosInstance | null = null;
	readonly baseURL = import.meta.env.BASE_API_URL;

	http(): AxiosInstance {
		return this.instance != null ? this.instance : this.initHttp();
	}

	initHttp() {
		const http = axios.create({
			baseURL: this.baseURL,
			headers,
		});
		http.interceptors.request.use(
			(config) => injectToken(config),
			(error) => Promise.reject(error)
		);
		http.interceptors.response.use(
			(response: AxiosResponse) => {
				return response.data;
			},
			(error) => {
				this.handleError(error);
				throw error;
			}
		);
		this.instance = http;
		return http;
	}

	private handleError(error: AxiosError) {
		if (error.response) {
			if (error.response.data) throw Error('Something went wrong!')
			if (error.response.status === 401) throw Error('Error 401!')
            else throw Error('Something went wrong!')
		}
	}
}

const api = new Api().initHttp();
export { api };