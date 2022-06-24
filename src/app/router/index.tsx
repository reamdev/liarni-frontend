import Login from '@app/main/apps/Login'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoginRoute from './LoginRoute'
import MainLayoutRouter from './MainLayoutRouter'

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path='/login' element={
					<LoginRoute>
						<Login/>
					</LoginRoute>
				} />
				<Route path='/*'  element={<MainLayoutRouter/>} />
			</Routes>
		</Router>
	)
}

export default AppRouter
