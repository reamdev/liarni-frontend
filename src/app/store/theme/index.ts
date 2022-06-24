import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ThemeState, ThemeModeType } from 'theme-store'
import { getFromLocalStorage } from 'utils'

const themeInitValue = getFromLocalStorage('theme') || 'light'

const initialState: ThemeState = {
	theme: themeInitValue
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		changeTheme: (state: ThemeState, action: PayloadAction<ThemeModeType>) => {
			return { ...state, theme: action.payload }
		}
	}
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer
