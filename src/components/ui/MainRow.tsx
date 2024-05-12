import SelectButton from "./SelectButton";
import { flight } from "../../types/flightTypes";
import MainPrimaryRow from "./MainPrimaryRow";

function MainRow({ flight, i }: { flight: flight, i: number }) {
	return (
		<div
			key={Math.random()}
			className={`flex justify-between pb-2 ${i % 2 !== 0 ? "bg-gray-200  pb-2" : null
				} pb-2  border-red-600 border-b`}
		>
			<MainPrimaryRow flight={flight} />

			{/* PRICE SELECT */}
			<SelectButton price={flight.price} />
		</div>
	)
}

export default MainRow;
