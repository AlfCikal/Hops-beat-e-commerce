"use client";
import { motion } from "motion/react";
import Image from "next/image";

const ProductScroll = () => {
	const dataProduct = [
		{ judul: "Judul baju Pertama", gambar: "", harga: "120.000" },
		{ judul: "Judul baju Kedua", gambar: "", harga: "" },
		{ judul: "Judul baju Ketiga", gambar: "", harga: "" },
	];

	const isImageAvaliable = (product) => {
		product.image !== "";
	};

	return (
		// card container
		<div className="overflow-hidden w-full">
			<motion.div
				className="flex gap-4"
				drag="x"
				dragConstraints={{ left: -(240 * (dataProduct.length - 1)), right: 0 }}
				whileTap={{ cursor: "grabbing" }}
			>
				{/* card list */}
				{dataProduct.map((product) => (
					<div className="flex flex-col rounded-xl w-max h-full bg-slate-200" key={product.judul}>
						<div className="w-60 h-60 bg-neutral-400 rounded-t-xl flex items-center justify-center relative">
							{isImageAvaliable(product) ? (
								<Image
									src={product.image}
									fill
									className="object-cover rounded-t-xl"
									alt="Gambar baju"
									draggable="false"
								/>
							) : (
								<Image
									src={"./soon.svg"}
									fill
									className="object-cover rounded-t-xl"
									alt="Coming Soon"
									draggable="false"
								/>
							)}
						</div>
						{/* Text Container */}
						<div className="flex flex-col gap-4 p-4">
							<h1 className="font-poppins font-semibold">{product.judul}</h1>
							<div className="flex w-full justify-between">
								<span>Rp {product.harga}</span>
								<button>Lihat</button>
							</div>
						</div>
					</div>
				))}
			</motion.div>
		</div>
	);
};

export default ProductScroll;
