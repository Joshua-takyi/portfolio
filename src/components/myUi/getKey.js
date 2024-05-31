"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
export default function GetKey() {
	const buttonVAriant = {
		hidden: {
			x: "-100dvw",
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 0.5,
			},
		},
		whileHover: {
			scale: 1.1,
			transition: {
				duration: 0.2,
			},
		},
		whileTap: {
			scale: 0.6,
			transition: {
				type: "spring",
				stiffness: "100",
			},
		},
	};
	return (
		<motion.div
			variants={buttonVAriant}
			whileHover="whileHover"
			whileTap="whileTap"
			initial="hidden"
			animate="visible"
		>
			<Link href="/">
				<Button className="border-b-green-900 lg:border-b-4" size="lg">
					Get api key now
				</Button>
			</Link>
		</motion.div>
	);
}
