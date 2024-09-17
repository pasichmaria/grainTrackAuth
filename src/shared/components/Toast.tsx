import * as Toast from "@radix-ui/react-toast";

interface ToastProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	title: string;
	description: string;
	actionText: string;
	onActionClick?: () => void;
	actionAltText?: string;
	className?: string;
}

export const ToastComponent = ({
	open,
	onOpenChange,
	title,
	description,
	actionText,
	onActionClick,
	actionAltText,
	className = "",
}: ToastProps) => {
	return (
		<Toast.Provider swipeDirection="right">
			<Toast.Root
				className={`ToastRoot ${className}`}
				open={open}
				onOpenChange={onOpenChange}
			>
				<Toast.Title className="ToastTitle">{title}</Toast.Title>
				<Toast.Description asChild>
					<time className="ToastDescription">{description}</time>
				</Toast.Description>
				{actionText && (
					<Toast.Action
						className="ToastAction"
						asChild
						altText={actionAltText || "Undo"}
						onClick={onActionClick}
					>
						<button type="button" className="Button small green">
							{actionText}
						</button>
					</Toast.Action>
				)}
			</Toast.Root>
			<Toast.Viewport className="ToastViewport" />
		</Toast.Provider>
	);
};
