import LiarniUtils from '@liarni/utils/LiarniUtils'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { Token } from 'services'

class AuthService extends LiarniUtils.EventEmiter {
	init() {
		this.setInterceptors()
		this.handleAuthentication()
	}

	private setInterceptors() {
		axios.interceptors.response.use(
			response => {
				return response
			},
			err => {
				return new Promise(() => {
					if (err.response.status === 401 && err.config) {
						this.setSession(null)
					}
					throw err
				})
			}
		)
	}

	private handleAuthentication = () => {
		const access_token = this.getAccessToken()

		if (!access_token) {
			this.emit('onNoAccessToken')
			return
		}

		if (this.isAuthTokenValid(access_token)) {
			this.setSession(access_token)
			this.emit('onAutoLogin', true)
		} else {
			this.setSession(null)
			this.emit('onAutoLogout', 'El token a expirado')
		}
	}

	public login = (email: string, password: string) => {
		return new Promise((resolve, reject) => {
			axios.post('http://localhost:8000/auth/login', {
				email,
				password
			})
				.then(response => {
					if (response.data) {
						resolve(response.data)
					} else {
						reject(response.data)
					}
				})
				.catch(err => {
					reject(new Error('Error al iniciar sesión'))
					console.log(err)
				})
		})
	}

	private setSession = (access_token: string | null) => {
		if (access_token !== null) {
			localStorage.setItem('jwt_access_token', access_token)

			axios.defaults.headers.common.Authorization = `Bearer ${access_token}`
		} else {
			localStorage.removeItem('jwt_access_token')
			delete axios.defaults.headers.common.Authorization
		}
	}

	public logout = () => {
		this.setSession(null)
	}

	private isAuthTokenValid = (access_token: string | null) => {
		if (!access_token) {
			return false
		}

		const decoded = jwtDecode<Token>(access_token)
		const currentTime = Date.now() / 1000
		if (decoded.exp < currentTime) {
			console.warn('El Token de Acceso a expirado')
			return false
		}

		return true
	}

	private getAccessToken = () => {
		return window.localStorage.getItem('jwt_access_token')
	}
}

const instance = new AuthService()

export default instance
