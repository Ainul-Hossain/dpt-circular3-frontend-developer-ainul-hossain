export type flight = {
	itineraries: {
		segments: {
			departure: {
				iataCode: string;
				at: string;
			};
			arrival: {
				iataCode: string;
				at: string;
			};
			marketingCarrier: string;
			carrierCode: string;
			flightNumber: string;
			aircraft: string;
		}[];
		duration: string;
	}[];
	price: string;
	fareBasis: string[][];
	class: string[][];
	seat: string[][];
}