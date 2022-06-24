import { IconButton, TextField } from '@mui/material'
import { MainLayoutContentContainer, MainRigthAsideContainer } from 'components/entities/MainLayout'
import { MainLayoutContainer } from 'components/styled-components'
import { MainLayoutProps } from 'layouts-main-layout'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useElementSize } from 'usehooks-ts'
import OptionMenu from './OptionMenu'
import './a.css'
import { useNavigate } from 'react-router-dom'

const MainLayout = ({ children }: MainLayoutProps) => {
	const [optionRef, optionSize] = useElementSize()
	const [rigthAsideRef, rigthAsideSize] = useElementSize()
	const [searchValue, setSearchValue] = useState<string>('')
	const navigate = useNavigate()

	const searchUser = () => {
		navigate(`/explore/${searchValue}`)
		setSearchValue('')
	}

	const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setSearchValue(e.target.value)
	}

	return (
		<MainLayoutContainer>
			<OptionMenu ref={optionRef}/>

			<MainLayoutContentContainer optionHeight={optionSize.height} rightAsideHeight={rigthAsideSize.height}>
				{children}
			</MainLayoutContentContainer>

			<MainRigthAsideContainer ref={rigthAsideRef}>
				<TextField placeholder='Buscar...' value={searchValue} onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e)} />
				<IconButton onClick={() => searchUser()}>
					<BsSearch/>
				</IconButton>
			</MainRigthAsideContainer>
		</MainLayoutContainer>
	)
}

export default MainLayout
