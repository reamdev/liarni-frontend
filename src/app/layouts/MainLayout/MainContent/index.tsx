import { Avatar, Button, TextField } from '@mui/material'
import axios from 'axios'
import { MCCreatePostContainer, MCPostContainer } from 'components/entities/MainLayout'
import React, { useEffect, useState } from 'react'
import MCPost from './MCPost'

const MainContent = () => {
	const [state, setState] = useState<{id: string, name: string, message: string}[]>([])
	const [reload, setReload] = useState<boolean>(false)
	const [newPostValue, setNewPostValue] = useState<string>('')

	const useAPI = async () => {
		await axios.get('http://localhost:8000/tweet', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
			.then(res => {
				setState(res.data.tweets)
			})
			.catch(err => {
				console.log(`Error: ${err}`)
			})
	}

	const useRegisterAPI = async () => {
		await axios.post('http://localhost:8000/tweet', {
			message: newPostValue
		}, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
			.then(() => {
				setReload(!reload)
				setNewPostValue('')
			})
			.catch(err => {
				console.log(`Error: ${err}`)
			})
	}

	useEffect(() => {
		useAPI()
	}, [])

	useEffect(() => {
		useAPI()
	}, [reload])

	const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setNewPostValue(e.target.value)
	}

	return (
		<div>
			<div>
				<h4>Inicio</h4>
				<MCCreatePostContainer>
					<div>
						<Avatar src='https://i.pravatar.cc/300'/>
						<TextField multiline placeholder='¿Qué está pensando?' variant='filled' value={newPostValue} onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e)} />
					</div>

					<Button variant='contained' onClick={() => useRegisterAPI()}>Publicar</Button>
				</MCCreatePostContainer>

				<MCPostContainer>
					{
						state.length > 0 ? state.map((elem, i) => (
							<MCPost key={i} user={{name: elem.name, userName: 'reamdev', image: 'https://i.pravatar.cc/300'}} data={elem.message}/>
						)) :
							<h3>Sin Posts</h3>
					}
				</MCPostContainer>
			</div>
		</div>
	)
}

export default MainContent
