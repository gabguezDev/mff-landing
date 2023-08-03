import { ThemeProvider } from "next-themes";

import localFont from "next/font/local";

export const adleryPro = localFont({
	src: [
		{ path: "../public/fonts/adlery-pro.regular.ttf", style: "regular" },
		{
			path: "../public/fonts/adlery-pro.blockletter.ttf",
			style: "blockLetter",
		},
		{ path: "../public/fonts/adlery-pro.swash.ttf", style: "swash" },
	],
	variable: "--font-adlery",
});

import "../css/tailwind.css";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute="class">
			<main className={`${adleryPro.variable}`}>
				<Component {...pageProps} />
			</main>
		</ThemeProvider>
	);
}

export default MyApp;
