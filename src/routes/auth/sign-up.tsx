import { createFileRoute } from "@tanstack/react-router";
import { SignUpForm } from "../../features";

export const Route = createFileRoute("/auth/sign-up")({
	component: SignUpComponent,
});

function SignUpComponent() {
	return <SignUpForm />;
}
