import React, { useState } from 'react'
import { LoginFormContainer } from 'components/entities/Login'
import { SubmitHandler, useForm } from 'react-hook-form'
import { LoginFormProps, LoginInputs } from 'liarni-login-form'
import { Button, CircularProgress, FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material'
import { ConstVariables, emailRegex } from 'utils'
import { FormsTitleContainer, LoginInputContainer } from 'components/entities/Login/RightComponent'
import axios from 'axios'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'

const LoginForm = (props: LoginFormProps) => {
	const { register, handleSubmit, formState: { errors } } = useForm<LoginInputs>()
	const { enqueueSnackbar } = useSnackbar()
	const navigate = useNavigate()
	const [load, setLoad] = useState<boolean>(false)

	const onSubmit: SubmitHandler<LoginInputs> = data => {
		const useAPI = async () => {
			setLoad(true)
			await axios.post(`${ConstVariables.API_URL}/auth/login`, { email: data.email, password: data.password })
				.then(res => {
					localStorage.setItem('token', res.data.token)
					enqueueSnackbar(res.data.message, { variant: 'success' })
					navigate('/')
					setLoad(false)
				})
				.catch(res => {
					enqueueSnackbar(res.response.data.message, { variant: 'error' })
					setLoad(false)
				})
		}

		useAPI()
	}

	return (
		<div style={{ width: '100%', height: `${props.height}px`, display: 'flex' }}>
			<LoginFormContainer method='POST' onSubmit={handleSubmit(onSubmit)}>
				<FormsTitleContainer>
					<h2>Iniciar Sesión</h2>
				</FormsTitleContainer>

				<LoginInputContainer>
					<FormControl size='small' error={errors.email !== undefined}>
						<InputLabel htmlFor='login-email'>Email</InputLabel>
						<OutlinedInput
							id='login-email'
							type='email'
							{...register('email',
								{ required: { value: true, message: 'Se require ingresar el correo' }, pattern: { value: emailRegex, message: 'El correo no es válido' } }
							)}
							aria-describedby='login-email-helper-text'
						/>
						<FormHelperText id='login-email-helper-text'>{errors.email ? errors.email.message : ''}</FormHelperText>
					</FormControl>

					<FormControl size='small' error={errors.password !== undefined}>
						<InputLabel htmlFor='login-password'>Contraseña</InputLabel>
						<OutlinedInput
							id='login-password'
							type='password'
							{...register('password',
								{ required: { value: true, message: 'Se require una contraseña' }}
							)}
							aria-describedby='login-password-helper-text'
						/>
						<FormHelperText id='login-password-helper-text'>{errors.password ? errors.password.message : ''}</FormHelperText>
					</FormControl>
				</LoginInputContainer>

				<Button type='submit' variant='outlined'>
					{load ? <CircularProgress /> : 'Iniciar Sesión'}
				</Button>
			</LoginFormContainer>
		</div>
	)
}

export default LoginForm
