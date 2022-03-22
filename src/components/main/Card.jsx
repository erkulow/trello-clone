import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { captionActions } from '../store/captionSlice'
import Modal from '../UI/Modal'

const Card = ({ title, id, tasks }) => {
	const dispatch = useDispatch()
	const modal = useSelector((state) => state.caption.showModal)
	const [cardCahnge, setcardCahnge] = useState(false)
	const addTeaxtareHandler = (e) => {
		e.preventDefault()
		setcardCahnge(true)
	}

	const hideModal = () => {
		dispatch(captionActions.hideModal())
	}

	const [textValue, setTextValue] = useState('')

	const textChangHandler = (e) => {
		setTextValue(e.target.value)
	}

	const addTextHandler = (id) => {
		if (textValue.trim().length === 0) return
		dispatch(captionActions.addText({ task: textValue, id: id }))
		setTextValue('')
	}
	return (
		<>
			{modal ? (
				<Modal id={id} onClick={hideModal} />
			) : (
				<CardToDo>
					<CardHeader>
						<span>{title}</span>
						<button id={id}>
							<img src='https://img.icons8.com/material-rounded/24/000000/filled-trash.png' />
						</button>
					</CardHeader>
					{tasks.map((el) => (
						<TaskDiv
							onClick={() => {
								dispatch(captionActions.showModal())
							}}
							key={el.id}
						>
							<p>{el.task}</p>
						</TaskDiv>
					))}
					<CardFooter>
						{cardCahnge ? (
							<>
								<AddCaption>
									<input
										onChange={textChangHandler}
										value={textValue}
										placeholder='Ввести заголовок списка'
										type='text'
										autoFocus
									/>
									<div>
										<button
											onClick={() => addTextHandler(id)}
										>
											Добавить список
										</button>
										<img
											onClick={() => {
												setcardCahnge(false)
											}}
											src='https://img.icons8.com/ios/50/000000/delete-sign--v1.png'
											alt='icon'
										/>
									</div>
								</AddCaption>
							</>
						) : (
							<>
								<button
									type='button'
									onClick={addTeaxtareHandler}
								>
									+ Добавить карточку
								</button>
								<img src='https://img.icons8.com/external-others-iconmarket/64/000000/external-galery-navigation-others-iconmarket-3.png' />
							</>
						)}
					</CardFooter>
				</CardToDo>
			)}
		</>
	)
}
const CardToDo = styled.div`
	width: 280px;
	height: auto;
	background: #ebecf0;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	border-radius: 3px;
	margin-right: 15px;
	padding: 5px;
`
const CardHeader = styled.div`
	margin: 0;
	width: 275px;
	display: flex;
	justify-content: space-between;
	padding: 5px;
	img {
		width: 18px;
	}
	button {
		border: none;
		width: 30px;
		cursor: pointer;
		padding: 3px;
		border-radius: 4px;
		background: none;
		&:hover {
			background: #c0c0c0;
		}
	}
`
const CardFooter = styled.div`
	margin: 0;
	width: 275px;
	display: flex;
	justify-content: space-between;
	padding: 5px;
	button {
		width: 228px;
		height: 28px;
		color: #5e6c84;
		cursor: pointer;
		border: none;
		border-radius: 3px;
		background: none;
		&:hover {
			background: #c0c0c0;
		}
	}
	img {
		width: 25px;
		cursor: pointer;
		border-radius: 4px;
		opacity: 0.7;
		&:hover {
			opacity: 0.9;
		}
	}
`
const TaskDiv = styled.div`
	width: 265px;
	height: 32px;
	background: white;
	margin-top: 5px;
	margin-left: 5px;
	border-radius: 4px;
	padding: 4px;
	cursor: pointer;
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
		margin: 0 auto;
		margin-right: 5px;
		height: 33px;
		width: 265px;
		outline: none;
		border-radius: 3px;
		border: none;
		padding: 5px;
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

export default Card
