import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	const [year, setYear] = useState(new Date().getFullYear());

	useEffect(() => {
		const interval = setInterval(() => {
			setYear(new Date().getFullYear());
		}, 1000 * 60 * 60 * 24);
		return () => clearInterval(interval);
	}, []);

	return (
		<footer>
			<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
				{/* "Let's Talk" Banner */}
				<div className="flex flex-col items-center gap-4 rounded-lg bg-primary p-6 shadow-lg sm:flex-row sm:justify-between">
					<strong className="text-xl text-white sm:text-xl">
						Let&apos;s Talk about project!
					</strong>
					<Link
						to="#"
						className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
					>
						<span className="relative text-base font-semibold text-primary">
							Get in touch
						</span>
					</Link>
				</div>

				{/* Footer Links */}
				<div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 relative">
					{/* Background Blur */}
					<div
						aria-hidden="true"
						className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 -z-10"
					>
						<div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
						<div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-primary"></div>
					</div>

					{/* Column 1 */}
					<div className="text-center sm:text-left">
						<p className="text-lg font-medium text-gray-800 dark:text-white">
							About Us
						</p>
						<ul className="mt-8 space-y-4 text-sm">
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="#"
								>
									Company History
								</Link>
							</li>
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="#"
								>
									Meet the Team
								</Link>
							</li>
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="#"
								>
									Employee Handbook
								</Link>
							</li>
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="#"
								>
									Careers
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 2 */}
					<div className="text-center sm:text-left">
						<p className="text-lg font-medium text-gray-800 dark:text-white">
							Our Services
						</p>
						<ul className="mt-8 space-y-4 text-sm">
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="/services/Strategic-Print-Procurement"
								>
									Strategic Print Procurement
								</Link>
							</li>
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="/services/Retail-Branding"
								>
									Retail Branding
								</Link>
							</li>
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="/services/store-Displays-POSM"
								>
									In Store Displays POSM
								</Link>
							</li>
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="/services/Creative-Production"
								>
									Creative Production
								</Link>
							</li>
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="/services/Retail-Activation"
								>
									Retail Activation
								</Link>
							</li>
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="/services/Event-Marketing"
								>
									Event Marketing
								</Link>
							</li>
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="/services/Corporate-Gifting"
								>
									Corporate Gifting
								</Link>
							</li>
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="/services/Content-Development"
								>
									Content Development
								</Link>
							</li>
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="/services/Retail-Store-Fabrication"
								>
									Retail Store Fabrication
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 3 */}
					<div className="text-center sm:text-left">
						<p className="text-lg font-medium text-gray-800 dark:text-white">
							Resources
						</p>
						<ul className="mt-8 space-y-4 text-sm">
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="#"
								>
									Online Guides
								</Link>
							</li>
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="#"
								>
									Conference Notes
								</Link>
							</li>
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="#"
								>
									Forum
								</Link>
							</li>
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="#"
								>
									Downloads
								</Link>
							</li>
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="#"
								>
									Upcoming Events
								</Link>
							</li>
						</ul>
					</div>

					{/* Column 4 */}
					<div className="text-center sm:text-left">
						<p className="text-lg font-medium text-gray-800 dark:text-white">
							Helpful Links
						</p>
						<ul className="mt-8 space-y-4 text-sm">
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="#"
								>
									FAQs
								</Link>
							</li>
							<li>
								<Link
									className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75"
									to="#"
								>
									Support
								</Link>
							</li>
							<li>
								<Link
									className="group flex justify-center md:justify-start gap-1.5"
									to="#"
								>
									<span className="text-gray-700 dark:text-white/80 transition dark:hover:text-white/40 hover:text-gray-700/75">
										Live Chat
									</span>
									<span className="relative flex size-2">
										<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
										<span className="relative inline-flex size-2 rounded-full bg-primary"></span>
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				{/* Social Icons */}
				<div className="mt-16">
					<ul className="flex justify-center gap-6 sm:justify-end">
						<li>
							<Link
								to="#"
								rel="noreferrer"
								target="_blank"
								className="text-primary dark:text-secondary transition hover:text-primary/70 dark:hover:text-secondary/70"
							>
								<i className="fa-brands fa-facebook fa-xl text-primary dark:text-white dark:hover:text-primary hover:text-secondary cursor-pointer"></i>
							</Link>
						</li>
						<li>
							<Link
								to="#"
								rel="noreferrer"
								target="_blank"
								className="text-primary dark:text-secondary transition hover:text-primary/70 dark:hover:text-secondary/70"
							>
								<i className="fa-brands fa-linkedin fa-xl text-primary dark:text-white dark:hover:text-primary hover:text-secondary cursor-pointer"></i>
							</Link>
						</li>
						<li>
							<Link
								to="#"
								rel="noreferrer"
								target="_blank"
								className="text-primary transition hover:text-primary/75"
							>
								<i className="fa-brands fa-instagram fa-xl text-primary dark:text-white dark:hover:text-primary hover:text-secondary cursor-pointer"></i>
							</Link>
						</li>
						<li>
							<Link
								to="#"
								rel="noreferrer"
								target="_blank"
								className="text-primary transition hover:text-primary/75"
							>
								<i className="fa-brands fa-twitter fa-xl text-primary dark:text-white dark:hover:text-primary hover:text-secondary cursor-pointer"></i>
							</Link>
						</li>
					</ul>

					{/* Logo + Copyright */}
					<div className="mt-16 sm:flex sm:items-center sm:justify-between">
						<div className="flex justify-center text-teal-600 sm:justify-start">
							<Link
								to="#home"
								aria-label="logo"
								className="flex space-x-2 items-center"
							>
								<div aria-hidden="true" className="flex space-x-1">
									<div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
									<div className="h-6 w-2 bg-primary"></div>
								</div>
								<span className="text-2xl font-bold text-gray-900 dark:text-white">
									LOGO
								</span>
							</Link>
						</div>

						<p className="mt-4 text-center text-sm text-gray-500 sm:mt-0 sm:text-right">
							Copyright &copy; <span>{year}</span>. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
