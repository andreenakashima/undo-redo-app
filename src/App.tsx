export function App() {
	function handleClick(event) {
		console.log(event);
	}

	return (
		<div
			className="w-screen h-screen bg-slate-200 relative"
			onClick={handleClick}
		>
			<span className="absolute top-32 left-32 w-2 h-2 block  bg-red-800 rounded-full" />
		</div>
	);
}
