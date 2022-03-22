import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { Validation } from './Validation'
const SignUp = () => {
	const navigate = useNavigate()
	const [values, setValues] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
	})
	const [errors, setErrors] = useState({})
	const [dataIsCorrect, setDataIsCorrect] = useState(false)
	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		})
	}
	const handleFormSubmit = (e) => {
		e.preventDefault()
		setErrors(Validation(values))

		if (setDataIsCorrect(true)) {
			navigate('/Sait')
		}

		// navigate('/Sait')
	}
	useEffect(() => {
		if (Object.keys(errors).length === 0 && dataIsCorrect) {
		}
	}, [errors])
	// const Messege = useSelector((state) => state.errorMessege)
	// const dispacth = useDispatch()
	// const userEmail = useInput(validEmailRegex)
	// const userPassword = useInput(regPass)
	// const error = { emailError: '', passwordError: '' }
	// let formIsValid = false
	// let isDisabled = true

	// formIsValid = userEmail.inputValidRegex && userPassword.inputValidRegex

	// if (userEmail.valueInputIsInValid) {
	// 	error.emailError = 'Введите Email'
	// } else if (userEmail.validateRejex) {
	// 	error.emailError =
	// 		'Имя должна содержать латиницу и не должна содержать цифр'
	// 	isDisabled = false
	// }
	// if (userPassword.valueInputIsInValid) {
	// 	error.passwordError = 'Введите пароль'
	// } else if (userPassword.validateRejex) {
	// 	error.passwordError = 'Пароль не может быть короче 8 символов'
	// }
	// const submitHandler = (e) => {
	// 	e.preventDefault()
	// 	if (
	// 		userEmail.isValidInputNoTouched ||
	// 		userPassword.isValidInputNoTouched
	// 	) {
	// 		return
	// 	}
	// 	dispacth(
	// 		authActionns.authHandler({
	// 			email: userEmail.value,
	// 			password: userPassword.value,
	// 		}),
	// 	)
	// 	userEmail.onClear()
	// 	userPassword.onClear()
	// }
	return (
		<SignForm>
			<form>
				<div className='login_title'>
					<img src='https://img.icons8.com/color/48/000000/trello.png' />
					<h1>Sign Up TELLO</h1>
				</div>
				<input
					onChange={handleChange}
					placeholder='First Name'
					type='text'
					name='firstName'
				/>
				{errors.name && <p className='error'>{errors.name}</p>}
				<input
					onChange={handleChange}
					placeholder='Last Name'
					type='text'
					name='lastName'
				/>
				{errors.lastName && <p className='error'>{errors.lastName}</p>}
				<input
					autoCapitalize='off'
					onChange={handleChange}
					placeholder='E-mail Address'
					type='text'
					name='email'
				/>
				{errors.email && <p className='error'>{errors.email}</p>}
				<input
					onChange={handleChange}
					placeholder='Password'
					type='password'
					name='password'
				/>
				{errors.password && <p className='error'>{errors.password}</p>}
				<button onClick={handleFormSubmit}>Sign Up</button>
			</form>
		</SignForm>
	)
}
const SignForm = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');
	width: 100%;
	height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	form {
		width: 400px;
		height: 300px;
		margin: 0 auto;
		font-family: 'Fredoka', sans-serif;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		/* LOGIN-TITLE */
		.login_title {
			display: flex;
			align-items: center;
			.logo_gif {
				width: 60px;
			}
		}
		/* INPUT */
		input {
			width: 350px;
			padding: 10px 12px 11px;
			border-radius: 6px;
			font-size: 14px;
			letter-spacing: -0.006em;
			line-height: 1.4;
			outline-style: none;
			padding: 10px;
			background-color: #f1f1f1;
			border: none;
		}
		button {
			width: 350px;
			background-color: #0f62fe;
			border: none;
			border-radius: 6px;
			color: #ffffff;
			font-family: 'Fredoka', sans-serif;
			padding: 10px;
			font-weight: 500;
			cursor: pointer;
			&:hover {
				background-color: blue;
			}
		}
		span {
			font-size: 13px;
			letter-spacing: -0.04px;
			color: #151515;
			a {
				text-decoration: none;
				color: #0f62fe;
				font-weight: 600;
				&:hover {
					border-bottom: 2px solid #0f62fe;
				}
			}
		}
	}
`

export default SignUp
