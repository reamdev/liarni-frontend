import { Avatar } from '@mui/material'
import { MCPostContent } from 'components/entities/MainLayout'
import { MCPostProps } from 'mc-post'
import React from 'react'
import { Link } from 'react-router-dom'

const MCPost = (props: MCPostProps) => {
	return (
		<MCPostContent>
			<div>
				<Avatar src={`${props.user.avatar ? props.user.avatar :'https://www.minem.gob.cu/sites/default/files/default_images/imagen-persona.png'}`}/>
				<div>
					<div>
						<Link to={`/user/${props.user.userName}`}>
							<h5>{props.user.name+ ' ' +props.user.lastName} <span>@{props.user.userName}</span></h5>
						</Link>
						<p>{new Date(props.date).toDateString()}</p>
					</div>
					<p>{props.data}</p>
				</div>
			</div>
		</MCPostContent>
	)
}

export default MCPost