export const Validation = (values) => {
	let errors = {}

	if (!values.email) {
		errors.email = 'Email is Required.'
	}
	if (!values.name) {
		errors.name = 'Name is Required.'
	}
	if (!values.password) {
		errors.password = 'Password is Required.'
	}
	if (!values.lastName) {
		errors.lastName = 'Last Name is Required.'
	}

	return errors
}
