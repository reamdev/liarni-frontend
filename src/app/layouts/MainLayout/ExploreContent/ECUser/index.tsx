import { Avatar } from '@mui/material'
import { ECUserContent } from 'components/entities/MainLayout'
import { ECUserProps } from 'ec-user'
import React from 'react'
import { Link } from 'react-router-dom'

const ECUser = (props: ECUserProps) => {
	return (
		<ECUserContent>
			<div>
				<Avatar src={`${props.user.avatar ? props.user.avatar :'https://www.minem.gob.cu/sites/default/files/default_images/imagen-persona.png'}`}/>
				<div>
					<Link to={`/user/${props.user.userName}`}>
						<h5>{props.user.name} <span>@{props.user.userName}</span></h5>
					</Link>
					<p>{props.user.biografia ? props.user.biografia : 'Usuario de Liarni.'}</p>
				</div>
			</div>
		</ECUserContent>
	)
}

export default ECUser