import React from 'react';
import { useState } from "react";
import apiData from "../../JSON/apiData.json";
import SelectButton from './SelectButton';
import MainRow from './MainRow';
import MainPrimaryRow from './MainPrimaryRow';

function Form() {

	// State for Environment Options
	const [selectedOption, setSelectedOption] = useState("option1");

	// State Handler for Environment Options
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedOption(event.target.value);
	};

	// JSON API Data parsing state
	const [parseData, setParseData] = useState(false);

	// Data Parsing only become true when user submit the form [Search Button]
	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		setParseData(true);
	};

	return (
		<form className="pb-5" onSubmit={(e) => handleSubmit(e)}>
			<div className="flex gap-2 flex-col">
				<hr className="border-blue-600" />

				{/* LHR, DAY and ADT Portion */}
				<div className="flex gap-2 justify-between mt-2">
					{/* LHR, CDG and Date */}
					<div className="flex gap-2 ">
						<input
							type="text"
							placeholder="LHR"
							className="w-36 border border-black py-2 pl-5 placeholder-gray-700 font-semibold"
						/>
						<input
							type="text"
							placeholder="CDG"
							className="w-36 border bg-cyan-200 border-black py-2 pl-5 placeholder-gray-700 font-semibold"
						/>
						<input
							type="date"
							placeholder="Date"
							className="w-40 border border-black py-2 pl-5 placeholder-gray-700 font-semibold"
						/>
					</div>

					{/* Day */}
					<div className="flex flex-grow  justify-evenly gap-2 font-semibold">
						<select className="w-1/2 border border-black">
							<option>Day -</option>
						</select>
						<select className="w-1/2 border border-black">
							<option>Day +</option>
						</select>
						<select className="w-4/5 border border-black">
							<option>Anytime</option>
						</select>
					</div>

					{/* ADT */}
					<div className="flex gap-2 justify-between font-semibold">
						<p className="text-3xl">+</p>

						<div className="flex justify-between gap-2">
							<select className="w-28 border border-black">
								<option>ADT</option>
							</select>
							<select className="w-28 border border-black">
								<option>1</option>
							</select>
						</div>

						<p className="text-3xl">+</p>
					</div>
				</div>

				<hr className="border-blue-600 mt-2" />

				{/* Extra Options, Environment and SEARCH Button */}
				<div className="flex mt-1 justify-between items-center">
					{/* Extra Options Checkbox */}
					<div className="flex gap-2">
						<input type="checkbox" />
						<div className="text-xl font-semibold">Extra Options</div>
					</div>

					{/* Environment Options */}
					<div className="flex gap-4 text-xl font-semibold items-center">
						<p className="">Environment</p>

						<div>
							<input
								type="radio"
								id="option1"
								name="options"
								value="option1"
								checked={selectedOption === "option1"}
								onChange={handleChange}
								className='mr-2'
							/>
							<label
								htmlFor="option1"
								className="cursor-pointer "
							>
								Dummy
							</label>
						</div>

						<div>
							<input
								type="radio"
								id="option2"
								name="options"
								value="option2"
								checked={selectedOption === "option2"}
								onChange={handleChange}
								className='mr-2'
							/>
							<label
								htmlFor="option2"
								className="cursor-pointer "
							>
								PDT
							</label>
						</div>
					</div>

					{/* Button for Submit the form, after submitting form parsed data will appear */}
					<button type='submit' className="p-2 px-3 bg-blue-950 text-white rounded font-semibold">
						SEARCH
					</button>
				</div>

				<hr className="border-blue-600 mt-2" />

				{/* Here is the Parsed Data */}
				{
					parseData ?
						(
							<div className="mt-3">
								<p className="font-semibold text-xl">
									Data parsed successfully
								</p>

								{/* Form Table Header */}
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
												<MainRow key={Math.random()} flight={flight} i={i} />
											);
										} else {
											return (
												<div
													key={Math.random()}
													className={`flex  justify-between pb-2 ${i % 2 !== 0 ? "bg-gray-200 pb-2" : null
														} border-red-600 border-b`}
												>
													<MainPrimaryRow flight={flight} />

													{/* PRICE SELECT */}
													<SelectButton price={flight.price} />
												</div>
											);
										}
									})}
								</div>
							</div>
						) : null
				}

			</div>
		</form>
	)
}

export default Form
