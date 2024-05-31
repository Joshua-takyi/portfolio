import Image from "next/image";
import Link from "next/link";
export default function Article() {
	return (
		<>
			<section className="text-center  text-3xl font-bold p-4 mt-16">
				<h1>One API for All Crypto Market Data</h1>
			</section>
			<section className="flex flex-row  lg:container mx-auto md:p-9 flex-wrap-reverse">
				<div className="lg:w-1/2 flex flex-col space-y-5 px-10">
					<div className="border-l-4 border-l-primary lg:px-5 py-2 p-3">
						<div>
							<h2 className="font-bold ">Exclusive</h2>

							<p className="font-semibold text-slate-300">
								Independently sourced & aggregated data
							</p>
						</div>
						<ul className="space-y-4 lg:px-16 marker:text-slate-600 marker:text-[20px] list-disc  my-3 px-6">
							<li>
								Data for over 14,000+ cryptocurrencies such as Bitcoin, Ethereum
								tracked across over 1,000+ crypto exchanges like Binance,
								Crypto.com, and Kraken
							</li>
							<li>
								More than 2M+ tokens data tracked across 100+ blockchain
								networks and 800+ decentralised exchanges
							</li>
							<li>
								4022{" "}
								<Link
									href="http://www.nft.com"
									className="text-primary font-semibold"
								>
									NFT
								</Link>{" "}
								collections tracked across 22 marketplaces like Opensea,
								Looksrare and more!
							</li>
						</ul>
					</div>
					<div className="border-l-4 border-l-primary px-5 py-2">
						<div>
							<h2 className="font-bold ">Reliable</h2>

							<p className="font-semibold text-slate-300">
								Solid team of cryptocurrency specialists working hard to bring
								top notch cryptocurrency data
							</p>
						</div>
						<ul className="space-y-4 lg:px-16 marker:text-slate-600 marker:text-[20px] list-disc  my-3 px-6">
							<li>In operation since early 2014</li>
							<li>99.9% uptime</li>
							<li>
								Battle-tested with strong industry collaborations & product
								dogfooding
							</li>
							<li>
								24x7 operation support working around the clock the ensure
								timely data update
							</li>
						</ul>
					</div>
					<div className="border-l-4 border-l-primary px-5 py-2">
						<div>
							<h2 className="font-bold ">Comprehensive</h2>

							<p className="font-semibold text-slate-300">
								All the info you’ll ever need at your fingertips
							</p>
						</div>
						<ul className="space-y-4 lg:px-16 marker:text-slate-600 marker:text-[20px] list-disc  my-3 px-6">
							<li>Over 70+ endpoints with more coming soon!</li>
							<li>
								Comprehensive real-time and historical data across{" "}
								<Link
									href="http://www.crytpo.com"
									className="text-primary font-semibold"
								>
									all cryptocurrency
								</Link>{" "}
								categories
							</li>
							<li>
								4022{" "}
								<Link
									href="http://www.nft.com"
									className="text-primary font-semibold"
								>
									NFT
								</Link>
								collections tracked across 22 marketplaces like Opensea,
								Looksrare and more!
							</li>
						</ul>
					</div>
				</div>
				<div className="lg:w-1/2">
					<Image src="/server.jpg" width={700} height={500} alt="server" />
				</div>
			</section>
		</>
	);
}
