import { MainLayout } from '@app/layouts'
import MainContent from '@app/layouts/MainLayout/MainContent'
import ExploreContent from '@app/layouts/MainLayout/ExploreContent'
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import ProfileContent from '@app/layouts/MainLayout/ProfileContent'

const MainLayoutRouter = () => {
	return (
		<MainLayout>
			<Routes>
				<Route index element={
					<PrivateRoute>
						<MainContent/>
					</PrivateRoute>
				} />
				<Route path='/explore' element={
					<PrivateRoute>
						<ExploreContent/>
					</PrivateRoute>
				} />
				<Route path='/explore/:search' element={
					<PrivateRoute>
						<ExploreContent/>
					</PrivateRoute>
				} />
				<Route path='/profile' element={
					<PrivateRoute>
						<ProfileContent/>
					</PrivateRoute>
				} />
				<Route path='/user/:user' element={
					<PrivateRoute>
						<ProfileContent/>
					</PrivateRoute>
				} />
				<Route path='/liarni-frontend' element={
					<Navigate to="/" replace />
				} />
			</Routes>
		</MainLayout>
	)
}

export default MainLayoutRouter
