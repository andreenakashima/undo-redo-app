import React, { useState } from "react";

interface ListProps {
	id: string;
	clientX: number;
	clientY: number;
}

export function App() {
	const [list, setList] = useState<ListProps[]>([]);
	const [removedList, setRemovedList] = useState<ListProps[]>([]);

	function handleAddDot(event: React.MouseEvent) {
		const newDot = {
			id: crypto.randomUUID(),
			clientX: event.clientX,
			clientY: event.clientY,
		};

		setList((prev) => [...prev, newDot]);
		setRemovedList([]);
	}

	function handleUndo(event: React.MouseEvent) {
		event.stopPropagation();

		if (list.length === 0) {
			return;
		}

		const lastItem = list[list.length - 1];
		setRemovedList((prev) => [...prev, lastItem]);

		setList((prev) => {
			const newArr = [...prev].slice(0, -1);
			return newArr;
		});
	}

	function handleRedo(event: React.MouseEvent) {
		event.stopPropagation();

		if (removedList.length === 0) {
			return;
		}

		const recoveredItem = removedList[removedList.length - 1];

		setRemovedList((prev) => {
			const newArr = [...prev].slice(0, -1);
			return newArr;
		});

		setList((prev) => [...prev, recoveredItem]);
	}

	return (
		<div
			className="w-screen h-screen bg-slate-200 relative"
			onClick={handleAddDot}
		>
			<div className="flex gap-2 p-4 justify-center items-center">
				<button
					onClick={handleUndo}
					className="px-4 py-2 bg-red-300 rounded text-red-900 font-semibold"
				>
					Desfazer
				</button>
				<button
					onClick={handleRedo}
					className="px-4 py-2 bg-cyan-300 rounded text-cyan-900 font-semibold"
				>
					Refazer
				</button>
			</div>
			{list.map((item) => (
				<div
					key={item.id}
					style={{ top: item.clientY, left: item.clientX }}
					className="absolute w-2 h-2 block bg-red-800 rounded-full"
				/>
			))}
		</div>
	);
}
