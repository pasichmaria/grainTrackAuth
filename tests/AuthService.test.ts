import { beforeEach, describe, expect, it, vi } from "vitest";
import { AuthService } from "../src/core/services/auth";

vi.mock("../../api/authAPI", () => ({
	login: vi.fn((_email, _password) =>
		Promise.resolve({ token: Math.random().toString(36).substring(7) }),
	),
}));

describe("AuthService", () => {
	let authService: AuthService;

	beforeEach(() => {
		sessionStorage.clear();
		authService = new AuthService();
	});

	it("should login success", async () => {
		await authService.login({ email: "admin@gmail.com", password: "admin" });
		expect(sessionStorage.getItem("token")).not.toBeNull();
	});

	it("should logout success", async () => {
		await authService.login({ email: "admin@gmail.com", password: "admin" });
		authService.logout();
		expect(sessionStorage.getItem("token")).toBeNull();
	});

	it("should cant login with invalid email", async () => {
		await expect(
			authService.login({ email: "admin", password: "admin" }),
		).rejects.toThrow();
	});

	it("should cant login with invalid password", async () => {
		await expect(
			authService.login({ email: "admin@gmail.com", password: "121211" }),
		).rejects.toThrow();
	});
});
