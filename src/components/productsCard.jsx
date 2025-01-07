"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ProductModal from "./productModal";
import Image from "next/image";

const ProductCard = ({ product }) => {
	const [isModalOpen, setModalOpen] = useState(false);

	const openModal = () => setModalOpen(true);
	const closeModal = () => setModalOpen(false);

	const [isDragging, setIsDragging] = useState(false);

	useEffect(() => {
		const handleDragEnd = () => setIsDragging(false);
		window.addEventListener("pointerup", handleDragEnd);

		return () => {
			window.removeEventListener("pointerup", handleDragEnd);
		};
	}, []);

	const handleMouseDown = () => setIsDragging(false);
	const handleDragStart = () => setIsDragging(true);
	const handleClick = () => {
		if (!isDragging) {
			// Open the modal here
			openModal();
		}
	};

	const gambar = product.gambar;

	return (
		<div className="h-full">
			{/* Product Card */}
			{/* <motion.div
				className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer"
				whileHover={{ scale: 1.05 }}
				onClick={openModal}
			>
				<img src={product.gambar} alt={product.judul} className="w-full h-40 object-cover rounded-md" />
				<h2 className="mt-4 text-lg font-semibold">{product.judul}</h2>
				<p className="text-gray-500 mt-2">${product.harga}</p>
			</motion.div> */}

			<motion.div
				whileHover={{ scale: 1.05 }}
				onMouseDown={handleMouseDown}
				onDragStart={handleDragStart}
				className="flex flex-col rounded-xl w-48 justify-between h-full bg-slate-200 shadow-lg "
				key={product.judul}
			>
				{/* Image container */}
				<div className="w-48 h-48 bg-neutral-400 rounded-t-xl flex items-center justify-center relative">
					<Image
						src={gambar[0]}
						fill
						className="object-cover object-bottom rounded-t-xl"
						alt="Coming Soon"
						draggable="false"
					/>
				</div>

				{/* Text container */}
				<div className="flex flex-col flex-1 justify-between p-4">
					<h1 className="font-poppins font-semibold">{product.judul}</h1>
					<div className="flex w-full justify-between">
						<span>Rp {product.harga}</span>
						<button onClick={handleClick}>Lihat</button>
					</div>
				</div>
			</motion.div>

			{/* Modal */}
			<AnimatePresence>{isModalOpen && <ProductModal product={product} closeModal={closeModal} />}</AnimatePresence>
		</div>
	);
};

export default ProductCard;
