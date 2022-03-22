import React from 'react'
import styled from 'styled-components'

const Backdrop = () => {
	return <Back />
}

const Back = styled.div`
	position: fixed;
	top: 0px;
	right: 0px;
	bottom: 0px;
	left: 0px;
	background: rgba(0, 0, 0, 0.4);
`

export default Backdrop
