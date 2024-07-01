import { isAuthenticated } from "@/actions/auth";
import { demoActions } from "@/actions/demo";
import { getMeteo } from "@/actions/meteo";
import AppLayout from "@/layouts/app.layout";
import AuthRequiredLayout from "@/layouts/authRequired.layout";
import DashboardLayout from "@/layouts/dashboard.layout";
import About from "@/Pages/about/about";
import Admin from "@/Pages/admin/admin";
import Posts from "@/Pages/dashboard/posts";
import Users from "@/Pages/dashboard/users";
import Home from "@/Pages/home/home";
import Login from "@/Pages/login/login";
import Meteo from "@/Pages/meteo/meteo";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		loader: async () => isAuthenticated(),
		errorElement: <div>404</div>,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: "about",
				element: <About />
			},
			{
				path: "login",
				element: <Login />
			},
			{
				path: "Meteo",
				loader: getMeteo,
				element:<Meteo />
			},
			{
				path: "dashboard",
				element: <DashboardLayout />,
				children: [
					{
						index: true,
						element: <Users />
					},
					{
						path:"posts",
						element: <Posts />,
						loader: demoActions,
						action: demoActions
					}
				]
			},
			{
				path: "admin",
				element: <AuthRequiredLayout />,
				children: [
					{
						index: true,
						element: <Admin />
					}
				]
			}
		]
	},
]);


export default router