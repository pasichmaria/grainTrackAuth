import { take } from "rxjs/operators";
import { beforeEach, describe, expect, it } from "vitest";
import { ToastService } from "../src/core/services/toast";

describe("ToastService", () => {
	let toastService: ToastService;

	beforeEach(() => {
		toastService = new ToastService();
	});

	it("should show toast", () => {
		toastService.toastState$.pipe(take(1)).subscribe((state) => {
			expect(state.open).toBe(false);
			toastService.showToast("Title", "Description");
			toastService.toastState$.pipe(take(1)).subscribe((updatedState) => {
				expect(updatedState.open).toBe(true);
				expect(updatedState.title).toBe("Title");
				expect(updatedState.description).toBe("Description");
			});
		});
	});

	it("should close toast", () => {
		toastService.showToast("Title", "Description");
		toastService.toastState$.pipe(take(1)).subscribe((state) => {
			expect(state.open).toBe(true);
			toastService.closeToast();
			toastService.toastState$.pipe(take(1)).subscribe((updatedState) => {
				expect(updatedState.open).toBe(false);
			});
		});
	});
});
