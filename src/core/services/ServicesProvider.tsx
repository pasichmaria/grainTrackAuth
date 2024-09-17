import type React from "react";
import { type ReactNode, createContext } from "react";
import { AuthService } from "./auth";
import { ToastProvider, ToastService } from "./toast";

interface Services {
	authService: AuthService;
	toastService: ToastService;
}

interface ServicesProviderProps {
	children: ReactNode;
}

export const ServicesContext = createContext<Services | null>(null);

export const ServicesProvider: React.FC<ServicesProviderProps> = ({
	children,
}) => {
	return (
		<ServicesContext.Provider
			value={{
				authService: new AuthService(),
				toastService: new ToastService(),
			}}
		>
			<ToastProvider>{children}</ToastProvider>
		</ServicesContext.Provider>
	);
};
