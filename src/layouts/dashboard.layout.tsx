import { NavLink, Outlet } from "react-router-dom"

const DashboardLayout = () => {
	return (
		<div className="bg-blue-500">
			<div>dashboard</div>
			<div className="border border-solid w-96 h-96 text-white">
				<div>
					<nav>
						<ul className="flex gap-2">
							<li className="bg-black p-2 px-4 w-fit">
								<NavLink to="."  >Users</NavLink>
							</li>
							<li className="bg-black p-2 px-4 w-fit">
								<NavLink to="posts"  >Posts</NavLink>
							</li>
						</ul>
					</nav>
				</div>
				<Outlet />
			</div>
		</div>
	)
}

export default DashboardLayout