import React from 'react'
import styled from 'styled-components'
import Coontainer from '../UI/Container'
import Lupa from '../../assets/SVG/lupa.svg'

const Header = () => {
	return (
		<Coontainer>
			<HeaderDiv>
				<div className='block_for_icon_and_ul'>
					<img src='	https://a.trellocdn.com/prgb/dist/images/header-logo-spirit-loading.87e1af770a49ce8e84e3.gif' />
					<ul>
						<li>Рабочие пространства</li>
						<li>Недавние</li>
						<li>В избранном</li>
						<li>Шаблоны</li>
					</ul>
					<button>Создать</button>
				</div>
				<div>
					<div className='search'>
						<img src={Lupa} alt='' />
						<input placeholder='Search' type='search' />
					</div>
				</div>
			</HeaderDiv>
		</Coontainer>
	)
}
const HeaderDiv = styled.div`
	height: 55px;
	margin: 0 auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: #565958;
	.block_for_icon_and_ul {
		display: flex;
		justify-content: space-around;
		align-items: center;
		h1 {
			color: #ffffff;
		}
		ul {
			display: flex;
			padding: 35px;
			li {
				list-style: none;
				padding: 8px;
				margin: 10px;
				color: #ffffff;
				border-radius: 4px;
				&:hover {
					transition: 0.5s;
					background: #c0c0c0;
					color: black;
					cursor: pointer;
				}
			}
		}
		img {
			width: 95px;
			&:hover {
				cursor: pointer;
			}
		}
		h1 {
			font-size: 25px;
		}
		button {
			width: 75px;
			height: 32px;
			background: #787a79;
			color: #ffffff;
			border-radius: 6px;
			border: none;
			&:hover {
				background: #c0c0c0;
			}
		}
	}
	.search {
		display: flex;
		background: #787a79;
		width: 250px;
		height: 34px;
		border-radius: 6px;
		padding: 2px;
		input {
			background: none;
			border: none;
			outline: none;
			padding: 5px;
			font-size: 16px;
			&::placeholder {
				color: #ffffff;
			}
		}
		img {
			width: 30px;
		}
	}
`

export default Header
