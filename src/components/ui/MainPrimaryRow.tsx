import { flight } from "../../types/flightTypes";
import UnitRow from "./UnitRow";

function MainPrimaryRow({ flight }: { flight: flight }) {
	return (
		<div className="flex flex-col flex-grow text-left">
			{
				flight.itineraries[0].segments.map((_, i) => (
					<UnitRow flight={flight} i={i} />
				))
			}

			{
				flight.itineraries[0].segments.length === 2 ? <hr className="mt-2 border-red-300" /> : null
			}
		</div>
	)
}

export default MainPrimaryRow;
