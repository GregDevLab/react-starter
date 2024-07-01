import { Button } from "@/components/ui/button";
import { Navigate, useLocation, useOutletContext } from "react-router-dom";




const Login = () => {
	const [user, setUser] = useOutletContext() as any
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';

	return (
		<>
			{
				!user.isLogged ? 
				<div>
					<h1>Login Page</h1>
					<Button onClick={() => setUser({...user, isLogged: true})}>login</Button>
				</div>:
				<Navigate to={from} replace/>
			}
		</>
	)
}

export default Login