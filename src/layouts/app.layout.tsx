import Nav from "@/components/navigation/nav";
import { Button } from "@/components/ui/button";
import { Auth } from "@/types/auth.type";
import { useState } from "react";

import { Await, NavLink, Outlet, useLoaderData } from "react-router-dom";
const AppLayout = () => {
	const loader = useLoaderData() as Auth
	const [user, setUser] = useState(loader.user);

	return (
		<>
			<Await resolve={loader.user}>
				<Nav user={user} >
					{user.isLogged ? 
						<Button onClick={() => setUser({isLogged:false, role: 'user'})}>logout</Button> :
						<Button><NavLink to='login'>Login</NavLink></Button>
					}
				</Nav>
				<Outlet context={[user, setUser]}/>
			</Await>
		</>
	)
}

export default AppLayout