import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import captionSlice from './captionSlice'

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		caption: captionSlice.reducer,
	},
})

export default store
