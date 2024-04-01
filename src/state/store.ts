import { configureStore } from '@reduxjs/toolkit';
import currentPlayerReducer from './currentPlayer/currentPlayerSlice';
import firstPlayerCellsReducer from './firstPlayerCells/firstPlayerCells.tsx';
import secondPlayerCellsReducer from './secondPlayerCells/secondPlayerCells.tsx';

export const store = configureStore({
	reducer: {
		currentPlayer: currentPlayerReducer,
		firstPlayerCells: firstPlayerCellsReducer,
		secondPlayerCells: secondPlayerCellsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
