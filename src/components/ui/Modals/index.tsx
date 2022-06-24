import { IconButton, Modal } from '@mui/material'
import { DefaultModalProps } from 'modals-ui-component'
import React, { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useElementSize } from 'usehooks-ts'
import { ModalContainer } from './ModalComponents'

export const DefaultModal = ({ widthModal, heightModal, isOpen, setIsOpen, children }: DefaultModalProps) => {
	const [modalContentRef, { width, height }] = useElementSize()

	useEffect(() => {
		console.log(width, height)
	})

	const cloneElement = () => {
		if (React.isValidElement(children)) {
			return React.cloneElement(children, {
				height: height
			})
		}

		return children
	}

	return (
		<Modal
			open={isOpen}
			onClose={() => setIsOpen(false)}
		>
			<div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				<ModalContainer width={widthModal} height={heightModal} ref={modalContentRef}>
					<IconButton id='default-modal-close-btn' onClick={() => setIsOpen(false)}>
						<AiOutlineClose/>
					</IconButton>
					{/* {children} */}
					{ cloneElement() }
				</ModalContainer>
			</div>
		</Modal>
	)
}
