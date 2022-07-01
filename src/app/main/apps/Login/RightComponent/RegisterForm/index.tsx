import { Button, CircularProgress, FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material'
import axios from 'axios'
import { FormsTitleContainer, RegisterDataContainer, RegisterFormContainer, RegisterInputsContainer } from 'components/entities/Login/RightComponent'
import { RegisterInputs } from 'liarni-register-form'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ConstVariables, emailRegex } from 'utils'

const RegisterForm = () => {
	const { register, watch, handleSubmit, formState: { errors } } = useForm<RegisterInputs>()
	const { enqueueSnackbar } = useSnackbar()
	const navigate = useNavigate()
	const [load, setLoad] = useState<boolean>(false)

	const onSubmit: SubmitHandler<RegisterInputs> = data => {
		const useAPI = async () => {
			setLoad(true)
			await axios.post(`${ConstVariables.API_URL}/auth/register`, { userName: data.userName, name: data.name, lastName: data.lastName, email: data.email, password: data.password })
				.then(res => {
					localStorage.setItem('token', res.data.token)
					enqueueSnackbar(res.data.message, { variant: 'success' })
					setLoad(false)
					navigate('/')
				})
				.catch(res => {
					enqueueSnackbar(res.response.data.message, { variant: 'error' })
					setLoad(false)
				})
		}

		useAPI()
	}

	return (
		<RegisterFormContainer  method='POST' onSubmit={handleSubmit(onSubmit)}>
			<FormsTitleContainer>
				<h2>Crear Nueva Cuenta</h2>
			</FormsTitleContainer>

			<RegisterDataContainer>
				<RegisterInputsContainer>
					<FormControl size='small' error={errors.name !== undefined}>
						<InputLabel htmlFor='register-name'>Nombres</InputLabel>
						<OutlinedInput
							id='register-name'
							type='text'
							label='Nombres'
							{...register('name', { required: { value: true, message: 'Ingrese su nombre' } })}
							aria-describedby='register-name-helper-text'
						/>
						<FormHelperText id='register-name-helper-text'>{errors.name ? errors.name.message : ''}</FormHelperText>
					</FormControl>

					<FormControl size='small' error={errors.lastName !== undefined}>
						<InputLabel htmlFor='register-last-name'>Apellidos</InputLabel>
						<OutlinedInput
							id='register-last-name'
							type='text'
							label='Apellidos'
							{...register('lastName', { required: { value: true, message: 'Ingrese sus Apellidos' } })}
							aria-describedby='register-last-name-helper-text'
						/>
						<FormHelperText id='register-last-name-helper-text'>{errors.lastName ? errors.lastName.message : ''}</FormHelperText>
					</FormControl>
				</RegisterInputsContainer>

				<RegisterInputsContainer>
					<FormControl size='small' error={errors.userName !== undefined}>
						<InputLabel htmlFor='register-user-name'>Nombre de Usuario</InputLabel>
						<OutlinedInput
							label='Nombre de Usuario'
							id='register-user-name'
							type='text'
							{...register('userName', { required: { value: true, message: 'Ingrese un nombre de usuario' } })}
							aria-describedby='register-user-name-helper-text'
						/>
						<FormHelperText id='register-user-name-helper-text'>{errors.userName ? errors.userName.message : ''}</FormHelperText>
					</FormControl>

					<FormControl size='small' error={errors.email !== undefined}>
						<InputLabel htmlFor='register-email'>Correo</InputLabel>
						<OutlinedInput
							id='register-email'
							label='Correo'
							type='email'
							{...register('email',
								{ required: { value: true, message: 'Ingrese su correo' }, pattern: { value: emailRegex, message: 'Correo no es válido' } }
							)}
							aria-describedby='register-email-helper-text'
						/>
						<FormHelperText id='register-email-helper-text'>{errors.email ? errors.email.message : ''}</FormHelperText>
					</FormControl>
				</RegisterInputsContainer>

				<RegisterInputsContainer>
					<FormControl size='small' error={errors.password !== undefined}>
						<InputLabel htmlFor='register-password'>Contraseña</InputLabel>
						<OutlinedInput
							label='Contraseña'
							id='register-password'
							type='password'
							{...register('password', { required: { value: true, message: 'Ingrese una contraseña' } })}
							aria-describedby='register-password-helper-text'
						/>
						<FormHelperText id='register-password-helper-text'>{errors.password ? errors.password.message : ''}</FormHelperText>
					</FormControl>

					<FormControl size='small' error={errors.confirmPassword !== undefined}>
						<InputLabel htmlFor='register-confirm-password'>Confirmar Contraseña</InputLabel>
						<OutlinedInput
							label='Confirmar Contraseña'
							id='register-confirm-password'
							type='password'
							{...register('confirmPassword', {
								required: { value: true, message: 'Confirme su contraseña' },
								validate: (val: string) => {
									if (val !== watch('password')) {
										return 'Las contraseñas no coinciden'
									}
								}
							})}
							aria-describedby='register-confirm-password-helper-text'
						/>
						<FormHelperText id='register-confirm-password-helper-text'>{errors.confirmPassword ? errors.confirmPassword.message : ''}</FormHelperText>
					</FormControl>
				</RegisterInputsContainer>

				<Button type='submit' variant='outlined'>
					{load ? <CircularProgress/> : 'Registrarse'}</Button>
			</RegisterDataContainer>
		</RegisterFormContainer>
	)
}

export default RegisterForm