
import { Navigate, Outlet, useLocation, useOutletContext } from "react-router-dom";


const AuthRequiredLayout = () => {
	const [user, setUser] = useOutletContext() as any
	const location = useLocation();

	return (
		<>
			{
				user.isLogged ?
				<Outlet context={[user, setUser]} /> :
				<Navigate to='/login' state={{ from: location }} replace/>
			}
		</>
	)
}

export default AuthRequiredLayout