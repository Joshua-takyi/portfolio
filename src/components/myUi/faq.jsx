import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
	return (
		<>
			<div className="text-center font-bold text-lg:3xl text-2xl mt-10">
				Frequently Asked Questions
			</div>
			<div className="flex flex-col justify-center h-[100%]lg:p-14 lg:max-w-2xl mx-auto">
				<Accordion type="single" collapsible>
					{/*accordionItem this is the details */}
					<AccordionItem value="item-1" className="py-2 ">
						{/* *accordionTrigger this is the summary */}
						<AccordionTrigger>Is CoinGecko API free?</AccordionTrigger>
						<AccordionContent>
							CoinGecko API offers both free and paid plans. The Demo API plan
							is accessible to all CoinGecko users at zero cost, with a stable
							rate limit of 30 calls/min and a monthly cap of 10,000 calls. Paid
							plans start at $129/mo, offering a higher rate limit of 500
							calls/min and a monthly cap of 500,000 calls.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2" className="py-2 ">
						<AccordionTrigger>What is the CoinGecko API?</AccordionTrigger>
						<AccordionContent>
							You can connect or call the API through its RESTful JSON endpoints
							using HTTP requests. Select the relevant endpoints as listed on
							the API documentation, for your query.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-3" className="py-2 ">
						<AccordionTrigger>
							What are the rate limits for CoinGecko API?
						</AccordionTrigger>
						<AccordionContent>
							Traders, developers and projects commonly use CoinGecko API in
							their crypto web or mobile applications to show live crypto
							prices, market data, trading pairs and other metadata. These
							applications are not limited to: wallets, exchanges, portfolio
							screeners and trackers, trading or AI chat bots, crypto accounting
							platforms. Financial firms, professional traders and researchers
							rely on CoinGecko API to retrieve historical price data to conduct
							analyses and backtest trading strategies, track portfolio profit
							and loss, discover the latest trending coins and categories, and
							more. Check out our case studies!
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-4" className="py-2 ">
						<AccordionTrigger>
							Can I access on-chain data from CoinGecko API?
						</AccordionTrigger>
						<AccordionContent>
							Yes! Paid API subscribers can access on-chain DEX data through 20
							new endpoints on CoinGecko API. Key data sets include crypto
							liquidity pools, token data by contract address and OHLCV chart
							data. This data is powered by our sister product, GeckoTerminal,
							which monitors real-time crypto price, trading volume,
							transactions, liquidity and more, on over 900 DEXes across 120
							blockchain networks – including popular platforms like Uniswap,
							PancakeSwap, Orca, Curve, and Balancer.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-5" className="py-2 ">
						<AccordionTrigger>
							Can I get both live and historical crypto prices with CoinGecko
							API?
						</AccordionTrigger>
						<AccordionContent>
							Yes, you can get both live and historical crypto prices with
							CoinGecko API. For live prices, you can use endpoints like
							/simple/price or /coins/markets, which provide the real-time data
							for specified cryptocurrencies. For historical market data, you
							can use endpoints like /coins/id/market_chart or /coins/id
							/history.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</>
	);
}
