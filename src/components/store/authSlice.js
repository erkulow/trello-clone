import { createSlice } from '@reduxjs/toolkit'

const Database = [
	{
		id: Math.random().toString(),
		email: 'erkulow@gmail.com',
		password: 'asd',
	},
	{
		id: Math.random().toString(),
		email: 'azamatov@gmail.com',
		password: 'zxc',
	},
	{
		id: Math.random().toString(),
		email: 'zhanybekov@gmail.com',
		password: 'qwe',
	},
]

const authSlice = createSlice({
	name: 'auth',
	initialState: { auth: false, errorMessege: '', pers: {} },

	reducers: {
		authHandler(state, action) {
			for (const el of Database) {
				if (
					el.email === action.payload.email &&
					el.password === action.payload.password
				) {
					state.auth = true
					state.pers = { ...el }
					state.errorMessege = 'ОК'
					break
				} else {
					state.auth = false
					state.errorMessege = 'Вас нет в данных !'
					state.pers = {}
				}
			}
		},
	},
})
export const authActions = authSlice.actions
export default authSlice
