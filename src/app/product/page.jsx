import ProductList from "@/components/productList";
import Image from "next/image";

const Product = () => {
	return (
		<div className="min-h-screen items-center justify-center">
			{/* Hero Section */}
			<section className="relative bg-cover bg-center h-[550px]">
				{/* <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-700 flex items-center justify-center">
					<div className="text-center text-white">
						<h1 className="text-5xl font-bold">Elevate Your Style</h1>
						<p className="text-lg mt-4">Discover premium fashion that defines elegance.</p>
						<button className="bg-blue-500 px-6 py-2 mt-6 rounded-lg hover:bg-blue-600">Shop Now</button>
					</div>
				</div> */}
				<div className="text-3xl font-bold mb-6 text-center w-full h-full relative">
					<Image src="./baju/BandungIsland.jpg" alt="logo" fill className="object-cover" />
				</div>
			</section>

			{/* Product Details Section */}
			<section className="py-16 bg-gray-200 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
				<h2 className="text-3xl font-semibold text-center">Our Products</h2>
				<ProductList />
			</section>

			{/* Reviews Section */}
			{/* <section className="bg-gray-50 py-16 px-4">
				<h2 className="text-3xl font-semibold text-center">Customer Reviews</h2>
				<div className="mt-8 space-y-6">
					<blockquote className="p-4 bg-white rounded-lg shadow-md">
						<p className="text-gray-700">"Absolutely love this product! It's exactly what I needed."</p>
						<footer className="text-sm text-gray-500 mt-2">- Alex D.</footer>
					</blockquote>
					<blockquote className="p-4 bg-white rounded-lg shadow-md">
						<p className="text-gray-700">"Great quality and fast shipping. Highly recommend!"</p>
						<footer className="text-sm text-gray-500 mt-2">- Maria L.</footer>
					</blockquote>
				</div>
			</section> */}

			{/* FAQ Section */}
			{/* <section className="py-16 px-4">
				<h2 className="text-3xl font-semibold text-center">Frequently Asked Questions</h2>
				<div className="mt-8 space-y-6">
					<div>
						<h3 className="font-semibold">What is the return policy?</h3>
						<p className="text-gray-600 mt-2">We accept returns within 30 days of purchase.</p>
					</div>
					<div>
						<h3 className="font-semibold">Is this product available internationally?</h3>
						<p className="text-gray-600 mt-2">Yes, we ship worldwide.</p>
					</div>
				</div>
			</section> */}
		</div>
	);
};

export default Product;
