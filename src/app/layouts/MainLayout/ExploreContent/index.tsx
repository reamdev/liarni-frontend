import axios from 'axios'
import { MCPostContainer } from 'components/entities/MainLayout'
import { UserModel } from 'interface-models'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ConstVariables } from 'utils'
import ECPost from './ECUser'

const MainContent = () => {
	const [state, setState] = useState<UserModel[]>([])
	const { search } = useParams()

	const useAPI = async () => {
		await axios.get(`${ConstVariables.API_URL}/user`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`
			},
			params: {
				searchValue: search ? search : ''
			}
		})
			.then(res => {
				console.log(res.data)
				setState(res.data.users)
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
	}, [search])

	return (
		<div>
			<div>
				<h4 style={{ padding: '0 20px' }}>Explorar</h4>

				<p style={{ padding: '0 20px' }}>{search ? `Buscando: ${search}`: ''}</p>

				<MCPostContainer>
					{
						state.length > 0 ? state.map((elem, i) => (
							<ECPost key={i} user={elem} />
						)) :
							<h3 style={{ padding: '0 20px' }}>Sin Usuarios</h3>
					}
				</MCPostContainer>
			</div>
		</div>
	)
}

export default MainContent
