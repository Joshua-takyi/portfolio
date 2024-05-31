import Image from "next/image";
import GetKey from "./getKey";
export default function Below() {
	return (
		<section className=" mx-auto flex lg:flex-row justify-center mt-28 space-x-4 items-center max-w-fit rounded-lg bg-slate-50 px-2 flex-col text-center lg:text-left lg:space-y-0 space-y-3">
			<Image src="/monetization.gif" width={200} height={200} alt="logo" />
			<div className="flex flex-col">
				<h3 className="font-bold ">Never Miss An Update!</h3>
				<p className="max-w-sm text-balance">
					Subscribe to our API newsletter for the latest in product news,
					endpoint updates, and inspiring community content.
				</p>
			</div>
			<GetKey />
		</section>
	);
}
