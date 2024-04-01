import { createSlice } from '@reduxjs/toolkit';

interface CurrentPlayerState {
	value: number;
}

const initialState: CurrentPlayerState = {
	value: 1,
};

const currentPlayerSlice = createSlice({
	name: 'currentPlayer',
	initialState,
	reducers: {
		setFirst: state => {
			state.value = 1;
		},
		setSecond: state => {
			state.value = 2;
		},
	},
});

export const { setFirst, setSecond } = currentPlayerSlice.actions;

export default currentPlayerSlice.reducer;
