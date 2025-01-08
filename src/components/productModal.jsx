import { motion } from "motion/react";
import ModalImage from "./modalImage";

const ProductModal = ({ product, closeModal }) => {
	return (
		<motion.div
			className="bg-gray-100 rounded-lg shadow-lg p-6 overflow-y-scroll w-screen h-full flex flex-col fixed z-40 top-0 left-0 pb-12"
			initial={{ scale: 0.8 }}
			animate={{ scale: 1 }}
			exit={{ scale: 0.8 }}
		>
			<button className="absolute top-10 right-10 text-gray-500 hover:text-black" onClick={closeModal}>
				<h1 className="font-bold text-xl">✕</h1>
			</button>
			{/* Content container */}
			<div className="flex flex-col gap-12 lg:flex-row items-center mt-24 px-8">
				{/* Image Container */}

				<ModalImage data={product} />
				{/* Text Container */}
				<div className="w-full mt-12 flex flex-col gap-4 lg:w-1/2">
					<h2 className="text-xl font-bold">{product.judul}</h2>
					<p className="text-lg font-semibold mt-4">${product.harga}</p>
					{/* Size */}
					<div className="flex gap-2">
						<div className="w-8 h-8 flex items-center justify-center font-bold border-2 border-slate-400 rounded-lg hover:border-slate-800 cursor-pointer">
							M
						</div>
						<div className="w-8 h-8 flex items-center justify-center font-bold border-2 border-slate-400 rounded-lg hover:border-slate-800 cursor-pointer">
							L
						</div>
						<div className="w-8 h-8 flex items-center justify-center font-bold border-2 border-slate-400 rounded-lg hover:border-slate-800 cursor-pointer">
							XL
						</div>
					</div>

					<div className="text-gray-600 mt-2">
						<h1 className="font-bold text-2xl text-black">Description</h1>
						<p className="text-gray-600 mt-2">{product.description}</p>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default ProductModal;
