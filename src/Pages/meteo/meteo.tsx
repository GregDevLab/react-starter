import { Suspense } from "react"
import { Await, useLoaderData } from "react-router-dom"

const Meteo = () => {
	const loader = useLoaderData() as any
	return (
		<Suspense fallback={<p>Loading meteo ...</p>}>
			<Await resolve={loader.meteo}>
				{
					(meteo) => {
						console.log("🚀 ~ Meteo ~ loader:",meteo)
						return <div>
							<h1>La méteo de {meteo.name}</h1>
							<p>actuellement: {meteo.weather[0].description}</p>
						</div>
					}
				}
			</Await>
		</Suspense>
	)
}

export default Meteo