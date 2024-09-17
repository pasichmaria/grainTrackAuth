import { Link } from "@tanstack/react-router";
import { Button } from "../components";

export const Header = ({
	isAuthenticated,
	logout,
}: { isAuthenticated: boolean; logout: () => void }) => {
	return (
		<header className="w-full bg-white shadow-sm ">
			{isAuthenticated ? (
				<div className="bg-green-500 text-white text-center p-2">
					You are logged in
				</div>
			) : (
				<div className="bg-red-500 text-white text-center p-2">
					You are not logged in
				</div>
			)}

			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<div className="text-blue-500 text-2xl font-bold">
					<Link to="/" className="hover:text-blue-500 transition-colors">
						Home
					</Link>
				</div>
				<nav className="flex items-center space-x-6 text-gray-700">
					{isAuthenticated ? (
						<Button onClick={logout} variant="secondary">
							Logout
						</Button>
					) : (
						<>
							<Link
								to="/auth/login"
								className="hover:text-blue-500 transition-colors"
							>
								Login
							</Link>
							<Link
								to="/auth/sign-up"
								className="hover:text-blue-500 transition-colors"
							>
								Signup
							</Link>
						</>
					)}
				</nav>
			</div>
		</header>
	);
};
