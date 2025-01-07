import ProductSlider from "./productSlider";

const getData = async (basePath) => {
	const res = await fetch(`${basePath}/data/data.json`, {
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("Failed");
	}
	return res.json();
};

const ProductList = async ({ recomend = false }) => {
	const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "http://localhost:3000";
	const data = await getData(basePath);
	const dataProduct = recomend ? data.filter((item) => item.isRecomend) : data;

	return (
		// card container
		<div className="overflow-hidden w-full">
			<ProductSlider products={dataProduct} />
		</div>
	);
};

export default ProductList;
