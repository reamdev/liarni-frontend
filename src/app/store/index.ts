import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import authReducer from './auth'
import themeReducer from './theme'
import logger from 'redux-logger'

// App Redux Store
export const store = configureStore({
	reducer: {
		auth: authReducer,
		theme: themeReducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	devTools: process.env.NODE_ENV !== 'production'
})

// Custom Redux Types
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// Custom Redux Hooks
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
