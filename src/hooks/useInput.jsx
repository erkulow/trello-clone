import { useState } from 'react'

const useInput = (validation) => {
	const [value, setValue] = useState('')
	const [inputTouched, setInputTouched] = useState(false)

	const valueIsValid = value.trim() !== ''
	const valueInputIsInValid = !valueIsValid && inputTouched

	const inputValidRegex = validation.test(value)
	const validateRejex = !validation.test(value) && inputTouched

	const isValidInput = valueInputIsInValid || validateRejex
	const isValidInputNoTouched = !validateRejex && !valueIsValid

	return {
		onChange: (e) => {
			setValue(e.target.value)
		},
		onBlur: () => {
			setInputTouched(true)
		},
		onClear: () => {
			setValue('')
			setInputTouched(false)
		},
		valueInputIsInValid,
		validateRejex,
		inputValidRegex,
		value,
		isValidInput,
		isValidInputNoTouched,
	}
}

export default useInput
