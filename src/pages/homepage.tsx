import BackToTop from "../components/back-to-top/back-to-top";
import Experience from "../components/experiencs/experience";
import Footer from "../components/footer/footer";
import GetInTouch from "../components/get-in-touch/get-in-touch";
import Hero from "../components/hero/hero";
import Nav from "../components/navbar/nav";
import Projects from "../components/projects/projects";
import Stack from "../components/stack/stack";
import { WhatsAppButton } from "../components/whatsapp/whatsapp";

export default function HomePage() {
  return (
    <main>
      <Nav />
      <Hero />
      <Stack />
      <Projects />
      <Experience />
      <GetInTouch />
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </main>
  );
}
