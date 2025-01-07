import Image from "next/image";

const { default: Link } = require("next/link");

const Footer = () => {
	const links = [
		{ url: "/", title: "Home" },
		{ url: "/about", title: "About" },
		{ url: "/product", title: "Product" },
		{ url: "/contact", title: "Contact" },
	];
	return (
		<div className="flex flex-col w-full h-full bg-slate-900 py-4 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
			{/* Menu */}
			<div className="flex justify-between items-center pt-4">
				<div className="h-full w-max flex flex-col gap-2 text-white">
					{links.map((link) => (
						<Link href={link.url} key={link.title}>
							{link.title}
						</Link>
					))}
				</div>
				<div className="text-3xl font-bold text-center w-32 h-24 relative">
					<Image src="./logoWhite.svg" alt="logo" fill className="object-fit" />
				</div>
			</div>
			<div className="w-full h-full flex items-center justify-end">
				<h2 className="text-white">
					<span className="text-xl">&copy;</span> 2025 Hops Beat
				</h2>
			</div>
			<div>
				<h2 className="text-white text-sm">
					Designed and developed by <span className="text-orange-600">Alfath Cikal</span>.
				</h2>
			</div>
		</div>
	);
};

export default Footer;
