import Explore from "./exploreDocs";
import GetKey from "./getKey";

export default function Sub() {
	return (
		<section className="md:container mx-auto flex flex-col  text-center md:px-2 px-4 mt-8">
			<h1 className=" md:text-4xl text-2xl text-[1.8rem] font-extrabold lg:mt-15 lg:text-[40px] text-pretty text-center mt-10 my-4">
				Supercharge your project <br /> with
				<span className="text-primary p-2">Await API</span>
			</h1>
			<p className="text-slate-400 px-4 my-3">
				Unlock more possibilities with reliable, accurate and comprehensive
				crypto price data.
			</p>
			<div className="flex flex-row space-x-5 justify-center px-4">
				<GetKey />
				<Explore />
			</div>
		</section>
	);
}
