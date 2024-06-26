import { prettyDOM, render, screen } from '@testing-library/react'
import App from "./App"

test('Exemple vérification titre page', () => {
	render(<App />)
	const title = screen.getByRole('heading', {name: /hello world/i})
	expect(title).toBeInTheDocument()
})

test('Exemple intercepetion requete', async () => {
	render(<App />)
	const title = screen.getByRole('heading', {name: /hello world/i})
	expect(title).toBeInTheDocument()

	const element = await screen.findByTestId("user")
	expect(element).toHaveTextContent('John')
	console.log(prettyDOM())
})