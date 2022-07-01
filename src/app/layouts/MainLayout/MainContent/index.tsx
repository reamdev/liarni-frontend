import { Avatar, Button, CircularProgress, TextField } from '@mui/material'
import axios from 'axios'
import { MainContentContainer, MCCreatePostContainer, MCPostContainer } from 'components/entities/MainLayout'
import React, { useEffect, useState } from 'react'
import { ConstVariables } from 'utils'
import MCPost from './MCPost'
import { useSnackbar } from 'notistack'
import { TweetModel } from 'interface-models'

const MainContent = () => {
	const [state, setState] = useState<TweetModel[]>([])
	const [reload, setReload] = useState<boolean>(false)
	const [loadData, setLoadData] = useState<boolean>(false)
	const [newPostValue, setNewPostValue] = useState<string>('')
	const { enqueueSnackbar } = useSnackbar()

	const useAPI = async () => {
		setLoadData(false)

		await axios.get(`${ConstVariables.API_URL}/tweet`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			}
		})
			.then(res => {
				console.log(res.data)
				setState(res.data.tweets)
				setLoadData(true)
			})
			.catch(err => {
				console.log(err)
				setLoadData(false)
			})
	}

	const useRegisterAPI = async () => {
		if (newPostValue.length > 0) {
			setLoadData(false)
			await axios.post(`${ConstVariables.API_URL}/tweet`, {
				message: newPostValue
			}, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
				.then(() => {
					setReload(!reload)
					setLoadData(true)
					setNewPostValue('')
				})
				.catch(err => {
					console.log(`Error: ${err}`)
				})
		} else {
			enqueueSnackbar('El posts no puede estar vacio', { variant: 'error' })
		}
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
		<MainContentContainer>
			<div>
				<h4>Inicio</h4>
				<MCCreatePostContainer>
					<div>
						<Avatar src='https://www.minem.gob.cu/sites/default/files/default_images/imagen-persona.png'/>
						<TextField multiline placeholder='¿Qué está pensando?' variant='filled' value={newPostValue} onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e)} />
					</div>

					<Button variant='contained' onClick={() => useRegisterAPI()}>Publicar</Button>
				</MCCreatePostContainer>

				<MCPostContainer>
					{
						loadData ?
							state.length > 0 ? state.map((elem, i) => (
								<MCPost key={i} user={elem.user} data={elem.message} date={elem.date}/>
							)) :
								<h3 style={{ padding: '0 20px' }}>Sin Posts</h3>
							:
							<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: '30px' }}>
								<CircularProgress />
							</div>
					}
				</MCPostContainer>
			</div>
		</MainContentContainer>
	)
}

export default MainContent
