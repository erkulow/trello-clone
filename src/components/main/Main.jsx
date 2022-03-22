import React, { useState } from 'react'
import Coontainer from '../UI/Container'
import styled from 'styled-components'
import otmena from '../../assets/PNG/delete.png'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { captionActions } from '../store/captionSlice'
import CardParent from '../CardParent'

const Main = () => {
	const dispatch = useDispatch()

	const [createCaptin, setCreateCaption] = useState(false)
	const [inputValue, setInputValue] = useState('')

	const chanchHandler = (e) => {
		setInputValue(e.target.value)
	}

	const createCard = (e) => {
		e.preventDefault()
		if (inputValue.trim().length === 0) return
		dispatch(captionActions.addNewCard({ title: inputValue }))
		setInputValue('')
	}
	const createCaption = (e) => {
		e.preventDefault()
		setCreateCaption(true)
	}

	const content = createCaptin ? (
		<AddCaption>
			<input
				value={inputValue}
				onChange={chanchHandler}
				placeholder='Ввести заголовок списка'
				type='text'
				autoFocus
			/>
			<div>
				<button onClick={createCard}>Добавить список</button>
				<img
					onClick={() => {
						setCreateCaption(false)
					}}
					src={otmena}
					alt='icon'
				/>
			</div>
		</AddCaption>
	) : (
		<ButtonDiv onClick={createCaption}>
			<img src='https://img.icons8.com/ios-filled/50/ffffff/plus-math.png' />
			<p>Добавить список</p>
		</ButtonDiv>
	)

	return (
		<Coontainer>
			<React.Fragment>
				<MainForm>
					<CardParent/>
					{content}
				</MainForm>
			</React.Fragment>
		</Coontainer>
	)
}

const MainForm = styled.div`
	@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@500&display=swap');
	display: flex;
	justify-content: start;
	align-items: start;
	margin: 15px;
`
const ButtonDiv = styled.div`
	width: 275px;
	height: 40px;
	background: #787a79;
	border-radius: 3px;
	margin-right: 15px;
	display: flex;
	align-items: center;
	color: white;
	cursor: pointer;

	&:hover {
		opacity: 0.9;
	}
	img {
		margin-left: 13px;
		width: 20px;
	}
	p {
		margin-bottom: 2px;
	}
`
const AddCaption = styled.div`
	width: 275px;
	height: 80px;
	background: #ebecf0;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	border-radius: 3px;

	input {
		height: 33px;
		width: 265px;
		outline: none;
		border-radius: 3px;
		border-color: #0079bf;
		padding: 5px;
		margin: 0 auto;
	}
	div {
		width: 265px;
		height: 33px;
		display: flex;
		align-items: center;
		border: 3px;
		margin-left: 5px;
		button {
			width: 133px;
			height: 32px;
			background: #0079bf;
			border: none;
			border-radius: 3px;
			cursor: pointer;
			color: #ebecf0;
		}
		img {
			margin-left: 5px;
			cursor: pointer;
		}
	}
`

export default Main
