import axios from 'axios';
import { RootState } from '../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ICallListData } from '../../interfaces/callList.interface';

const initialState: ICallListData = {
	results: [],
	total_rows: '',
};

const token = 'testtoken';

const instance = axios.create({
	baseURL: 'https://api.skilla.ru/mango',
	headers: { Authorization: `Bearer ${token}` },
});

export const fetchData = createAsyncThunk('callList/fetchData', async (_, { rejectWithValue }) => {
	try {
		const response = await instance.post('/getList');
		return response.data;
	} catch (error) {
		return rejectWithValue(error);
	}
});

export const callListDataSlice = createSlice({
	name: 'callList',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchData.fulfilled, (state, { payload }: { payload: ICallListData }) => {
			state.total_rows = payload.total_rows;
			state.results = payload.results;
		});
	},
});

export const callListDataSelector = (state: RootState) => state.callList;

export default callListDataSlice.reducer;
