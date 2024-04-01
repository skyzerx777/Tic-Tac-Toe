import { createSlice } from '@reduxjs/toolkit';

interface SecondPlayerState {
	value: number[];
}

const initialState: SecondPlayerState = {
	value: [],
};

const secondPlayerSlice = createSlice({
	name: 'secondPlayerCells',
	initialState,
	reducers: {
		addCell: (state, action) => {
			state.value.push(action.payload);
		},
	},
});

export const { addCell } = secondPlayerSlice.actions;

export default secondPlayerSlice.reducer;
