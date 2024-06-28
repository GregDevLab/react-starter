import { NavLink } from "react-router-dom"

const Posts = () => {
	return (
		<div>
			<NavLink to=".." className="text-sm text-yellow-500">{"<-"} go back</NavLink>
			<h1>All posts</h1>
		</div>
	)
}

export default Posts