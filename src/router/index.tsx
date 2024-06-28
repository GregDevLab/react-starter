import AppLayout from "@/layouts/app.layout";
import DashboardLayout from "@/layouts/dashboard.layout";
import About from "@/Pages/about/about";
import Posts from "@/Pages/dashboard/posts";
import Users from "@/Pages/dashboard/users";
import Home from "@/Pages/home/home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
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
				path: "dashboard",
				element: <DashboardLayout />,
				children: [
					{
						index: true,
						element: <Users />
					},
					{
						path:"posts",
						element: <Posts />
					}
				]
			}
		]
	},
]);


export default router