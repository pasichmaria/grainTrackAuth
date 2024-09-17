import type React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({
	isAuthenticated,
	logout,
	children,
}: {
	children: React.ReactNode;
	isAuthenticated: boolean;
	logout: () => void;
}) => {
	return (
		<>
			<Header isAuthenticated={isAuthenticated} logout={logout} />
			<div className="min-h-screen flex flex-col bg-gray-200 items-center justify-center p-4">
				{children}
			</div>
			<Footer />
		</>
	);
};
