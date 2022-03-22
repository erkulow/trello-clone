import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { authActions } from '../store/authSlice'
import { validEmailRegex } from '../helpers/Regex'
import styled from 'styled-components'
import Google from '../../assets/SVG/Google.svg'
import Coontainer from '../UI/Container'

const Login = () => {
	const auth = useSelector((state) => state.auth)
	const navigate = useNavigate()
	const dispacth = useDispatch()

	const [values, setValues] = useState({
		email: '',
		password: '',
	})
	const [showError, setShowError] = useState(false)
	const errorMessage = showError ? (
		<p style={{ color: 'red', fontSize: '12px' }}>
			Неправильно заполнен адрес электронной почты
		</p>
	) : (
		''
	)
	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		})
	}
	const handleFormSubmit = (e) => {
		e.preventDefault()

		if (validEmailRegex.test(values.email) && auth.auth === true) {
			setShowError(false)
		} else {
			setShowError(true)
		}
		dispacth(
			authActions.authHandler({
				email: values.email,
				password: values.password,
			}),
		)
	}
	if (auth.auth === true) {
		navigate('/Sait')
	}
	const signUpHandler = () => {
		navigate('/Sign/up')
	}
	return (
		<Coontainer>
			<LoginForm>
				<Login_title>
					<img src='https://img.icons8.com/color/48/000000/trello.png' />
					<h1>TRELLO</h1>
				</Login_title>
				<InputStyled
					autoComplete='off'
					placeholder='E-mail Address'
					type='email'
					name='email'
					value={values.email}
					onChange={handleChange}
				/>
				{errorMessage}
				<InputStyled
					name='password'
					value={values.password}
					placeholder='Password'
					type='password'
					onChange={handleChange}
				/>
				<ButtonStyled onClick={handleFormSubmit}>Login</ButtonStyled>
				<SpanStyled onClick={signUpHandler}>
					Don't have an account? <a href=''>Sign Up</a>
				</SpanStyled>
				<Block_for_icons>
					<a href='https://accounts.google.com/'>
						<div>
							<img src={Google} alt='...Google' />
							<p>Google</p>
						</div>
					</a>
					<a href='https://www.facebook.com/'>
						<div>
							<img
								src='https://img.icons8.com/fluency/48/000000/meta.png'
								alt='...Meta'
							/>
							<p>Meta</p>
						</div>
					</a>
				</Block_for_icons>
			</LoginForm>
			<AtlasianBox>
				<img
					src='https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.318/favicon.ico'
					alt='...ATLASIAN'
				/>
				<a href='https://marketplace.atlassian.com/'>
					<p>ATLASSIAN</p>
				</a>
			</AtlasianBox>
		</Coontainer>
	)
}

const LoginForm = styled.form`
	@import url('https://fonts.googleapis.com/css2?family=Fredoka&display=swap');
	display: flex;
	flex-direction: column;
	text-align: center;
	align-items: center;
	justify-content: space-evenly;
	width: 400px;
	height: 350px;
	margin: 0 auto;
	margin-top: 10%;
	font-family: 'Fredoka', sans-serif;
	border-bottom: 2px solid #0f62fe;
`
const InputStyled = styled.input`
	width: 350px;
	padding: 10px 12px 11px;
	border-radius: 6px;
	font-size: 14px;
	letter-spacing: -0.006em;
	line-height: 1.4;
	outline-style: none;
	padding: 10px;
	border: ${(props) =>
		props.isValidInput ? ' 2px solid red' : ' 2px solid #f1f1f1'};
	background-color: #f1f1f1;
	margin: 2px;
	&:focus {
		border: 2px solid #0f62fe;
	}
`
const Login_title = styled.div`
	display: flex;
	align-items: center;
	.logo_gif {
		width: 60px;
	}
`
const ButtonStyled = styled.button`
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
		transition: 0.5s;
		background-color: blue;
	}
`
const SpanStyled = styled.span`
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
`
const Block_for_icons = styled.div`
	width: 80%;
	display: flex;
	justify-content: space-around;
	a {
		text-decoration: none;
		color: blue;
		width: 30%;
	}
	div {
		display: flex;
		align-items: center;
		justify-content: space-around;
		cursor: pointer;
		border: 1px solid #0f62fe;
		border-radius: 6px;
		opacity: 8;
		font-family: 'Fredoka', sans-serif;
		& > img {
			width: 35%;
		}
	}
`
const AtlasianBox = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600&display=swap');
	width: 15.5%;
	height: auto;
	display: flex;
	align-items: center;
	justify-content: space-around;
	font-weight: bold;
	margin: 0 auto;
	margin-top: 5%;
	a {
		text-decoration: none;
		color: #0f62fe;
	}
	a > p {
		font-family: 'Titillium Web', sans-serif;
		font-size: 150%;
	}
	& img {
		width: 35px;
	}
`
export default Login
