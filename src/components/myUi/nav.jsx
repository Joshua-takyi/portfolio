import Link from "next/link";
import { Press_Start_2P } from "next/font/google";
import { NavigationMenuDemo } from "./menu";
import { InputWithButton } from "./input";

const Press = Press_Start_2P({
	subsets: ["latin"],
	weight: "400",
	style: "normal",
});
export default function Nav() {
	return (
		<nav className="container mx-auto flex flex-row justify-between py-2 items-center lg:px-5">
			<div className="flex flex-row justify-between items-center space-x-4">
				<header className={Press.className}>
					<Link href="/">
						<h1 className="text-[1rem] font-bold text-primary lg:text-[1.2rem]">
							Await
						</h1>
					</Link>
				</header>
				<div className="lg:flex">
					<NavigationMenuDemo className="lg:block hidden" />
				</div>
			</div>
			<InputWithButton placeholder="Search" action="Search" type="text" />
		</nav>
	);
}
