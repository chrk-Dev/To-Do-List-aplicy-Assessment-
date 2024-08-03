import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

import { useNavigate, Link } from "react-router-dom";

import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function Register() {



	const navigate = useNavigate();
	const register = async (e) => {
		e.preventDefault();
		const user = {
			name: e.target.name.value,
			email: e.target.email.value,
			password: e.target.password.value,
		};
		try {
			await axios.post("/api/auth/register", user);
			toast.success("Registered successfully");
			navigate("/login");
		} catch (err) {
			console.log(err);
     
			toast.error("Something went wrong");
		}
	};

	return (
		<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
			<div class="sm:mx-auto sm:w-full sm:max-w-sm">
				<Card className="mx-auto max-w-sm">
					<CardHeader className="space-y-1">
						<CardTitle className="text-2xl font-bold">Register</CardTitle>
						<CardDescription>Enter your deatis for Register</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={register}>
							<div className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="name">Full Name</Label>
									<Input
										id="name"
										type="text"
										placeholder="full name"
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										type="email"
										placeholder="whatever@aplicy.com"
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="password">Password</Label>
									<Input id="password" type="password" required />
								</div>

								<Button type="submit" className="w-full">
									Login
								</Button>
							</div>
						</form>
						<br />
						<p class="text-sm font-light text-gray-500 dark:text-gray-400">
							Already have an account?{" "}
							<a
								href="#"
								class="font-medium text-primary-600 hover:underline dark:text-primary-500"
							>
								<Link to="/login">Login</Link>
							</a>
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default Register;
