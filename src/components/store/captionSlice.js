import { createSlice } from '@reduxjs/toolkit'

const captionSlice = createSlice({
	name: 'caption',
	initialState: {
		items: [],
		showModal : false
	},
	reducers: {
		addNewCard(state, action) {
			state.items.push({
				id: Math.random().toString(),
				title: action.payload.title,
				todos: [],
			})
		},
		addText(state, action) {
			console.log(action.payload)
			state.items = state.items.map((el) => {
				if (el.id === action.payload.id) {
					el.todos = [
						...el.todos,
						{
							task: action.payload.task,
							id: Math.random().toString(),
						},
					]
				}
				return el
			})
		},
		showModal(state){
			state.showModal = true
		},
		hideModal(state){
			state.showModal = false
		}
	},
})

export const captionActions = captionSlice.actions
export default captionSlice
