import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import LeftComponent from './LeftComponent'
import { useWindowDimensions } from '@hooks'
import RightComponent from './RightComponent'

const Login = () => {
	const [gridSize, setGridSize] = useState<6 | 12>(6)
	const { width } = useWindowDimensions()

	useEffect(() => {
		if (width >= 768 && gridSize === 12) {
			setGridSize(6)
		} else if (width < 768 && gridSize === 6) {
			setGridSize(12)
		}
	}, [width])

	return (
		<Grid container>
			<LeftComponent gridSize={gridSize} />
			<RightComponent gridSize={gridSize} />
		</Grid>
	)
}

export default Login