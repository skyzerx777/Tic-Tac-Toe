import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

export default function Status() {
	const currentPlayer = useSelector((state: RootState) => state.currentPlayer);

	return (
		<div className='flex justify-around py-8 text-xl'>
			<p className={currentPlayer.value === 2 ? 'opacity-50 line-through' : ''}>
				Player 1: X
			</p>
			<p className={currentPlayer.value === 1 ? 'opacity-50 line-through' : ''}>
				Player 2: O
			</p>
		</div>
	);
}
