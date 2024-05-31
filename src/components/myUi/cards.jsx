import CardComponent from "./cardcomponent";

export default function Cards() {
	return (
		<section className="flex flex-col lg:container mx-auto px-10 lg:mt-16 flex-wrap">
			<h2 className="font-bold text-3xl text-center mt-5">
				Why Web3 Projects Use Await
			</h2>
			<div className="lg:flex grid grid-cols-1 place-items-center lg:flex-row justify-between space-y-4 lg:space-y-0  mt-10 lg:p-10  lg:space-x-5">
				<div className="lg:w-1/3">
					<CardComponent
						logo="/mazda-2.svg"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut veritatis temporibus officiis, officia hic veniam aspernatur, blanditiis vel praesentium ipsam tenetur velit earum "
						headImage="/second.jpg"
						name="Andrey Balyasnikov"
						title="CTO, Zerion"
					/>
				</div>
				<div className="lg:w-1/3">
					<CardComponent
						logo="/bugatti-eb.svg"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut veritatis temporibus officiis, officia hic veniam aspernatur, blanditiis vel praesentium ipsam tenetur velit earum "
						headImage="/first.jpg"
						name="Matthew Tan"
						title="CEO, Exec"
					/>
				</div>
				<div className="lg:w-1/3">
					<CardComponent
						logo="/saab-1.svg"
						description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut veritatis temporibus officiis, officia hic veniam aspernatur, blanditiis vel praesentium ipsam tenetur velit earum "
						headImage="/third.jpg"
						name="Joe Grech"
						title="Founder of FanMarketCap"
					/>
				</div>
			</div>
		</section>
	);
}
