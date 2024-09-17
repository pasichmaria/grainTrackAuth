import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<div className="p-4 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 max-w-3xl mx-auto">
			<div className="flex flex-col space-y-6 w-full md:w-1/2">
				<section className="rounded-lg p-6 bg-blue-400">
					<h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
					<ul className="text-gray-300 space-y-2">
						<li>React + Vite</li>
						<li>TypeScript (SWC)</li>
						<li>Tailwind CSS + radix-ui/toast</li>
						<li>TanStack Router + Mock auth</li>
						<li>Biome.js</li>
					</ul>
				</section>
				<div className="flex flex-col space-y-4">
					<Link
						to="/auth/login"
						className="block py-3 px-6 bg-blue-400 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md text-center transition"
					>
						Go to Login
					</Link>
					<Link
						to="/auth/sign-up"
						className="py-3 px-6 border border-blue-500 text-blue-500 font-semibold rounded-lg shadow-md text-center transition"
					>
						Go to Sign Up
					</Link>
				</div>
			</div>
			<div className="flex flex-col w-full md:w-1/2 p-6 bg-gray-100 rounded-lg shadow-md">
				<h2 className="text-2xl font-bold text-gray-800 mb-4">
					Project Overview
				</h2>
				<p className="text-gray-700 leading-relaxed">
					This project demonstrates a simple authentication flow using TanStack
					Router and TS (SWC). Using Tailwind CSS for UI components and
					radix-ui/toast for notification management.
				</p>
				<p className="mt-4 text-gray-700">
					<pre>Email - admin@gmail.com</pre>
					<pre>Password - admin</pre>
				</p>
			</div>
		</div>
	);
}
