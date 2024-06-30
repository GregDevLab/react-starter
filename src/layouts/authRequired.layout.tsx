
import { Auth } from "@/types/auth.type"
import { Outlet, useLoaderData } from "react-router-dom"


const AuthRequiredLayout = () => {
	const loader = useLoaderData() as {user: Auth} 
	console.log("🚀 ~ AuthRequiredLayout ~ loader:", loader)

	return (
		<Outlet />
	)
}

export default AuthRequiredLayout