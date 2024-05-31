"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function CardComponent({
	logo,
	description,
	name,
	title,
	headImage,
}) {
	const cardVariant = {
		whileHover: {
			scale: 1.1,
			color: "#FFC100",
			cursor: "pointer",
			transition: {
				type: "spring",
				duration: 1.3,
				ease: "easeInOut",
			},
		},
	};
	return (
		<div className="flex flex-col space-y-5 border-2 rounded-xl p-4 shadow-md bg-secondary">
			<div>
				<Image src={logo} width={60} height={40} alt={name} />
			</div>
			<p className="text-balance max-w-sm text-slate-500">{description}</p>
			<div className="flex flex-row p-3 space-x-4  ">
				<Image
					src={headImage}
					width={50}
					height={40}
					alt={name}
					className="rounded-full shadow-md"
				/>
				<div className="flex flex-col ">
					<motion.h2
						className="font-semibold"
						variants={cardVariant}
						whileHover="whileHover"
					>
						{name}
					</motion.h2>
					<p className="text-slate-600">{title}</p>
				</div>
			</div>
		</div>
	);
}
