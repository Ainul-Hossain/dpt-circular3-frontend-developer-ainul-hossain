import { useState } from "react";

function Trip() {

	// 'One Way' set as default Trip State
	const [toggleTrip, setToggleTrip] = useState('One Way');

	// Trip state changes on click
	const handleToggleTrip = (e: string) => {
		setToggleTrip(e);
	}

	const tripState = ['Round Trip', 'One Way', 'Multi City'];

	return (
		<div className="m-10 flex justify-center text-black">
			<div className="flex justify-between border border-slate-900 rounded cursor-pointer">
				{
					tripState.map((trip) => (
						<div key={Math.random()} className={`w-35 p-1.5 px-5 ${trip === toggleTrip ? 'bg-blue-950 text-white' : null}`} onClick={() => handleToggleTrip(trip)}>
							<p className="font-semibold">{trip}</p>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Trip;
