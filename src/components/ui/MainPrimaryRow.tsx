import { flight } from "../../types/flightTypes";

function MainPrimaryRow({ flight }: { flight: flight }) {
	return (
		<div className="flex flex-col flex-grow text-left">
			{
				flight.itineraries[0].segments.map((_, i) => (
					<div className="flex font-normal justify-between whitespace-nowrap px-5 text-black">
						<p className="w-full mr-10">
							{flight.itineraries[0].segments[i]
								.carrierCode +
								" " +
								flight.itineraries[0].segments[i].aircraft}
						</p>
						<p className="w-full mr-16">
							{
								flight.itineraries[0].segments[i]
									.flightNumber
							}
						</p>
						<p className="w-full">{flight.class[0][i]}</p>
						<p className="w-full">{flight.fareBasis[0][0]}</p>
						<p className="w-full">
							{
								flight.itineraries[0].segments[i].departure
									.iataCode
							}{" "}
							-{" "}
							{
								flight.itineraries[0].segments[i].arrival
									.iataCode
							}
						</p>
						<p className="w-full  mr-5">
							{
								flight.itineraries[0].segments[i].departure
									.at
							}
						</p>
						<p className="w-full mr-5">
							{flight.itineraries[0].segments[i].arrival.at}
						</p>
						<p className="w-full">---</p>
						<p className={`w-full ${i !== 0 ? 'invisible' : null}`}>{flight.itineraries[0].duration}</p>
					</div>
				))
			}
			<hr className="mt-2 border-red-200" />
		</div>
	)
}

export default MainPrimaryRow;
