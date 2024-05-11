import React from 'react';
import { useState } from "react";
import apiData from "../../JSON/apiData.json";
import SelectButton from './SelectButton';
import MainRow from './MainRow';
import MainPrimaryRow from './MainPrimaryRow';

function Form() {

	const [selectedOption, setSelectedOption] = useState("option1");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedOption(event.target.value);
	};

	const data = apiData;

	console.log(data);
	return (
		<form className="pb-5">
			<div className="flex gap-2 flex-col">
				<hr className="border-blue-600" />

				<div className="flex gap-2 justify-between mt-2">
					{/* LHR and CDG */}
					<div className="flex gap-2">
						<input
							type="text"
							placeholder="LHR"
							className="border border-gray-400 py-2 pl-5 placeholder-gray-700 font-semibold"
						/>
						<input
							type="text"
							placeholder="CDG"
							className="border bg-cyan-200 border-gray-400 py-2 pl-5 placeholder-gray-700 font-semibold"
						/>
						<input
							type="date"
							placeholder="Date"
							className="border border-gray-400 py-2 pl-5 placeholder-gray-700 font-semibold"
						/>
					</div>

					{/* Day */}
					<div className="flex w-3/4  justify-evenly gap-2 font-semibold">
						<select className="w-1/2 border">
							<option>Day -</option>
						</select>
						<select className="w-1/2 border">
							<option>Day +</option>
						</select>
						<select className="w-4/5 border">
							<option>Anytime</option>
						</select>
					</div>

					{/* ADT */}
					<div className="flex gap-2 justify-between font-semibold">
						<p className="text-3xl">+</p>

						<div className="flex justify-between gap-2">
							<select className="w-28 border">
								<option>ADT</option>
							</select>
							<select className="w-28 border">
								<option>1</option>
							</select>
						</div>

						<p className="text-3xl">-</p>
					</div>
				</div>

				<hr className="border-blue-600 mt-2" />

				<div className="flex mt-1 justify-between items-center">
					<div className="flex gap-2">
						<input type="checkbox" />
						<div className="text-xl font-semibold">Extra Options</div>
					</div>

					<div className="flex gap-2 text-xl font-semibold items-center">
						<p className="mr-2">Environment</p>

						<input
							type="radio"
							id="option1"
							name="options"
							value="option1"
							checked={selectedOption === "option1"}
							onChange={handleChange}
						// className="hidden"
						/>
						<label
							htmlFor="option1"
							className="inline-block py-2  rounded-lg cursor-pointer "
						>
							Option 1
						</label>

						<input
							type="radio"
							id="option2"
							name="options"
							value="option2"
							checked={selectedOption === "option2"}
							onChange={handleChange}
						// className="hidden"
						/>
						<label
							htmlFor="option2"
							className="inline-block py-2 rounded-lg cursor-pointer "
						>
							Option 2
						</label>
					</div>

					<button className="p-2 bg-blue-950 text-white rounded px-5 font-semibold text-xl">
						SEARCH
					</button>
				</div>

				<hr className="border-blue-600 mt-2" />

				<div className="mt-3">
					<p className="font-semibold text-xl">
						Data parsed successfully
					</p>

					{/* gap-[95px] */}
					<div className="flex border border-black items-center  mt-10 mb-2 py-5 px-5 justify-between font-semibold bg-gray-200 text-black">
						<p>FLIGHT</p>
						<p>AIRCRAFT</p>
						<p>CLASS</p>
						<p>FARE</p>
						<p>ROUTE</p>
						<p>DEPARTURE</p>
						<p>ARRIVAL</p>
						<p>DURATION</p>
						<p>PRICE</p>
					</div>

					<div className="flex flex-col">
						{apiData.flightOffer.map((flight, i) => {
							if (flight.itineraries[0].segments.length === 2) {
								return (
									<MainRow flight={flight} i={i} />
								);
							} else {
								return (
									<div
										className={`flex  justify-between pb-2 ${i % 2 !== 0 ? "bg-gray-200 pb-2" : null
											} border-red-600 border-b`}
									>
										{/* <div className="flex flex-col flex-grow text-left">
											<div className="flex font-normal whitespace-nowrap justify-between px-5 text-black">
												<p className="w-full mr-10">
													{flight.itineraries[0].segments[0]
														.carrierCode +
														" " +
														flight.itineraries[0].segments[0].aircraft}
												</p>
												<p className="w-full mr-16">
													{
														flight.itineraries[0].segments[0]
															.flightNumber
													}
												</p>
												<p className="w-full">{flight.class[0][0]}</p>
												<p className="w-full">{flight.fareBasis[0][0]}</p>
												<p className="w-full">
													{
														flight.itineraries[0].segments[0].departure
															.iataCode
													}{" "}
													-{" "}
													{
														flight.itineraries[0].segments[0].arrival
															.iataCode
													}
												</p>
												<p className="w-full mr-5">
													{
														flight.itineraries[0].segments[0].departure
															.at
													}
												</p>
												<p className="w-full mr-5">
													{flight.itineraries[0].segments[0].arrival.at}
												</p>
												<p className="w-full">---</p>
												<p className="w-full">{flight.itineraries[0].duration}</p>
											</div>

											<div className="flex font-normal whitespace-nowrap justify-between px-5 text-black">
												<p className="w-full mr-10">
													{flight.itineraries[0].segments[1]
														.carrierCode +
														" " +
														flight.itineraries[0].segments[1].aircraft}
												</p>
												<p className="w-full mr-16">
													{
														flight.itineraries[0].segments[1]
															.flightNumber
													}
												</p>
												<p className="w-full">{flight.class[0][1]}</p>
												<p className="w-full">{flight.fareBasis[0][0]}</p>
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
												<p className="invisible w-full">{flight.itineraries[0].duration}</p>
											</div>

											<div className="flex font-normal whitespace-nowrap justify-between px-5 text-black">
												<p className="w-full mr-10">
													{flight.itineraries[0].segments[2]
														.carrierCode +
														" " +
														flight.itineraries[0].segments[2].aircraft}
												</p>
												<p className="w-full mr-16">
													{
														flight.itineraries[0].segments[2]
															.flightNumber
													}
												</p>
												<p className="w-full">{flight.class[0][2]}</p>
												<p className="w-full">{flight.fareBasis[0][0]}</p>
												<p className="w-full">{flight.itineraries[0].segments[2].departure.iataCode} - {flight.itineraries[0].segments[2].arrival.iataCode}</p>
												<p className="w-full mr-5">{flight.itineraries[0].segments[2].departure.at}</p>
												<p className="w-full mr-5">{flight.itineraries[0].segments[2].arrival.at}</p>
												<p className="w-full">---</p>
												<p className="invisible w-full">{flight.itineraries[0].duration}</p>
											</div>
										</div> */}

										<MainPrimaryRow flight={flight} />

										{/* PRICE SELECT */}
										<SelectButton />
									</div>
								);
							}
						})}
					</div>
				</div>
			</div>
		</form>
	)
}

export default Form
