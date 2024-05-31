"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
export default function Explore() {
	const buttonRightVAriant = {
		hidden: {
			x: "-100dvw",
			opacity: 0,
		},
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 0.8,
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
			variants={buttonRightVAriant}
			whileHover="whileHover"
			whileTap="whileTap"
			initial="hidden"
			animate="visible"
		>
			<Link href="/">
				<Button variant="secondary" className="font-semibold">
					Explore Docs &gt;
				</Button>
			</Link>
		</motion.div>
	);
}
