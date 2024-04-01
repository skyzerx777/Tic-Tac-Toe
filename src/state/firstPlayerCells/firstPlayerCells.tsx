import { createSlice } from '@reduxjs/toolkit';

interface FirstPlayerState {
	value: number[];
}

const initialState: FirstPlayerState = {
	value: [],
};

const firstPlayerSlice = createSlice({
	name: 'firstPlayerCells',
	initialState,
	reducers: {
		addCell: (state, action) => {
			state.value.push(action.payload);
		},
	},
});

export const { addCell } = firstPlayerSlice.actions;

export default firstPlayerSlice.reducer;
