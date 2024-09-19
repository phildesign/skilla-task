import { configureStore } from '@reduxjs/toolkit';
import callListReducer from './slices/callListDataSlice';

const store = configureStore({
	reducer: {
		callList: callListReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
