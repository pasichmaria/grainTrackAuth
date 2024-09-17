import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServices } from "../../core/hooks";
import { LoginForm } from "../../features";

export const Route = createFileRoute("/auth/login")({
	component: LoginComponent,
});

function LoginComponent() {
	const { authService, toastService } = useServices();
	const navigate = useNavigate({ from: "/auth/login" });

	return (
		<LoginForm
			onSubmit={(values) =>
				authService.login(values).then(
					() => {
						toastService.showToast("Success", "Logged in successfully");
						navigate({ to: "/" });
					},
					(error: Error) => {
						toastService.showToast("Error", error.message);
					},
				)
			}
		/>
	);
}
