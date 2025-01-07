"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
	return (
		<div className="min-h-screen bg-gray-50 text-gray-800">
			{/* Hero Section */}
			{/* <section className="relative bg-gradient-to-r from-green-500 to-teal-600 text-white py-20">
				<motion.div
					className="container mx-auto px-6 text-center"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
					<p className="mt-4 text-lg md:text-xl">
						We're here to answer your questions and assist you in any way possible.
					</p>
				</motion.div>
			</section> */}

			{/* Contact Form Section */}
			{/* <section className="py-16 bg-white">
				<motion.div
					className="container mx-auto px-6 md:px-16"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.3 }}
				>
					<h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
					<p className="text-center text-lg text-gray-600 mb-8">
						Have a question or need help? Fill out the form below and we'll get back to you promptly.
					</p>

					<form className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-lg shadow-md space-y-6"> */}
			{/* Name Field */}
			{/* <div>
							<label htmlFor="name" className="block text-lg font-medium text-gray-700">
								Full Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Enter your full name"
								className="mt-2 p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
							/>
						</div> */}

			{/* Email Field */}
			{/* <div>
							<label htmlFor="email" className="block text-lg font-medium text-gray-700">
								Email Address
							</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Enter your email address"
								className="mt-2 p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
							/>
						</div> */}

			{/* Message Field */}
			{/* <div>
							<label htmlFor="message" className="block text-lg font-medium text-gray-700">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows="5"
								placeholder="Write your message here..."
								className="mt-2 p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
							></textarea>
						</div> */}

			{/* Submit Button */}
			{/* <div className="text-center">
							<motion.button
								type="submit"
								className="px-6 py-3 bg-green-500 text-white rounded-md shadow-md font-medium hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Submit
							</motion.button>
						</div>
					</form>
				</motion.div>
			</section> */}

			{/* Contact Information */}
			<section className="py-8 bg-gray-100">
				<motion.div
					className="container mx-auto px-6 md:px-16"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.5 }}
				>
					<div className="text-3xl font-bold text-center w-full h-24 relative">
						<Image src="./logo2.svg" alt="logo" fill className="object-fit" />
					</div>
					<p className="text-xl font-semibold mb-6 text-center">Click to contact and order</p>
					<div className="flex flex-col gap-12 text-center">
						<Link href="mailto:hopsbeat24@gmail.com">
							<div className="p-6 bg-white rounded-lg shadow-md">
								<h3 className="text-xl font-semibold mb-2">Email</h3>
								<p className="text-gray-600">hopsbeat24@gmail.com</p>
							</div>
						</Link>

						<Link href={"https://wa.me/6285700483307"}>
							<div className="p-6 bg-white rounded-lg shadow-md">
								<h3 className="text-xl font-semibold mb-2">Phone</h3>
								<p className="text-gray-600">+62 85700483307</p>
							</div>
						</Link>
						<Link href={"https://www.instagram.com/hopsbeat.og/"}>
							<div className="p-6 bg-white rounded-lg shadow-md">
								<h3 className="text-xl font-semibold mb-2">Instagram</h3>
								<p className="text-gray-600">@hopsbeat.og</p>
							</div>
						</Link>
					</div>
				</motion.div>
			</section>
		</div>
	);
};

export default Contact;
