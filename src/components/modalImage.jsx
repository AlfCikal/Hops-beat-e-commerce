"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const ModalImage = ({ data }) => {
	console.log(data);
	const images = data.gambar;
	const [mainImage, setMainImage] = useState(images[1]);

	const [key, setKey] = useState(0);
	const handleImageChange = (image) => {
		setMainImage(image);
		setKey((prevKey) => prevKey + 1); // Change the key to re-trigger the animation
	};

	return (
		<div className="flex w-full flex-col items-center justify-center lg:w-1/2">
			{/* Main image */}
			<AnimatePresence>
				<div className="flex items-center justify-center">
					<motion.div
						key={key}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 0.3, ease: "backIn" } }}
						className="w-full h-fit relative md:w-[calc(100%-6rem)]"
					>
						<Image src={mainImage} alt={data.judul} width={6964} height={6624} className="object-cover rounded-md" />
					</motion.div>
				</div>
			</AnimatePresence>
			{/* Image list*/}
			<div className="w-full gap-2 mt-12 lg:w-[calc(100%-6rem)] flex flex-wrap items-center relative">
				{images.map((image, n) => (
					<div className="w-28 h-28 relative" key={n}>
						<Image
							src={image}
							fill
							className="object-cover"
							alt="product foto"
							onClick={() => handleImageChange(image)}
						></Image>
					</div>
				))}
			</div>
		</div>
	);
};

export default ModalImage;
