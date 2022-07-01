import React from 'react'
import { SnackbarProvider } from 'notistack'
import Auth from './auth/Auth'
import AppRouter from './router'
import { ThemeProvider } from 'styled-components'
import theme from '../themes'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'
import { CssBaseline } from '@mui/material'
// import './App.css'

function App() {
	return (
		<ReduxProvider store={store}>
			<CssBaseline enableColorScheme />
			<Auth>
				<ThemeProvider theme={theme['dark']}>
					<SnackbarProvider
						maxSnack={5}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'right'
						}}
						classes={{
							containerRoot: 'bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99',
						}}
					>
						<AppRouter/>
					</SnackbarProvider>
				</ThemeProvider>
			</Auth>
		</ReduxProvider>
	)
}

export default App
