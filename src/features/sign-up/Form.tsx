import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Input } from "../../shared";

export function Form() {
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
		validationSchema: yup.object({
			email: yup.string().email("Invalid email").required("Required"),
			password: yup.string().required("Required"),
			confirmPassword: yup
				.string()
				.required("Required")
				.oneOf([yup.ref("password")], "Passwords must match"),
		}),
	});

	return (
		<div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
			<h3 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h3>
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
				<Input
					id="confirmPassword"
					name="confirmPassword"
					type="password"
					placeholder="Confirm Password"
					value={formik.values.confirmPassword}
					onChange={formik.handleChange}
					className="w-full"
				/>
				<Button variant="primary" type="submit" className="w-full">
					Sign Up
				</Button>
			</form>
		</div>
	);
}
