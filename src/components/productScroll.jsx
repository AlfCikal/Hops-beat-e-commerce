import ProductList from "./productList";

const ProductScroll = () => {
	return (
		// card container
		<div className="overflow-hidden w-full">
			<ProductList products={data} />
		</div>
	);
};

export default ProductScroll;
