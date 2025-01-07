"use client";
import Hero from "@/components/hero";
import ProductList from "@/components/productList";

const getStaticProps = async () => {
	const basePath = "https://alfcikal.github.io/Hops-beat-e-commerce";
	const res = await fetch(`${basePath}/data/data.json`);

	if (!res.ok) {
		throw new Error("Failed");
	}

	const data = await res.json();

	return {
		props: {
			products: data,
		},
	};
};

export default function Home({ data }) {
	return (
		<div className="h-full flex flex-col">
			<Hero />
			<div className="flex flex-col gap-4 bg-gray-100 py-8 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
				<h1 className="text-2xl font-semibold">Our Product</h1>
				<ProductList recomend={true} products={data} />
			</div>
		</div>
	);
}
