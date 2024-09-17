import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { describe, expect, it, vi } from "vitest";
import { ServicesProvider } from "../src/core/services";
import { ToastContext } from "../src/core/services/toast";

vi.mock("../../../shared", () => ({
	ToastComponent: vi.fn(
		({ open, title, description, actionText, onActionClick }) =>
			open ? (
				<div>
					<h1>{title}</h1>
					<p>{description}</p>
					{actionText && (
						<button type="button" onClick={onActionClick}>
							{actionText}
						</button>
					)}
				</div>
			) : null,
	),
}));

describe("ToastProvider", () => {
	const TestComponent = () => {
		const { showToast, closeToast } = React.useContext(ToastContext)!;

		return (
			<div>
				<button
					type="button"
					onClick={() => showToast("Title", "Description", "Action", () => {})}
				>
					Show Toast
				</button>
				<button type="button" onClick={closeToast}>
					Close Toast
				</button>
			</div>
		);
	};

	it("should provide showToast and closeToast functions", () => {
		render(
			<ServicesProvider>
				<TestComponent />
			</ServicesProvider>,
		);

		fireEvent.click(screen.getByText("Show Toast"));

		expect(screen.getByText("Title")).not.toBeNull();
		expect(screen.getByText("Description")).not.toBeNull();
		expect(screen.getByText("Action")).not.toBeNull();

		fireEvent.click(screen.getByText("Close Toast"));

		expect(screen.queryByText("Title")).toBeNull();
		expect(screen.queryByText("Description")).toBeNull();
		expect(screen.queryByText("Action")).toBeNull();
	});

	it("should update toast state from ToastService", async () => {
		render(
			<ServicesProvider>
				<TestComponent />
			</ServicesProvider>,
		);

		fireEvent.click(screen.getByText("Show Toast"));

		await waitFor(() => {
			expect(screen.getByText("Title")).not.toBeNull();
			expect(screen.getByText("Description")).not.toBeNull();
		});
	});

	it("should close toast", async () => {
		render(
			<ServicesProvider>
				<TestComponent />
			</ServicesProvider>,
		);

		fireEvent.click(screen.getByText("Show Toast"));

		await waitFor(() => {
			expect(screen.getByText("Title")).not.toBeNull();
			expect(screen.getByText("Description")).not.toBeNull();
		});

		fireEvent.click(screen.getByText("Close Toast"));

		await waitFor(() => {
			expect(screen.queryByText("Title")).toBeNull();
			expect(screen.queryByText("Description")).toBeNull();
		});
	});
});
