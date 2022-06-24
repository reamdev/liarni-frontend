import { RootState, useAppDispatch, useAppSelector } from '@store'
import { login, loginError, logout } from '@store/auth'
import React from 'react'

const AppTest = () => {
	const auth = useAppSelector((state: RootState) => state.auth)
	const dispatch = useAppDispatch()

	return (
		<div>
			<p>
				Auth: {auth.isAuthenticated.toString()} | {auth.error}
			</p>
			<button onClick={() => dispatch(login())}>Login</button>
			<button onClick={() => dispatch(loginError(['Login Error']))}>Login Error</button>
			<button onClick={() => dispatch(logout())}>Logout</button>
		</div>
	)
}

export default AppTest