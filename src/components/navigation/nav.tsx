import React from "react"
import { NavLink } from "react-router-dom"

interface Props {
	user: {isLogged:boolean, role:string}
	children: React.ReactNode
}

const Nav = ({user, children}:Props) => {

	return (
		<div className="p-5 bg-black flex justify-between items-center">
			<nav >
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
					{user.isLogged && 
						<li>
							<NavLink to='admin' className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>Admin</NavLink>
						</li>
					}
					<li>
						<NavLink to='meteo' className={({ isActive }) => isActive ? "text-red-500" : "text-white"}>Météo</NavLink>
					</li>
				</ul>
			</nav>
			<div>
				{children}
			</div>
		</div>
	)
}

export default Nav