interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: "primary" | "secondary" | "transparent" | "danger";
	size?: "sm" | "md" | "lg";
	className?: string;
	type?: "button" | "submit" | "reset";
}

export const Button = ({
	onClick,
	children,
	type = "button",
	size = "md",
	className = "",
	variant = "primary",
}: ButtonProps) => {
	const variantStyles = {
		primary: "bg-blue-500 hover:bg-blue-600",
		secondary: "bg-cyan-500 hover:bg-cyan-600",
		transparent: "bg-transparent hover:bg-gray-200 text-gray-800",
		danger: "bg-red-500 hover:bg-red-600",
	};

	const sizeStyles = {
		sm: "px-2 py-1 text-sm",
		md: "px-4 py-2 text-base",
		lg: "px-6 py-3 text-lg",
	};

	return (
		<button
			className={`text-white rounded-md shadow-md ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
};
