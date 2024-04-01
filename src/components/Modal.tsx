import { createPortal } from 'react-dom';

export default function Modal({ children }) {
	return createPortal(
		<div className='absolute z-50 size-full backdrop-blur-md'>
			<div className='absolute flex flex-col gap-y-6 justify-center items-center w-72 h-52 left-[calc(50%-144px)] top-[calc(50%-104px)] text-3xl text-[#f7f7f7] bg-[#272727] rounded-3xl border-2 xxs:w-96 xxs:left-[calc(50%-192px)] sm:w-[500px] sm:left-[calc(50%-250px)]'>
				{children}
				<button
					onClick={() => window.location.reload()}
					className='text-lg border-2 rounded py-1 px-2 bg-sky-600 hover:bg-sky-800 transition-colors duration-200'
				>
					New game
				</button>
			</div>
		</div>,
		document.querySelector('#modal')
	);
}
