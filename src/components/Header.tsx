import Status from './Status';

export default function Header() {
	return (
		<header className='py-8 text-[#f7f7f7] font-bold'>
			<h1 className=' text-4xl text-center'>Tic Tac Toe</h1>
			<Status />
		</header>
	);
}
