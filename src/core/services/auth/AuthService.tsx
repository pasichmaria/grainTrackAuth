import { BehaviorSubject, type Observable } from "rxjs";
import { login as apiLogin } from "../../api/authAPI";

export interface State {
	token?: string;
	error?: string;
}

export class AuthService {
	private authSubject = new BehaviorSubject<State>({});
	public state$: Observable<State | null> = this.authSubject.asObservable();

	constructor() {
		const token = sessionStorage.getItem("token");
		if (token) {
			this.authSubject.next({ token });
		} else {
			this.authSubject.next({});
		}
	}

	logout = () => {
		sessionStorage.removeItem("token");
		this.authSubject.next({});
	};

	async login(values: { email: string; password: string }) {
		const response = await apiLogin(values.email, values.password);
		sessionStorage.setItem("token", response.token);
		this.authSubject.next({ token: response.token });
	}
}
