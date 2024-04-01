import { useEffect, useRef, useState } from 'react';
import { FaRegCircle } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';

export default function Cell({
	changePlayer,
	number,
	playerNumber,
}: {
	changePlayer: () => void;
	number: number;
	playerNumber: number;
}) {
	const [isClicked, setIsClicked] = useState(false);
	const cellRef = useRef<HTMLDivElement>(null!);

	const handleClick = () => {
		if (!isClicked) {
			setIsClicked(true);
			changePlayer();
		}
	};

	useEffect(() => {
		cellRef?.current?.removeEventListener('click', handleClick);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isClicked]);

	return (
		<div
			ref={cellRef}
			onClick={handleClick}
			data-number={number}
			className={`w-1/3 h-[90px] flex justify-center items-center border-2 text-[#f7f7f7] text-[72px] border-[#f7f7f7a5] xxs:h-[120px] xxs:text-[124px] xs:h-[150px] sm:h-[170px] md:h-[200px] ${
				isClicked ? 'cursor-default' : 'cursor-pointer'
			}`}
		>
			{isClicked && playerNumber === 1 && <RxCross2 />}
			{isClicked && playerNumber === 2 && <FaRegCircle />}
		</div>
	);
}
