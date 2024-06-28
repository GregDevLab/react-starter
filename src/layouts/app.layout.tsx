import Nav from "@/components/navigation/nav"
import { Outlet } from "react-router-dom"

const AppLayout = () => {
	return (
		<>
			<Nav />
			<Outlet />
		</>
	)
}

export default AppLayout