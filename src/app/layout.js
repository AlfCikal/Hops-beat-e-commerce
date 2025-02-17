import { Geist, Geist_Mono, Poppins, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "900"],
	variable: "--font-poppins",
});

const notoSans = Noto_Sans({
	subsets: ["latin"],
	// weight: ["500", "600", "700", "900"],
	variable: "--font-noto-sans",
});

export const metadata = {
	title: "Hops Beat",
	description: "Fashion E-commerce",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} ${notoSans.variable} antialiased`}>
				<div className="h-24">
					<Navbar />
				</div>
				<div className="min-h-[calc(100vh-6rem)] overflow-x-hidden">{children}</div>
				<div className="">
					<Footer />
				</div>
			</body>
		</html>
	);
}
