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
			{/* <div className="flex flex-col flex-grow text-left"> */}
			<MainPrimaryRow flight={flight} />

			{/* <div className="flex font-normal justify-between whitespace-nowrap px-5  text-black">
					<p className="w-full mr-10">
						{flight.itineraries[0].segments[1]
							.carrierCode +
							" " +
							flight.itineraries[0].segments[1].aircraft}
					</p>
					<p className="w-full mr-16">
						{
							flight.itineraries[0].segments[0]
								.flightNumber
						}
					</p>
					<p className="w-full">{flight.class[0][1]}</p>
					<p className="w-full">{flight.fareBasis[0][1]}</p>
					<p className="w-full">
						{
							flight.itineraries[0].segments[1].departure
								.iataCode
						}{" "}
						-{" "}
						{
							flight.itineraries[0].segments[1].arrival
								.iataCode
						}
					</p>
					<p className="w-full mr-5">
						{
							flight.itineraries[0].segments[1].departure
								.at
						}
					</p>
					<p className="w-full mr-5">
						{flight.itineraries[0].segments[1].arrival.at}
					</p>
					<p className="w-full">---</p>
					<p className="invisible w-full">DURATION</p>
				</div> */}

			{/* <hr className="mt-2 border-red-200" />
			</div> */}

			{/* PRICE SELECT */}
			<SelectButton />
		</div>
	)
}

export default MainRow;
