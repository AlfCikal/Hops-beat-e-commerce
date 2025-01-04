"use client";
import ProductSlider from "./productSlider";

const ProductScroll = () => {
	const dataProduct = [
		{
			id: `BI'001`,
			judul: `BANDOENG ISLAND BI'001`,
			gambar: "/soon.svg",
			description: "Terbuat dari cotton combed 24s dengan sabolon plastison dengan potongan baju regular fit",
			harga: "120.000",
		},
		{
			judul: "COMING SOON",
			gambar: "/soon.svg",
			description: "SOON",
			harga: "xxxx",
		},
	];

	const isImageAvaliable = (product) => {
		product.image !== "";
	};

	return (
		// card container
		<div className="overflow-hidden w-full">
			<ProductSlider products={dataProduct} />
		</div>
	);
};

export default ProductScroll;

// <div className="flex flex-col rounded-xl w-max h-full bg-slate-200" key={product.judul}>
// 	<div className="w-60 h-60 bg-neutral-400 rounded-t-xl flex items-center justify-center relative">
// 		{isImageAvaliable(product) ? (
// 			<Image
// 				src={product.image}
// 				fill
// 				className="object-cover rounded-t-xl"
// 				alt="Gambar baju"
// 				draggable="false"
// 			/>
// 		) : (
// 			<Image src="/soon.svg" fill className="object-cover rounded-t-xl" alt="Coming Soon" draggable="false" />
// 		)}
// 	</div>
// 	{/* Text Container */}
// 	<div className="flex flex-col gap-4 p-4">
// 		<h1 className="font-poppins font-semibold">{product.judul}</h1>
// 		<div className="flex w-full justify-between">
// 			<span>Rp {product.harga}</span>
// 			<button>Lihat</button>
// 		</div>
// 	</div>
// </div>
