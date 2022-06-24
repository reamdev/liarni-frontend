import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthState } from 'auth-store'

const initialState: AuthState = {
	isAuthenticated: false,
	error: [],
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state: AuthState) => {
			return { ...state, isAuthenticated: true, error: [] }
		},
		loginError: (state: AuthState, action: PayloadAction<string[]>) => {
			return { ...state, isAuthenticated: false, error: action.payload }
		},
		logout: (state: AuthState) => {
			return { ...state, isAuthenticated: false, error: [] }
		}
	}
})

export const { login, loginError, logout } = authSlice.actions
export default authSlice.reducer
