import Article from "@/components/myUi/articleSection";
import Below from "@/components/myUi/belowSub";
import Cards from "@/components/myUi/cards";
import CountUp from "@/components/myUi/countUp";
import AccordionDemo from "@/components/myUi/faq";
import Hero from "@/components/myUi/heroSection";
import Companies from "@/components/myUi/slide";
import Sub from "@/components/myUi/subscribe";
import Footer from "@/components/myUi/footer";
export default function Home() {
	return (
		<div>
			<Hero />
			<Companies />
			<CountUp />
			<Article />
			<Cards />
			<AccordionDemo />
			<Sub />
			<Below />
			<Footer />
		</div>
	);
}
