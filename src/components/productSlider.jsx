"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "./productsCard";

const ProductSlider = ({ products }) => {
	const [currentPage, setCurrentPage] = useState(0);
	const productsPerPage = 5;

	const totalPages = Math.ceil(products.length / productsPerPage);

	const handleNext = () => {
		if (currentPage < totalPages - 1) {
			setCurrentPage(currentPage + 1);
		}
	};

	const handlePrevious = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 1);
		}
	};

	const currentProducts = products.slice(currentPage * productsPerPage, (currentPage + 1) * productsPerPage);

	return (
		<div className="relative pt-6 flex flex-col">
			{/* Products */}
			<AnimatePresence>
				<div className="flex items-stretch justify-center flex-wrap gap-8 gap-y-10">
					{currentProducts.map((product) => (
						<motion.div
							key={product.judul}
							className="rounded-lg"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, transition: { duration: 0.7, ease: "backIn" } }}
							// transition={{ delay: 0.5 }}
							exit={{ opacity: 0 }}
						>
							<ProductCard product={product} />
							{/* <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
							<h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
							<p className="text-gray-500 mt-2">${product.price}</p> */}
						</motion.div>
					))}
				</div>
			</AnimatePresence>

			{/* Navigation */}
			<div className="flex justify-between items-center mt-6">
				<button
					className={`px-4 py-2 bg-gray-300 text-gray-700 rounded-md ${
						currentPage === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"
					}`}
					onClick={handlePrevious}
					disabled={currentPage === 0}
				>
					Previous
				</button>
				<p className="text-gray-600">
					Page {currentPage + 1} of {totalPages}
				</p>
				<button
					className={`px-4 py-2 bg-gray-300 text-gray-700 rounded-md ${
						currentPage === totalPages - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"
					}`}
					onClick={handleNext}
					disabled={currentPage === totalPages - 1}
				>
					Next
				</button>
			</div>
		</div>
	);
};

export default ProductSlider;
