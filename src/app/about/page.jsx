"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
	return (
		<div className="min-h-screen bg-gray-100 justify-between flex flex-col text-gray-800">
			{/* Company Story */}
			<section className="py-16">
				<motion.div
					className="container mx-auto px-6 md:px-16"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.3 }}
				>
					<div className="text-3xl font-bold mb-6 text-center w-full h-24 relative">
						<Image src="./logo2.svg" alt="logo" fill className="object-fit" />
					</div>
					<p className="text-lg text-gray-600 leading-relaxed text-justify">
						Hops Beat is a brand fashion for a men's, founded in Bandung since 2024. Hops beat was born from a
						combination of music and culture, seen in the logo we use is a leaf which is one of the symbols of culture
						in Ireland, namely Irish, the word HOPS is a fruit or flower that is used to balance or make flavors in a
						place of drinks that are intertwined with Irish culture, hops beat is a fashion brand influenced by pop
						subculture and military fashion and the music industry.
					</p>
					<p className="mt-4 text-lg text-gray-600 leading-relaxed text-justify">Hops Beat</p>
				</motion.div>
			</section>

			{/* Footer Section */}
			<section className="py-8 bg-gradient-to-r from-slate-500 to-slate-600 text-white text-center">
				<p className="text-lg font-semibold">
					Thank you for being a part of our journey. Let's shape the future of fashion together!
				</p>
			</section>
		</div>
	);
};

export default About;
