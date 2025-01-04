import Image from "next/image";

const Hero = () => {
	return (
		<div className="min-h-full w-full flex-grow flex flex-col lg:flex-row gap-8 items-center justify-cente">
			{/* Text container */}
			{/* <div className="flex flex-col gap-4 lg:w-1/2 order-2 lg:order-1">
				<h1 className="text-6xl font-bold font-noto">Temukan Style Outpit Terbaikmu</h1>
				<p className="text-xl md:text-2xl">
					Temukan trend fashion terbaru, pilih style unik untukmu. Kami memiliki semuanya yang kamu butuhkan untuk
					men-aesthetikan penampilan dirimu
				</p>
				<div className="">
					<button className="p-2 bg-slate-700 text-white rounded">Our product</button>
				</div>
			</div> */}
			{/* Image container */}
			{/* <section className="relative bg-cover bg-center h-[550px]">
				<div className="w-full h-full relative bg-neutral-600 text-white">
					<Image src="/soon.svg" fill className="object-fit" alt="coming soon" />
				</div>
			</section> */}
			<section className="relative bg-cover bg-center w-full h-[550px]">
				{/* <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 flex items-center justify-center">
								<div className="text-center text-white">
									<h1 className="text-5xl font-bold">Elevate Your Style</h1>
									<p className="text-lg mt-4">Discover premium fashion that defines elegance.</p>
									<button className="bg-blue-500 px-6 py-2 mt-6 rounded-lg hover:bg-blue-600">Shop Now</button>
								</div>
							</div> */}
				<div className="text-3xl font-bold mb-6 text-center w-full h-full relative">
					<Image src="./soon.svg" alt="logo" fill className="object-fit" />
				</div>
			</section>
		</div>
	);
};

export default Hero;
