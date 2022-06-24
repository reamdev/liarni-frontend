import React, { useState } from 'react'
import { RightComponentContainer, RightComponentGrid } from 'components/entities/Login'
import { LoginRightComponentProps } from 'login-right-component'
import LoginSlogan from './LoginSlogan'
import LoginButtons from './LoginButtons'
import { DefaultModal } from 'components/ui'
import { ModalSize } from 'login-buttons'

const RightComponent = ({ gridSize }: LoginRightComponentProps) => {
	const [open, setOpen] = useState<boolean>(false)
	const [component, setComponent] = useState<JSX.Element>(<p>Hola</p>)
	const [modalSize, setModalSize] = useState<ModalSize>(30)

	return (
		<RightComponentGrid item xs={gridSize}>
			<RightComponentContainer>
				<LoginSlogan/>
				<LoginButtons setComponent={setComponent} setOpen={setOpen} setSize={setModalSize}/>
			</RightComponentContainer>

			<DefaultModal widthModal={modalSize} isOpen={open} setIsOpen={setOpen}>
				{component}
			</DefaultModal>
		</RightComponentGrid>
	)
}

export default RightComponent