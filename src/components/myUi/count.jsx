"use client";
import { useState, useEffect } from "react";
export default function Count() {
	const [count, setCount] = useState(0);
	const [first, setFirst] = useState(0);
	const [second, setSecond] = useState(0);

	useEffect(() => {
		const increment = async () => {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			let start = count;
			const end = start + 10; // Increment by 10 for example
			const duration = 1000; // Duration over which to count up in milliseconds

			const stepTime = duration / (end - start);
			const interval = setInterval(() => {
				start += 1;
				setCount(start);
				if (start >= end) {
					clearInterval(interval);
				}
			}, stepTime);
		};
		increment();
	}, []);
	useEffect(() => {
		const increment = async () => {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			let start = first;
			const end = start + 2; // Increment by 10 for example
			const duration = 500; // Duration over which to count up in milliseconds

			const stepTime = duration / (end - start);
			const interval = setInterval(() => {
				start += 1;
				setFirst(start);
				if (start >= end) {
					clearInterval(interval);
				}
			}, stepTime);
		};
		increment();
	}, []);
	useEffect(() => {
		const increment = async () => {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			let start = second;
			const end = start + 70; // Increment by 10 for example
			const duration = 1000; // Duration over which to count up in milliseconds

			const stepTime = duration / (end - start);
			const interval = setInterval(() => {
				start += 1;
				setSecond(start);
				if (start >= end) {
					clearInterval(interval);
				}
			}, stepTime);
		};
		increment();
	}, []);

	return (
		<div className="md:flex container mx-auto md:flex-row gap-10 px-20  mt-10 md:items-center  lg:justify-around justify-center flex-col lg:space-y-1 space-y-6 md:text-left items-center text-center py-[20px]">
			<div className="md:w-1/3 flex flex-col p-2 space-y-3  justify-center items-center">
				<p className="  text-6xl text-primary font-bold">
					{count}&nbsp;<span className="lg:text-4xl text-2xl">Billion+</span>
				</p>
				<p className="text-[#cdc5bd] font-semibold">calls per month</p>
			</div>
			<div className="md:w-1/3 flex flex-col p-2 space-y-3  ">
				<p className=" text-6xl text-primary font-bold">
					{first}&nbsp;<span className="lg:text-4xl text-2xl">Million+</span>
				</p>
				<p className="text-[#cdc5bd] font-semibold">coins</p>
			</div>
			<div className="md:w-1/3 flex flex-col p-2 space-y-3  ">
				<p className="   text-6xl text-primary font-bold">
					{count}&nbsp;<span className="lg:text-4xl text-2xl">years+</span>
				</p>
				<p className="text-[#cdc5bd] font-semibold">Historical data</p>
			</div>
		</div>
	);
}
