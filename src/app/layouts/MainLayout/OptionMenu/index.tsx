import React, { useState } from 'react'
import { AiOutlineDingtalk, AiOutlineEllipsis } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { RiHashtag } from 'react-icons/ri'
// import { BsBookmark } from 'react-icons/bs'
// import { HiOutlineUser } from 'react-icons/hi'
import { Avatar, Button } from '@mui/material'
import { OptionLinksContainer, OptionLogoContainer, OptionMenuContainer, OptionsContainer, OptionUserContainer, OptionUserOptionsContainer } from 'components/entities/MainLayout'
import { useElementSize } from 'usehooks-ts'
import { OptionMenuProps } from 'layouts-main-layout'

const OptionMenu = (props: OptionMenuProps) => {
	const [logoContainer, lContainerSize ] = useElementSize()
	const [userContainer, uContainerSize ] = useElementSize()
	const [openOptions, setOpenOptions] = useState<boolean>(false)
	const navigate = useNavigate()

	const closeSession = () => {
		localStorage.removeItem('token')
		navigate('/login')
	}

	return (
		<OptionMenuContainer ref={props.ref}>
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
					{/* <Link to='/'><HiOutlineUser />Perfil</Link> */}
				</OptionLinksContainer>

				{/* <Button variant='contained' color='info'>Nuevo Post</Button> */}
			</OptionsContainer>

			<OptionUserContainer ref={userContainer} onClick={() => setOpenOptions(!openOptions)}>
				<Avatar src='https://i.pravatar.cc/300'/>
				<div>
					<span>Elias Arriaga</span>
					<span>@reamdev</span>
				</div>
				<div>
					<AiOutlineEllipsis />
				</div>
			</OptionUserContainer>

			<OptionUserOptionsContainer className={openOptions ? 'show' : ''}>
				<ul>
					<li>
						<Button color='error' onClick={() => closeSession()}>Cerrar Sesion</Button>
					</li>
				</ul>
			</OptionUserOptionsContainer>
		</OptionMenuContainer>
	)
}

export default OptionMenu
