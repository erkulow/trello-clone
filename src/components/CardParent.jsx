import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Card from './main/Card'

const CardParent = () => {
	const { items } = useSelector((state) => state.caption)
	return (
		<CartParentDiv>
			{items.map((el) => (
				<Card
					key={el.id}
					title={el.title}
					id={el.id}
					tasks={el.todos}
				/>
			))}
		</CartParentDiv>
	)
}
const CartParentDiv = styled.div`
	display: flex;
	align-items: flex-start;
`

export default CardParent
