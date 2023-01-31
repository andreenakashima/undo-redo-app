import React, { useState } from "react";

interface ListProps {
	clientX: number;
	clientY: number;
}

export function App() {
	const [list, setList] = useState<ListProps[]>([]);

	function handleClick(event: React.MouseEvent) {
		const newDot = {
			clientX: event.clientX,
			clientY: event.clientY,
		};

		setList((prev) => [...prev, newDot]);
	}

	function handleUndo(event: React.MouseEvent) {
		event.stopPropagation();

		if (list.length === 0) {
			return;
		}

		setList((prev) => {
			const newArr = [...prev].slice(0, -1);
			return newArr;
		});
	}

	return (
		<div
			className="w-screen h-screen bg-slate-200 relative"
			onClick={handleClick}
		>
			<div className="flex p-4 justify-center items-center">
				<button
					onClick={handleUndo}
					className="px-4 py-2 bg-red-300 rounded text-red-900 font-semibold"
				>
					Undo
				</button>
			</div>
			{list.map((item) => (
				<span
					style={{ top: item.clientY, left: item.clientX }}
					className="absolute w-2 h-2 block bg-red-800 rounded-full"
				/>
			))}
		</div>
	);
}
