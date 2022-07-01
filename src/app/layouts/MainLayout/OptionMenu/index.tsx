import React, { useEffect, useState } from 'react'
import { AiOutlineDingtalk, AiOutlineEllipsis } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { RiHashtag } from 'react-icons/ri'
// import { BsBookmark } from 'react-icons/bs'
import { HiOutlineUser } from 'react-icons/hi'
import { Avatar, Button, CircularProgress, TextField } from '@mui/material'
import { NewPostOptionContainer, OptionLinksContainer, OptionLogoContainer, OptionMenuContainer, OptionsContainer, OptionUserContainer, OptionUserOptionsContainer } from 'components/entities/MainLayout'
import { useElementSize } from 'usehooks-ts'
import { OptionMenuProps } from 'layouts-main-layout'
import axios from 'axios'
import { ConstVariables } from 'utils'
import { UserModel } from 'interface-models'
import { DefaultModal } from 'components/ui'
import { useSnackbar } from 'notistack'

const OptionMenu = (props: OptionMenuProps) => {
	const [logoContainer, lContainerSize ] = useElementSize()
	const [userContainer, uContainerSize ] = useElementSize()
	const [openOptions, setOpenOptions] = useState<boolean>(false)
	const [userData, setUserData] = useState<UserModel>()
	const navigate = useNavigate()
	const [loadNewPost, setLoadNewPost] = useState<boolean>(false)
	const [openModal, setOpenModal] = useState<boolean>(false)
	const [newPostValue, setNewPostValue] = useState<string>('')
	const { enqueueSnackbar } = useSnackbar()

	const useRegisterAPI = async () => {
		setLoadNewPost(true)
		if (newPostValue.length > 0) {
			await axios.post(`${ConstVariables.API_URL}/tweet`, {
				message: newPostValue
			}, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
				.then(() => {
					setLoadNewPost(false)
					setNewPostValue('')
				})
				.catch(err => {
					console.log(`Error: ${err}`)
				})
		} else {
			enqueueSnackbar('El posts no puede estar vacio', { variant: 'error' })
		}
		setLoadNewPost(false)
		setOpenModal(false)
	}

	const closeSession = () => {
		localStorage.removeItem('token')
		navigate('/login')
	}

	useEffect(() => {
		const useAPI = async () => {
			await axios.get(`${ConstVariables.API_URL}/user/get-data`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
				.then(res => {
					console.log(res)
					setUserData(res.data)
				})
				.catch(err => {
					console.log(err)
				})
		}

		useAPI()
	}, [])

	const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setNewPostValue(e.target.value)
	}

	return (
		<OptionMenuContainer ref={props.ref}>
			<div style={{ position: 'fixed', height: '96%', width: '288px', borderRight: '1px solid rgba(255, 255, 255, 0.1)', paddingRight: '10px' }}>
				<OptionLogoContainer ref={logoContainer}>
					<Link to='/'>
						<AiOutlineDingtalk/>
					</Link>
				</OptionLogoContainer>

				<OptionsContainer logoHeight={lContainerSize.height} userHeight={uContainerSize.height}>
					<OptionLinksContainer>
						<Link to='/'><FaHome />Home</Link>
						<Link to='/explore'><RiHashtag />Explorar</Link>
						{/* <Link to='/'><BsBookmark />Guardados</Link> */}
						<Link to='/profile'><HiOutlineUser />Perfil</Link>
					</OptionLinksContainer>

					<Button variant='contained' color='info' onClick={() => setOpenModal(true)}>Nuevo Post</Button>
				</OptionsContainer>

				<OptionUserContainer ref={userContainer} onClick={() => setOpenOptions(!openOptions)}>
					<Avatar src={`${userData?.avatar ? userData.avatar :'https://www.minem.gob.cu/sites/default/files/default_images/imagen-persona.png'}`}/>
					<div>
						<span>{userData?.name}</span>
						<span>@{userData?.userName}</span>
					</div>
					<div>
						<AiOutlineEllipsis style={{ fill: '#e6e8e9' }} />
					</div>
				</OptionUserContainer>

				<OptionUserOptionsContainer className={openOptions ? 'show' : ''}>
					<Button color='error' onClick={() => closeSession()}>Cerrar Sesion</Button>
				</OptionUserOptionsContainer>
			</div>

			<DefaultModal widthModal={30} isOpen={openModal} setIsOpen={setOpenModal}>
				<NewPostOptionContainer>
					<h3>Nuevo Post</h3>

					<div>
						<Avatar src={userData?.avatar ? userData?.avatar : 'https://www.minem.gob.cu/sites/default/files/default_images/imagen-persona.png'}/>
						<TextField multiline placeholder='¿Qué está pensando?' variant='filled' value={newPostValue} onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e)} />
					</div>

					<Button variant='contained' onClick={() => useRegisterAPI()}>
						{loadNewPost ? <CircularProgress /> : 'Publicar'}
					</Button>
				</NewPostOptionContainer>
			</DefaultModal>
		</OptionMenuContainer>
	)
}

export default OptionMenu
