import ProductSlider from "./productSlider";

const data = [
	{
		id: "BI'1001",
		judul: "TEE BANDOENG ISLAND",
		gambar: [
			"./baju/BandungIslandZoom.jpg",
			"./baju/BandungIsland.jpg",
			"./baju/BandungIslandBack.jpg",
			"./baju/BandungIslandBackZoom.jpg",
		],
		harga: "135.000",
		description: "Terbuat dari cotton combed 24s dengan sablon plastison dengan potongan baju regular fit",
		isRecomend: true,
	},
	{
		id: "soon",
		judul: "Coming Soon",
		gambar: ["./soon.svg", "./soon.svg"],
		harga: "xxx.xxx",
		description: "soon",
		isRecomend: false,
	},
];

const ProductList = async ({ recomend = false }) => {
	const dataProduct = recomend ? data.filter((item) => item.isRecomend) : data;

	return (
		// card containe
		<div className="overflow-hidden w-full">
			<ProductSlider products={dataProduct} />
		</div>
	);
};

export default ProductList;
