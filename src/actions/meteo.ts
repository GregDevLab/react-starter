import { defer } from "react-router-dom"

export const getMeteo = async () => {
	const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lang=fr&q=${'rennes'}&appid=${import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY}`)
	const responseJson = await response.json()
	const data = new Promise((resolve) => {
		setTimeout(async () => {
			resolve(responseJson)
		}, 2000)
	})
	return defer({meteo: data})
}