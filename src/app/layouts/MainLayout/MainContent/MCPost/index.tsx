import { Avatar } from '@mui/material'
import { MCPostContent } from 'components/entities/MainLayout'
import { MCPostProps } from 'mc-post'
import React from 'react'

const MCPost = (props: MCPostProps) => {
	return (
		<MCPostContent>
			<div>
				<Avatar src={props.user.image}/>
				<div>
					<h5>{props.user.name} <span>@{props.user.userName}</span></h5>
					<p>{props.data}</p>
				</div>
			</div>
		</MCPostContent>
	)
}

export default MCPost