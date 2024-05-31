import Link from "next/link";
import Image from "next/image";
import { InputWithButton } from "./input";
export default function Footer() {
	return (
		<>
			<footer className="container mx-auto mt-10 px-10 flex lg:flex-row p-10 flex-col lg:space-y-0 space-y-10 bg-slate-200">
				<div className="lg:w-2/5 flex-col space-y-3 p-3">
					<Image
						src="/binance.svg"
						width={200}
						height={200}
						alt="footer logo"
					/>
					<p className="max-w-lg text-slate-400">
						CoinGecko provides a fundamental analysis of the crypto market. In
						addition to tracking price, volume and market capitalization,
						CoinGecko tracks community growth, open-source code development,
						major events and on-chain metrics.
					</p>
				</div>
				<div className="lg:w-1/5 flex flex-row justify-between">
					<div className="flex flex-col">
						<ul className="space-y-5 font-sans">
							<li className="font-bold text-slate-800">Resources</li>
							<li className="text-slate-500">Crypto News</li>
							<li className="text-slate-500">Bitcoin Treasury</li>
							<li className="text-slate-500">Crypto Heatmap</li>
							<li className="text-slate-500">Crypto API</li>
							<li className="my-7"></li>
							<li className="font-bold text-slate-800"> Donations</li>
							<li>Bitcoin</li>
							<li>Ethereum</li>
						</ul>
					</div>
				</div>
				<div className="lg:w-1/5 flex flex-row justify-between">
					<div className="flex flex-col">
						<ul className="space-y-5 font-sans">
							<li className="font-bold text-slate-800">About Await </li>
							<li className="text-slate-500">About Us</li>
							<li className="text-slate-500">
								Careers{" "}
								<span className="bg-primary rounded-full font-semibold py-2 px-1 text-black">
									Join Us
								</span>
							</li>
							<li className="text-slate-500">Company Blog</li>
							<li className="text-slate-500">Branding Guide</li>
							<li className="my-7"></li>
							<li className="font-bold text-slate-800"> Methodology</li>
							<li>Disclaimer</li>
							<li>Terms of Service</li>
							<li>Privacy Policy</li>
							<li>Ad Policy</li>
						</ul>
					</div>
				</div>
				<div className="lg:w-1/5 flex flex-row justify-between">
					<div className="flex flex-col">
						<ul className="space-y-5 font-sans">
							<li className="font-bold text-slate-800">Community</li>
							<li className="text-slate-500">X/Twitter</li>
							<li className="text-slate-500">Telegram Chat</li>
							<li className="text-slate-500">Telegram News</li>
							<li className="text-slate-500">Instagram</li>
							<li className="my-7"></li>
							<li className="font-bold text-slate-800"> Reddit</li>
							<li>Discord</li>
							<li>Facebook</li>
							<li>Youtube</li>
							<li>TikTok</li>
						</ul>
					</div>
				</div>
			</footer>
			<div className="container mx-auto flex lg:flex-row  py-5 flex-col flex-wrap space-y-3 lg:space-y-0 bg-slate-200">
				<div className="lg:w-3/5 p-2">
					<div className="flex flex-col">
						<p className="font-bold">
							Interested to stay up-to-date with cryptocurrencies?
						</p>
						<p className="text-slate-400">
							Get the latest crypto news, updates, and reports by subscribing to
							our free newsletter.
						</p>
					</div>
				</div>
				<div className="lg:w-2/5 flex lg:flex-row justify-end flex-col">
					<InputWithButton type="email" placeholder="email" action="submit" />
				</div>
			</div>
			<div className=" container mx-auto flex lg:flex-row justify-between py-5 items-center flex-col flex-wrap lg:space-y-0 space-y-3 bg-slate-200">
				<p className="text-muted-foreground">
					© 2024 CoinGecko. All Rights Reserved.
				</p>
				<div className="flex flex-row  space-x-2 items-center ">
					<Link href={"http://www.coingecko.com"}>
						<Image src="/google.svg" width={200} height={200} alt="playStore" />
					</Link>
					<Link href={"http://www.coingecko.com"}>
						<Image src="/apple.svg" width={200} height={200} alt="appStore" />
					</Link>
				</div>
			</div>
		</>
	);
}
