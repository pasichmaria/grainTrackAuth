interface LoginResponse {
	token: string;
}

export function login(email: string, password: string): Promise<LoginResponse> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (email === "admin@gmail.com" && password === "admin") {
				resolve({ token: Math.random().toString(36).substring(7) });
			}
			reject(new Error("Invalid email or password"));
		}, 200);
	});
}
