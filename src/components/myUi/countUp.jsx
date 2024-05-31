import Count from "./count";
export default function CountUp() {
	return (
		<>
			<div className="container mx-auto text-center space-y-3 lg:px-16 mt-5 lg:mt-16">
				<h2 className="lg:text-3xl font-bold text-[20px]">
					Powerful Crypto Data Api
				</h2>
				<p className="text-pretty text-[#cdc5bd] md:text-[20px]">
					Access real-time crypto price, market data, NFT floor prices, trading
					volume, trading pairs, metadata, historical data, and more with our
					crypto data API.
				</p>
			</div>
			<div>
				<Count />
			</div>
		</>
	);
}
