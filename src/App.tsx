import { useState } from "react";

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

	return (
		<div
			className="w-screen h-screen bg-slate-200 relative"
			onClick={handleClick}
		>
			{list.map((item) => (
				<span
					style={{ top: item.clientY, left: item.clientX }}
					className="absolute w-2 h-2 block bg-red-800 rounded-full"
				/>
			))}
		</div>
	);
}
