import { NavLink } from "react-router-dom"

const Nav = () => {
	return (
		<nav className="p-5 bg-black">
			<ul className="flex gap-5">
				<li>
					<NavLink to='.' className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>Home</NavLink>
				</li>
				<li>
					<NavLink to='about' className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>About</NavLink>
				</li>
				<li>
					<NavLink to='dashboard' className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>About</NavLink>
				</li>
				<li>
					<NavLink to='admin' className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>Admin</NavLink>
				</li>
				<li>
					<NavLink to='login' className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>Login</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Nav