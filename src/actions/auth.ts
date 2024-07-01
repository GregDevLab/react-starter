import {User } from "@/types/auth.type";
import { defer } from "react-router-dom"

export const isAuthenticated = async () => {
	const user: User = {
		isLogged: false,
		role: 'user',
	};


	const data = new Promise<User>((resolve) => {
		setTimeout(() => {
			resolve(user);
		}, 2000);
	});

	return defer({ user: data });
}
