import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFirst, setSecond } from '../state/currentPlayer/currentPlayerSlice';
import { addCell as addFirstPlayerCell } from '../state/firstPlayerCells/firstPlayerCells';
import { addCell as addSecondPlayerCell } from '../state/secondPlayerCells/secondPlayerCells';
import { RootState } from '../state/store';
import Cell from './Cell';
import Modal from './Modal';

const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export default function Board() {
	const [boardStatus, setBoardStatus] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
	const [winner, setWinner] = useState<number | null>(null);
	const [moveCounter, setMoveCounter] = useState(0);
	const currentPlayer = useSelector((state: RootState) => state.currentPlayer);
	const firstPlayerCells = useSelector(
		(state: RootState) => state.firstPlayerCells
	);
	const secondPlayerCells = useSelector(
		(state: RootState) => state.secondPlayerCells
	);
	const dispatch = useDispatch();

	const changePlayer = () => {
		if (currentPlayer.value === 2) {
			dispatch(setFirst());
		} else {
			dispatch(setSecond());
		}
	};

	const renderCells = () => {
		const cells = [];
		for (let i = 0; i < 9; i++) {
			cells.push(
				<Cell
					key={i}
					changePlayer={changePlayer}
					number={i}
					playerNumber={boardStatus[i]}
				/>
			);
		}
		return cells;
	};

	const changePlayersStatus = event => {
		setMoveCounter(prev => ++prev);
		const cellIndex = +event.target.dataset.number;
		if (boardStatus[cellIndex] === 0) {
			if (currentPlayer.value === 1) {
				dispatch(addFirstPlayerCell(cellIndex));
			} else {
				dispatch(addSecondPlayerCell(cellIndex));
			}
			setBoardStatus(
				boardStatus.map((item, index) => {
					if (cellIndex === index) {
						return currentPlayer.value;
					}
					return item;
				})
			);
		}
	};

	useEffect(() => {
		const firstPlayerCheck = winningCombinations.some(item => {
			return item.every(item => {
				return firstPlayerCells.value.includes(item);
			});
		});
		if (firstPlayerCheck) {
			setWinner(1);
		}

		const secondPlayerCheck = winningCombinations.some(item => {
			return item.every(item => {
				return secondPlayerCells.value.includes(item);
			});
		});

		if (secondPlayerCheck) {
			setWinner(2);
		}

		if (moveCounter === 9 && !firstPlayerCheck && !secondPlayerCheck) {
			setWinner(0);
		}
	}, [moveCounter]);

	const openModal = () => {
		if (winner !== null) {
			if (winner === 0) {
				return <Modal>Draw</Modal>;
			} else {
				return <Modal>Player {winner} wins!</Modal>;
			}
		}
	};

	return (
		<div
			onClick={changePlayersStatus}
			className='flex flex-wrap justify-center border border-[#f7f7f7] size-[270px] border-collapse select-none xxs:size-[360px] xs:size-[450px] sm:size-[510px] md:size-[600px]'
		>
			{renderCells()}
			{openModal()}
		</div>
	);
}
