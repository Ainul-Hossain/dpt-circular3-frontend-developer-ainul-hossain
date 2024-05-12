import { flight } from "../../types/flightTypes";

function UnitRow({ flight, i }: { flight: flight, i: number }) {

	const FLIGHT = flight.itineraries[0].segments[i].carrierCode + " " + flight.itineraries[0].segments[i].aircraft;
	const AIRCRAFT = flight.itineraries[0].segments[i].flightNumber;
	const CLASS = flight.class[0][i];
	const FARE = flight.fareBasis[0][0];
	const ROUTE = flight.itineraries[0].segments[i].departure.iataCode + '-' + flight.itineraries[0].segments[i].arrival.iataCode
	const DEPARTURE = flight.itineraries[0].segments[i].departure.at
	const ARRIVAL = flight.itineraries[0].segments[i].arrival.at
	const DURATION = flight.itineraries[0].duration;

	return (
		<div key={Math.random()} className="flex font-normal justify-between whitespace-nowrap px-5 text-black">
			<p className="w-full mr-10">
				{FLIGHT}
			</p>
			<p className="w-full mr-16">
				{AIRCRAFT}
			</p>
			<p className="w-full">{CLASS}</p>
			<p className="w-full">{FARE}</p>
			<p className="w-full">{ROUTE}</p>
			<p className="w-full  mr-5">{DEPARTURE}</p>
			<p className="w-full mr-5">{ARRIVAL}</p>
			<p className="w-full">---</p>
			<p className={`w-full ${i !== 0 ? 'invisible' : null}`}>{DURATION}</p>
		</div>
	)
}

export default UnitRow;
