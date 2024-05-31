"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Companies() {
	const divisionVariant = {
		whileHover: {
			scale: [1.1, 1],
			transition: {
				type: "spring",
				duration: 1.3,
				ease: "easeInOut",
			},
		},
	};
	return (
		<>
			<h2 className="text-center font-semibold text-[#cdc5bd] lg:text-[20px]">
				Trusted by Thousands of Industry Builders
			</h2>
			<div className="  grid md:grid-cols-3 grid-cols-2 space-y-5  lg:gap-y-10 my-4 lg:p-10  items-center   gap-5 justify-items-center  p-3">
				<motion.div
					className="drop-shadow-md"
					variants={divisionVariant}
					whileHover="whileHover"
				>
					<Link href="/">
						<Image
							src={"/bitfinex.svg"}
							width={100}
							height={20}
							alt="binance"
							className="drop-shadow-md lg:min-w-[200px]"
						/>
					</Link>
				</motion.div>
				<motion.div
					className="drop-shadow-md"
					variants={divisionVariant}
					whileHover="whileHover"
				>
					<Link href="/">
						<Image
							src={"/binance.svg"}
							width={100}
							height={20}
							alt="binance"
							className="drop-shadow-md lg:min-w-[200px]"
						/>
					</Link>
				</motion.div>
				<motion.div
					className="drop-shadow-md"
					variants={divisionVariant}
					whileHover="whileHover"
				>
					<Link href="/">
						<Image
							src={"/enjin-coin.svg"}
							width={70}
							height={20}
							alt="binance"
							className="drop-shadow-md lg:min-w-[100px]"
						/>
					</Link>
				</motion.div>
				<motion.div
					className="drop-shadow-md"
					variants={divisionVariant}
					whileHover="whileHover"
				>
					<Link href="/">
						<Image
							src={"/hitbtc-logo.svg"}
							width={70}
							height={20}
							alt="binance"
							className="drop-shadow-md lg:min-w-[100px]"
						/>
					</Link>
				</motion.div>
				<motion.div
					className="drop-shadow-md"
					variants={divisionVariant}
					whileHover="whileHover"
				>
					<Link href="/">
						<Image
							src={"/zb-1.svg"}
							width={70}
							height={20}
							alt="binance"
							className="drop-shadow-md lg:min-w-[100px]"
						/>
					</Link>
				</motion.div>
				<motion.div
					className="drop-shadow-md"
					variants={divisionVariant}
					whileHover="whileHover"
				>
					<Link href="/">
						<Image
							src={"/coinex.svg"}
							width={100}
							height={20}
							alt="binance"
							className="drop-shadow-md lg:min-w-[200px]"
						/>
					</Link>
				</motion.div>
			</div>
		</>
	);
}
