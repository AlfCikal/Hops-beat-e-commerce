import ProductSlider from "./productSlider";
const ProductList = async ({ recomend = false, products }) => {
	const dataProduct = recomend ? products.filter((item) => item.isRecomend) : products;

	return (
		// card containe
		<div className="overflow-hidden w-full">
			<ProductSlider products={dataProduct} />
		</div>
	);
};

export default ProductList;
