import { useEffect, useState } from "react"
import './App.css'
import ButtonTest from "./components/button"

function App() {
	const [user, setUser] = useState<any>()

	useEffect(() => {
		(async () => {
			/**
			 * le endpoint mocker est dans le fichier suivant 
			 * voir : (file://./mock/handlers.ts)
			 * */ 
			await fetch('http://example.com/user')
			.then(res => res.json())
			.then(data => {console.log(data); setUser(data)})
			.catch(err => setUser(err.message))
		})()
	},[])

	return (
		<>
			<h1>hello world</h1>
			{user && <p data-testid="user">{user.firstName}</p>}
			<ButtonTest />
		</>
	)
}

export default App
