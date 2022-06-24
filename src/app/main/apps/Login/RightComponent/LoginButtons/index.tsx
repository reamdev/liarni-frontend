import React from 'react'
import { Button, Typography } from '@mui/material'
import { LoginButtonContainer, LoginButtonsContainer } from 'components/entities/Login'
import { LoginButtonsProps, ModalSize } from 'login-buttons'
import LoginForm from '../LoginForm'
import RegisterForm from '../RegisterForm'

const LoginButtons = ({ setComponent, setOpen, setSize }: LoginButtonsProps) => {
	const handleOpen = (component: JSX.Element, size: ModalSize = 40) => {
		setSize(size)
		setComponent(component)
		setOpen(true)
	}

	return (
		<LoginButtonsContainer>
			<Button variant='outlined' onClick={() => handleOpen(<RegisterForm />)}>Registrarte</Button>

			<LoginButtonContainer>
				<Typography component='p'>¿Ya tienes cuenta?</Typography>
				<Button variant='outlined' onClick={() => handleOpen(<LoginForm />, 30)}>Iniciar Sesión</Button>
			</LoginButtonContainer>
		</LoginButtonsContainer>
	)
}

export default LoginButtons