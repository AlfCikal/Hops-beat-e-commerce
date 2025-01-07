"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
	{ url: "/", title: "Home" },
	{ url: "/about", title: "About" },
	{ url: "/product", title: "Product" },
	{ url: "/contact", title: "Contact" },
];

const waNumber = "6285700483307";

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const topVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: 40,
			backgroundColor: "rgb(0,0,0)",
		},
	};
	const centerVariants = {
		closed: {
			opacity: 1,
		},
		opened: {
			opacity: 0,
		},
	};
	const bottomVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: -40,
			backgroundColor: "rgb(0,0,0)",
		},
	};
	const listVariants = {
		closed: {
			x: "-100vw",
		},
		opened: {
			x: 0,
			transition: {
				// when: "beforeChildren",
				// staggerChildren: 0.2,
				ease: "linear",
			},
		},
	};

	const listItemVariants = {
		closed: {
			x: -10,
			opacity: 0,
		},
		opened: {
			x: 0,
			opacity: 1,
		},
	};

	return (
		<div className="h-full flex items-center justify-between py-4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 text-xl border-b-2 border-slate-800">
			{/* Links */}
			<div className="hidden lg:flex gap-4 w-1/3">
				{links.map((link) => (
					<NavLink link={link} key={link.title} />
				))}
			</div>
			{/* Respopnsive Menu */}
			<div className="lg:hidden w-1/3">
				{/* Menu Button */}
				<button className="w-8 h-6 flex flex-col justify-between z-50 relative" onClick={() => setOpen(!open)}>
					<motion.div
						variants={topVariants}
						animate={open ? "opened" : "closed"}
						className="w-8 h-1 bg-black rounded origin-left"
					></motion.div>
					<motion.div
						variants={centerVariants}
						animate={open ? "opened" : "closed"}
						className="w-8 h-1 bg-black rounded"
					></motion.div>
					<motion.div
						variants={bottomVariants}
						animate={open ? "opened" : "closed"}
						className="w-8 h-1 bg-black rounded origin-left"
					></motion.div>
				</button>
				{/* Menu List */}
				{open && (
					<motion.div
						variants={listVariants}
						initial="closed"
						animate="opened"
						className="absolute top-0 left-0 w-[calc(100vw-5rem)] h-screen bg-white border-r-2 border-slate-800 text-slate-800 flex flex-col mt-24 p-4 gap-4 text-xl z-40"
					>
						{links.map((link) => (
							<div className="pb-2 border-slate-800" key={link.title}>
								<Link href={link.url} onClick={() => setOpen(!open)}>
									{link.title}
								</Link>
							</div>
						))}
					</motion.div>
				)}
			</div>
			{/* Logo */}
			<div className="w-1/3 h-20 flex relative xl:w-1/3 xl:justify-center">
				<Link href="/" className="text-sm font-semibold flex items-center justify-center">
					<Image src="./logo2.svg" fill className="object-fill" alt="logo" />
				</Link>
			</div>
			{/* link whatsapp */}
			<div className="w-1/3 flex justify-end">
				<Link href={`https://wa.me/${waNumber}`}>
					<Image src="./whatsapp.png" width={24} height={24} alt=""></Image>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
