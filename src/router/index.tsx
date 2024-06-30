import { isAuthenticated } from "@/actions/auth";
import { demoActions } from "@/actions/demo";
import AppLayout from "@/layouts/app.layout";
import AuthRequiredLayout from "@/layouts/authRequired.layout";
import DashboardLayout from "@/layouts/dashboard.layout";
import About from "@/Pages/about/about";
import Posts from "@/Pages/dashboard/posts";
import Users from "@/Pages/dashboard/users";
import Home from "@/Pages/home/home";
import { Auth } from "@/types/auth.type";
import { createBrowserRouter, defer, redirect } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
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
				loader: async ({request}) => {
					console.log("🚀 ~ loader: ~ request:", request)
					const user = await isAuthenticated(true) as Auth
					if(user.isLogged) throw redirect('/')
					return true
				},
				element: <div>Login page</div>
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
				loader: async ({request}) => {
					console.log("🚀 ~ loader: ~ request:", request)
					const user = await isAuthenticated(true) as Auth
					if(!user.isLogged) throw redirect('/login')
					return defer({user: user})
				},
				children: [
					{
						index: true,
						element: <div>Page Admin</div>
					}
				]
			}
		]
	},
]);


export default router