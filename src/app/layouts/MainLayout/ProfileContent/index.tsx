import { Avatar, Button, CircularProgress, IconButton } from '@mui/material'
import axios from 'axios'
import { ProfileContentContainer } from 'components/entities/MainLayout'
import { DefaultModal } from 'components/ui'
import { UserModel } from 'interface-models'
import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { ConstVariables } from 'utils'
import ProfileEditData from './ProfileEditData'

const ProfileContent = () => {
	const [userData, setUserData] = useState<UserModel>()
	const [load, setLoad] = useState<boolean>(true)
	const [openModal, setOpenModal] = useState<boolean>(false)
	const { user } = useParams()

	const useAPI = async () => {
		setLoad(true)
		await axios.get(user !== undefined ? `${ConstVariables.API_URL}/user/get-username-data?userName=${user}` : `${ConstVariables.API_URL}/user/get-data`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
			.then(res => {
				console.log(res)
				setUserData(res.data)
				setLoad(false)
			})
			.catch(res => {
				console.log(res)
				setLoad(false)
			})
	}

	useEffect(() => {
		useAPI()
	}, [])

	useEffect(() => {
		useAPI()
	}, [user])

	return (
		<ProfileContentContainer>
			{!load ? (
				<>
					<div>
						<IconButton onClick={() => window.history.back()}>
							<AiOutlineArrowLeft/>
						</IconButton>
						<p>{userData?.name + ' ' + userData?.lastName}</p>
					</div>

					<div>
						<div>
							<div>
								<img src={userData?.banner ? userData.banner : 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cebd17f1-b283-45e5-8600-6ec3edc558fd/dee2aqv-222532a7-8676-4788-b8e3-08d4f5be55e2.png/v1/fill/w_1280,h_640,q_80,strp/profile_banner_by_darkfigure4_dee2aqv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvY2ViZDE3ZjEtYjI4My00NWU1LTg2MDAtNmVjM2VkYzU1OGZkXC9kZWUyYXF2LTIyMjUzMmE3LTg2NzYtNDc4OC1iOGUzLTA4ZDRmNWJlNTVlMi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.sdy7FtZ92V4tHXX-hTf0PupZmkD7CQoG-BkmOY0_mQg'} />
							</div>
							<Avatar sx={{ width: '120px', height: '120px' }} src={`${userData?.avatar ? userData.avatar :'https://www.minem.gob.cu/sites/default/files/default_images/imagen-persona.png'}`} />
						</div>
					</div>

					<div>
						{/* { userData !== undefined && <Button variant='outlined' onClick={() => setOpenModal(true)}>Editar Perfil</Button> } */}
						<Button variant='outlined' onClick={() => setOpenModal(true)} style={{ opacity: `${user === undefined ? 1 : 0}` }}>Editar Perfil</Button>
						<div>
							<h3>{userData?.name + ' ' + userData?.lastName}</h3>
							<p>@{userData?.userName}</p>
						</div>
						<p>{userData?.biografia ? userData.biografia : 'Usuario de Liarni'}</p>
					</div>
				</>
			) : <CircularProgress sx={{ alignSelf: 'center', marginTop: '48vh' }} />}

			<DefaultModal widthModal={40} isOpen={openModal} setIsOpen={setOpenModal}>
				<ProfileEditData user={userData} />
			</DefaultModal>
		</ProfileContentContainer>
	)
}

export default ProfileContent