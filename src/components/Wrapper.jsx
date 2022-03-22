import React from 'react'
import Sait from './Sait'
import Login from './login/Login'
import SignUp from './login/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Wrapper = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/Sign/up' element={<SignUp />} />
				<Route path='/Sait' element={<Sait />} />
			</Routes>
		</BrowserRouter>
	)
}

export default Wrapper
