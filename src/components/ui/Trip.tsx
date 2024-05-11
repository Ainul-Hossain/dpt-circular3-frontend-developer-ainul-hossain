function Trip() {
	return (
		<div className="m-10 flex justify-center text-black">
			<div className="flex justify-between border border-slate-900 rounded">
				<div className="w-35 p-1.5 px-5">
					<p>Round Trip</p>
				</div>
				<div className="bg-blue-950 w-35 text-white p-1.5 px-5">
					<p>One Way</p>
				</div>
				<div className="w-35 p-1.5 px-5">
					<p>Multi City</p>
				</div>
			</div>
		</div>
	)
}

export default Trip;
