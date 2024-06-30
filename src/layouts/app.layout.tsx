import Nav from "@/components/navigation/nav";
import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () => {
	const navigation = useNavigation();
	return (
		<>
			<Nav />
			{
				navigation.state === "loading" ?
				<div>Chargement ...</div> :
				<Outlet />
			}
		</>
	)
}

export default AppLayout