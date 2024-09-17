interface InputProps {
	id?: string;
	name?: string;
	className?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	type?: string;
}

export const Input = ({
	id,
	name,
	className,
	value,
	onChange,
	placeholder,
	type,
}: InputProps) => {
	return (
		<input
			id={id}
			name={name}
			className={`border border-blue-300 bg-gray-100 text-black rounded-md px-3 py-2 ${className}`}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			type={type}
		/>
	);
};
