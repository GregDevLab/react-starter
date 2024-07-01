import { useOutletContext } from "react-router-dom"

const Admin = () => {
	const user = useOutletContext()
	console.log("🚀 ~ Admin ~ data:", user)
	return (
		<div>admin</div>
	)
}

export default Admin