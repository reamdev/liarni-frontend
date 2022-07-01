import { Avatar, Button, CircularProgress, FormControl, IconButton, InputLabel, OutlinedInput } from '@mui/material'
import { ProfileEditDataContainer } from 'components/entities/MainLayout'
import { ProfileEditDataProps } from 'profile-edit-data'
import { MdAddAPhoto } from 'react-icons/md'
import React, { ChangeEvent, createRef, useEffect, useState } from 'react'
import axios from 'axios'
import { ConstVariables } from 'utils'
import { useSnackbar } from 'notistack'

const ProfileEditData = (props: ProfileEditDataProps) => {
	const { enqueueSnackbar } = useSnackbar()
	const avatarFileRef = createRef<HTMLInputElement>()
	const [avatarImage, setAvatarImage] = useState<File>()
	const [avatarPreview, setAvatarPreview] = useState<string>('')
	const bannerFileRef = createRef<HTMLInputElement>()
	const [bannerImage, setBannerImage] = useState<File>()
	const [bannerPreview, setBannerPreview] = useState<string>('')
	const [load, setLoad] = useState<boolean>(false)

	const [name, setName] = useState<string>(props.user?.name ? props.user.name : '')
	const [lastName, setLastName] = useState<string>(props.user?.lastName ? props.user.lastName : '')
	const [biography, setBiography] = useState<string>(props.user?.biografia ? props.user.biografia : '')
	const [ubication, setUbication] = useState<string>(props.user?.ubicacion ? props.user.ubicacion : '')
	const [webSite, setWebSite] = useState<string>(props.user?.sitioWeb ? props.user.sitioWeb : '')
	// const [birthDate, setBirthDate] = useState<string>(props.user?.birthDate ? props.user.birthDate : '')

	const handleAvatarClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		avatarFileRef.current?.click()
	}

	const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files ? e.target.files[0] : null

		if (file !== null && file.type.substring(0, 5) === 'image') {
			setAvatarImage(file)
		}
	}

	const handleBannerClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		bannerFileRef.current?.click()
	}

	const handleChangeBanner = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files ? e.target.files[0] : null

		if (file !== null && file.type.substring(0, 5) === 'image') {
			setBannerImage(file)
		}
	}

	useEffect(() => {
		if (avatarImage) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setAvatarPreview(reader.result as string)
			}
			reader.readAsDataURL(avatarImage)
		} else {
			setAvatarPreview('')
		}
	}, [avatarImage])

	useEffect(() => {
		if (bannerImage) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setBannerPreview(reader.result as string)
			}
			reader.readAsDataURL(bannerImage)
		} else {
			setBannerPreview('')
		}
	}, [bannerImage])

	const useAPI = async () => {
		setLoad(true)
		await axios.put(`${ConstVariables.API_URL}/user/`, { name: name, lastName: lastName, biography: biography, ubication: ubication, webSite: webSite, avatar: avatarImage }, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
			.then(res => {
				enqueueSnackbar(res.data.message, { variant: 'success' })
				setLoad(false)
			})
			.catch(res => {
				enqueueSnackbar(res.response.data.message, { variant: 'error' })
				setLoad(false)
			})
	}

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (name.length < 3) {
			enqueueSnackbar('Debe ingresar el nombre', { variant: 'warning' })
			return
		}

		if (lastName.length < 3) {
			enqueueSnackbar('Debe ingresar el apellido', { variant: 'warning' })
			return
		}

		useAPI()
	}

	return (
		<ProfileEditDataContainer>
			<h2>Editar Perfil</h2>

			<form onSubmit={onSubmit}>
				<div>
					<div>
						<div>
							<img src={(bannerPreview.length > 5) ? bannerPreview : props.user?.banner ? props.user.banner : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cebd17f1-b283-45e5-8600-6ec3edc558fd/dee2aqv-222532a7-8676-4788-b8e3-08d4f5be55e2.png/v1/fill/w_1280,h_640,q_80,strp/profile_banner_by_darkfigure4_dee2aqv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvY2ViZDE3ZjEtYjI4My00NWU1LTg2MDAtNmVjM2VkYzU1OGZkXC9kZWUyYXF2LTIyMjUzMmE3LTg2NzYtNDc4OC1iOGUzLTA4ZDRmNWJlNTVlMi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sdy7FtZ92V4tHXX-hTf0PupZmkD7CQoG-BkmOY0_mQg'} />
							<div>
								<IconButton onClick={handleBannerClick}>
									<MdAddAPhoto />
								</IconButton>
							</div>
						</div>
						<div>
							<Avatar src={(avatarPreview.length > 5) ? avatarPreview : props.user?.avatar ? props.user.avatar :'https://www.minem.gob.cu/sites/default/files/default_images/imagen-persona.png'}/>

							<div>
								<IconButton onClick={handleAvatarClick}>
									<MdAddAPhoto />
								</IconButton>
							</div>
						</div>
					</div>

					<input
						id='edit-banner'
						name='banner'
						type='file'
						accept='image/*'
						style={{ display: 'none' }}
						ref={bannerFileRef}
						onChange={handleChangeBanner}
						// {...register('name', { required: { value: true, message: 'Ingrese su nombre' } })}
					/>

					<input
						id='edit-avatar'
						name='avatar'
						style={{ display: 'none' }}
						accept='image/*'
						type='file'
						ref={avatarFileRef}
						onChange={handleChangeAvatar}
						// {...register('name', { required: { value: true, message: 'Ingrese su nombre' } })}
					/>
				</div>

				<div>
					<FormControl size='small'>
						<InputLabel htmlFor='edit-name'>Nombres</InputLabel>
						<OutlinedInput
							id='edit-name'
							type='text'
							label='Nombres'
							name='name'
							value={name}
							onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
							required
						/>
					</FormControl>
					<FormControl size='small'>
						<InputLabel htmlFor='edit-last-name'>Apellidos</InputLabel>
						<OutlinedInput
							id='edit-last-name'
							type='text'
							label='Apellidos'
							value={lastName}
							name='lastName'
							onChange={(e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)}
							required
						/>
					</FormControl>
				</div>

				<div>
					<FormControl size='small'>
						<InputLabel htmlFor='edit-biography'>Biografia</InputLabel>
						<OutlinedInput
							multiline
							id='edit-biography'
							type='text'
							label='Biografia'
							value={biography}
							onChange={(e: ChangeEvent<HTMLInputElement>) => setBiography(e.target.value)}
							name='biography'
						/>
					</FormControl>
				</div>

				<div>
					<FormControl size='small'>
						<InputLabel htmlFor='edit-ubication'>Ubicacion</InputLabel>
						<OutlinedInput
							id='edit-ubication'
							type='text'
							label='Ubicacion'
							value={ubication}
							onChange={(e: ChangeEvent<HTMLInputElement>) => setUbication(e.target.value)}
							name='ubication'
						/>
					</FormControl>
					<FormControl size='small'>
						<InputLabel htmlFor='edit-web-site'>Sitio Web</InputLabel>
						<OutlinedInput
							id='edit-web-site'
							type='url'
							label='Sitio Web'
							onChange={(e: ChangeEvent<HTMLInputElement>) => setWebSite(e.target.value)}
							value={webSite}
						/>
					</FormControl>
				</div>
				{/*
				<div>
					<FormControl size='small'>
						<InputLabel htmlFor='edit-birthdate'>Fecha Cumpleaños</InputLabel>
						<OutlinedInput
							id='edit-birthdate'
							type='date'
							label='Fecha de Cumpleaños'
							required
							value={birthDate}
						/>
					</FormControl>
				</div> */}

				<Button type='submit' variant='contained'>
					{load ? <CircularProgress/> : 'Guardar'}
				</Button>
			</form>
		</ProfileEditDataContainer>
	)
}

export default ProfileEditData