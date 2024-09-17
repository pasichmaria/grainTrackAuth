import { Outlet, createRootRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useServices } from "../core/hooks";
import { Layout } from "../shared";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	const { authService } = useServices();

	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const subscription = authService.state$.subscribe((state) => {
			setIsAuthenticated(!!state?.token);
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [authService]);

	return (
		<Layout isAuthenticated={isAuthenticated} logout={authService.logout}>
			<Outlet />
		</Layout>
	);
}
