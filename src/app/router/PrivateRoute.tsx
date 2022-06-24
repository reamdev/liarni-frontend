import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
  children: ReactNode
}

const PrivateRoute = (props: Props) => {
	if (!localStorage.getItem('token')) {
		return <Navigate to='/login' replace/>
	}


	return <>{props.children}</>
}

export default PrivateRoute