import Hero from "@/components/hero";
import ProductScroll from "@/components/productScroll";
import Image from "next/image";

export default function Home() {
	return (
		<div className="h-full flex flex-col">
			<Hero />
			<div className="flex flex-col gap-4 bg-zinc-400 py-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
				<h1 className="text-2xl font-semibold">Our Product</h1>
				<ProductScroll />
			</div>
		</div>
	);
}
