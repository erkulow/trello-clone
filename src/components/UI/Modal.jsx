import React from 'react'
import 'animate.css'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import Backdrop from './Backdrop'
const buttonForChange = [
	{
		id: 1,
		title: 'Участники',
		icon: 'https://img.icons8.com/ios-glyphs/30/000000/user--v1.png',
	},
	{
		id: 2,
		title: 'Мекти',
		icon: 'https://img.icons8.com/small/30/000000/add-tag.png',
	},
	{
		id: 3,
		title: 'Чек-лист',
		icon: 'https://img.icons8.com/ios/60/000000/checked-checkbox--v1.png',
	},
	{
		id: 4,
		title: 'Даты',
		icon: 'https://img.icons8.com/ios/60/000000/clock--v1.png',
	},
	{
		id: 5,
		title: 'Архирировать',
		icon: 'https://img.icons8.com/material-outlined/60/000000/filled-trash.png',
	},
]

const Modal = (props) => {
	return ReactDOM.createPortal(
		<>
			<ModalDiv>
				<LeftDiv>
					<Header>
						<h2>Bars</h2>
						<p>В колонке - </p>
					</Header>
					<h3>Описание</h3>
					<textarea placeholder='Добавить более подробное описание...'></textarea>
					<button onClick={props.onClick}>Cencel</button>
				</LeftDiv>
				<Main>
					<h2>{new Date().toLocaleDateString()}</h2>
					{buttonForChange.map((el) => (
						<button key={el.id}>
							<img src={el.icon} alt='' />
							<p>{el.title}</p>
						</button>
					))}
				</Main>
			</ModalDiv>
			<Backdrop />
		</>,
		document.getElementById('modal'),
	)
}
const ModalDiv = styled.div`
	margin: 0 auto;
	width: 600px;
	background-color: #f4f5f7;
	border: 2px solid grey;
	padding: 5px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	border-radius: 5px;
	position: relative;
	z-index: 100;
	animation: modalAnimation 2s ease 50ms 1 normal backwards;
	@keyframes modalAnimation {
		0% {
			animation-timing-function: ease-in;
			opacity: 1;
			transform: translateY(45px);
		}

		24% {
			opacity: 1;
		}

		40% {
			animation-timing-function: ease-in;
			transform: translateY(24px);
		}

		65% {
			animation-timing-function: ease-in;
			transform: translateY(12px);
		}

		82% {
			animation-timing-function: ease-in;
			transform: translateY(6px);
		}

		93% {
			animation-timing-function: ease-in;
			transform: translateY(4px);
		}

		25%,
		55%,
		75%,
		87% {
			animation-timing-function: ease-out;
			transform: translateY(0px);
		}

		100% {
			animation-timing-function: ease-out;
			opacity: 1;
			transform: translateY(0px);
		}
	}
`
const LeftDiv = styled.div`
	display: flex;
	flex-direction: column;
	textarea {
		display: flex;
		align-items: flex-end;
		height: 140px;
		border-radius: 4px;
		resize: none;
		padding: 10px 15px;
		outline: none;
		background: #eaecf0;
		font-size: 14px;
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
	}
	button {
		display: flex;
		align-items: flex-end;
		margin-top: 18px;
		padding: 10px;
		background: #eaecf0;
		height: 44px;
		border: none;
		border-radius: 4px;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		&:hover {
			background-color: silver;
			transition: 0.5s;
		}
	}
`
const Header = styled.header`
	display: flex;
	flex-direction: column;
	width: 350px;
	border-radius: 4px;
	padding: 2px;
	h2 {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
`
const Main = styled.main`
	display: flex;
	flex-direction: column;
	h2 {
		margin: 0 auto;
	}
	button {
		width: 220px;
		padding: 10px;
		display: flex;
		align-items: center;
		justify-content: start;
		background-color: #091e420a;
		margin-top: 5px;
		border: none;
		border-radius: 4px;
		&:hover {
			background: silver;
			transition: 0.5s;
		}
		p {
			font-family: Arial, Helvetica, sans-serif;
			font-size: 15px;
			margin: 0 auto;
		}
		img {
			width: 25px;
		}
	}
`
export default Modal
