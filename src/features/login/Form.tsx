import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Input } from "../../shared";

export function Form({
	onSubmit,
}: { onSubmit: (values: { email: string; password: string }) => void }) {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit,
		validationSchema: yup.object({
			email: yup.string().email("Invalid email").required("Required"),
			password: yup.string().required("Required"),
		}),
	});

	return (
		<div className="w-full max-w-md bg-white border-b-2 border-blue-500 p-6 rounded-lg shadow-lg">
			<h3 className="text-2xl font-bold text-gray-800 mb-6">Login</h3>
			<form onSubmit={formik.handleSubmit} className="space-y-4">
				<Input
					id="email"
					name="email"
					type="email"
					placeholder="Email"
					value={formik.values.email}
					onChange={formik.handleChange}
					className="w-full"
				/>
				<Input
					id="password"
					name="password"
					type="password"
					placeholder="Password"
					value={formik.values.password}
					onChange={formik.handleChange}
					className="w-full"
				/>
				<Button variant="primary" type="submit" className="w-full">
					Login
				</Button>
			</form>
		</div>
	);
}
