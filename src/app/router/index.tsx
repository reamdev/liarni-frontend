import Login from '@app/main/apps/Login'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import LoginRoute from './LoginRoute'
import MainLayoutRouter from './MainLayoutRouter'

const RouterFont = styled.div`
	width: 100%;
	height: 100%;
	background-color: #11181d;

	h1, h2, h3, h4, h5, h6, p {
		color: #e6e8e9;
	}

	* {
		::-webkit-scrollbar {
			width: 10px;
			&-track {
				background: transparent;
			}
			&-thumb {
				background-color: rgba(255, 255, 255, 0.8);
				border: none;
				border-radius: 20px;
			}
		}
	}

	fieldset {
		border-color: #e6e8e9;
	}
`

const AppRouter = () => {
	return (
		<RouterFont>
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
		</RouterFont>
	)
}

export default AppRouter
