import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitThree, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
	return (
		<div className="mx-4">
			<Head>
				<title>
					Lic. María Fernanda Franco | Espacio de salud mental | Formosa, Arg.
				</title>
				<meta
					name="description"
					content="Lic. María Fernanda Franco | Espacio de salud mental | Formosa, Arg."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />
			<Hero />
			<SectionTitle
				pretitle="Espacio de salud mental"
				title="Lic. María Fernanda Franco"
			>
				Nextly is a free landing page & marketing website template for startups
				and indie projects. Its built with Next.js & TailwindCSS. And its
				completely open-source.
			</SectionTitle>
			<Benefits data={benefitOne} />
			<Benefits imgPos="right" data={benefitTwo} />
			<Benefits data={benefitThree} />
			<SectionTitle pretitle="Lic. María Fernanda Franco" title="Acerca de mi">
				Te dejo un breve video para que me conozcas
			</SectionTitle>
			<Video />
			{/* <SectionTitle
				pretitle="Testimonials"
				title="Here's what our customers said"
			>
				Testimonails is a great way to increase the brand trust and awareness.
				Use this section to highlight your popular customers.
			</SectionTitle> */}
			{/* <Testimonials /> */}
			<SectionTitle pretitle="Despeja tus dudas" title="Preguntas frecuentes">
				Answer your customers possible questions here, it will increase the
				conversion rate as well as support or chat requests.
			</SectionTitle>
			<Faq />
			<Cta />
			<Footer />
			<PopupWidget />
		</div>
	);
};

export default Home;
