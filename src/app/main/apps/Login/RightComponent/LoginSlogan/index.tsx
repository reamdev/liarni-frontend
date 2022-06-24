import { Typography } from '@mui/material'
import { LoginSloganContainer } from 'components/entities/Login'
import React from 'react'
import { AiOutlineDingtalk } from 'react-icons/ai'

const LoginSlogan = () => {
	return (
		<LoginSloganContainer>
			<AiOutlineDingtalk/>
			<Typography variant='h3' component='h2'>Comunicate con gente como tú en un solo lugar</Typography>
			<Typography variant='subtitle1' component='h3'>Únete a Liarni hoy mismo.</Typography>
		</LoginSloganContainer>
	)
}

export default LoginSlogan