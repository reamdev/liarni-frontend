import { Theme } from '@theme'

export const darkTheme: Theme = {
	mode: 'dark',
	primary_color: '#2c3e50',
	secondary_color: '#34495e',
	tertiary_color: '#7f8c8d',
	text_color: '#ffffff',
}

export const lightTheme: Theme = {
	mode: 'light',
	primary_color: '#ffffff',
	secondary_color: '#ecf0f1',
	tertiary_color: '#bdc3c7',
	text_color: '#000000',
}

export default {
	dark: darkTheme,
	light: lightTheme
}