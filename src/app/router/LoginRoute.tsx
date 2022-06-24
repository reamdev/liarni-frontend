import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

type Props = {
  children: ReactNode
}

const LoginRoute = (props: Props) => {
	if (localStorage.getItem('token')) {
		return <Navigate to='/' replace/>
	}


	return <>{props.children}</>
}

export default LoginRoute