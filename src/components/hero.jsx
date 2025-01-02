import Image from "next/image";

const Hero = () => {
	return (
		<div className="min-h-full w-full py-12 flex-grow flex flex-col lg:flex-row gap-8 items-center bg-slate-200 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
			{/* Text container */}
			<div className="flex flex-col gap-4 lg:w-1/2">
				<h1 className="text-6xl font-bold font-noto">Temukan Style Outpit Terbaikmu</h1>
				<p className="text-xl md:text-2xl">
					Temukan trend fashion terbaru, pilih style unik untukmu. Kami memiliki semuanya yang kamu butuhkan untuk
					men-aesthetikan penampilan dirimu
				</p>
				<div className="">
					<button className="p-2 bg-slate-700 text-white rounded">Our product</button>
				</div>
			</div>
			{/* Image container */}
			<div className="w-full items-center justify-center lg:w-1/2">
				<div className="p-12 w-full h-[500px] bg-neutral-600 text-white flex items-center justify-center relative ">
					<Image src={"./soon.svg"} fill className="object-cover" alt="coming soon" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
