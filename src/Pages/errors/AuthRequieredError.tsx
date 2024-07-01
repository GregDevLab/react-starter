import { AuthError } from "@/lib/errors/AuthError";
import { Navigate, useRouteError } from "react-router-dom";

const AuthRequieredError = () => {
	let error = useRouteError() as any
	
	if(error instanceof AuthError) {
		return <Navigate to='/login' />
	}

	return (
		<div>{error.message}</div>
	)
}

export default AuthRequieredError