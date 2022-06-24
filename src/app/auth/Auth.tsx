import React from 'react'
import { authService } from '@app/services'
import { Component, ReactNode } from 'react'
import LiarniSplashScreen from '@liarni/core/LiarniSplashScreen'

class Auth extends Component<{children?: ReactNode}> {
	state = {
		waitAuthCheck: true,
		changeAnimation: false
	}

	async componentDidMount() {
		console.log(this.state.waitAuthCheck)
		try {
			await authService.login('jdronaldo2000@gmail.com', '12345678')

			setTimeout(() => {
				this.setState({ changeAnimation: true })
			}, 1250)

			setTimeout(() => {
				this.setState({waitAuthCheck: false})
			}, 1500)
		} catch (err) {
			console.log(err)

			setTimeout(() => {
				this.setState({waitAuthCheck: false})
			}, 2000)
		}
	}

	render(): ReactNode {
		return this.state.waitAuthCheck ? <LiarniSplashScreen changeAnimation={this.state.changeAnimation} /> : <>{this.props.children}</>
	}
}

export default Auth
