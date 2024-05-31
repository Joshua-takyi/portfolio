import Image from "next/image";
import GetKey from "./getKey";
import Explore from "./exploreDocs";
export default function Hero() {
	return (
		<main className="container mx-auto flex lg:flex-row flex-col lg:mt-20 mt-5 lg:space-y-0 space-y-7 lg:justify-between lg:p-5">
			<div className="lg:w-1/2 flex flex-col lg:p-4 lg:space-y-3 items-center lg:items-start space-y-5 justify-center">
				<h1 className=" font-extrabold lg:text-[55px] text-balance text-[1.8rem] md:text-4xl leading-[37px] text-center md:leading-[45px] lg:text-left">
					The most reliable&nbsp;&
					<span className="text-primary">
						&#160; comprehensive Cryptocurrency
					</span>
					&#160; data api for traders and developers
				</h1>
				<div className="flex flex-row space-x-4">
					<GetKey />
					<Explore />
				</div>
			</div>
			<div className="lg:w-1/2 flex flex-row justify-center items-start">
				<Image
					src="/monetization.gif"
					width={500}
					height={500}
					alt="Bitcoin"
					priority="true"
				/>
			</div>
		</main>
	);
}
