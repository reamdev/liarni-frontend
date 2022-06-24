import axios from 'axios'
import { MCPostContainer } from 'components/entities/MainLayout'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MCPost from './ECUser'

const MainContent = () => {
	const [state, setState] = useState<{name: string, userName: string, email: string, _id: string}[]>([])
	const { search } = useParams()

	const useAPI = async () => {
		await axios.get('http://localhost:8000/user', {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			params: {
				searchValue: search ? search : ''
			}
		})
			.then(res => {
				setState(res.data.users)
			})
			.catch(res => {
				console.log('error')
			})
	}

	useEffect(() => {
		useAPI()
	}, [])

	useEffect(() => {
		useAPI()
	}, [search])

	return (
		<div>
			<div>
				<h4>Explorar</h4>

				<p>{search ? `Buscando: ${search}`: ''}</p>

				<MCPostContainer>
					{
						state.length > 0 ? state.map((elem, i) => (
							<MCPost key={i} user={{name: elem.name, userName: elem.userName, image: `https://i.pravatar.cc/${(i + 1) * 100}`}} data={elem.email}/>
						)) :
							<h3>Sin Posts</h3>
					}
				</MCPostContainer>
			</div>
		</div>
	)
}

export default MainContent