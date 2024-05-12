function SelectButton({ price }: { price: string }) {

	console.log(price);

	return (
		<div className="flex flex-col justify-stretch items-center font-normal text-black">
			<p>{price}</p>
			<button className="bg-blue-950 rounded text-white font-semibold px-2 mt-1">
				SELECT
			</button>
		</div>
	)
}

export default SelectButton;
