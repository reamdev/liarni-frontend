import React from 'react'
import { LeftComponentContainer, LeftComponentGrid } from 'components/entities/Login'
import { AiOutlineDingtalk } from 'react-icons/ai'
import { LoginLeftComponentProps } from 'login-left-component'

const LeftComponent = ({ gridSize }: LoginLeftComponentProps) => {
	return (
		<LeftComponentGrid item xs={gridSize}>
			<LeftComponentContainer>
				<AiOutlineDingtalk size={400}/>
			</LeftComponentContainer>
		</LeftComponentGrid>
	)
}

export default LeftComponent
