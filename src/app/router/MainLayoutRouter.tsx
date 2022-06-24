import { MainLayout } from '@app/layouts'
import MainContent from '@app/layouts/MainLayout/MainContent'
import ExploreContent from '@app/layouts/MainLayout/ExploreContent'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

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
			</Routes>
		</MainLayout>
	)
}

export default MainLayoutRouter