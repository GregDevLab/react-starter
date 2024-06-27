import { prettyDOM, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from "./App"

test('Exemple vérification titre page', () => {
	render(<App />)
	const title = screen.getByRole('heading', {name: /hello world/i})
	expect(title).toBeInTheDocument()
})

test('Exemple interception requete', async () => {
	render(<App />)

	const element = await screen.findByTestId("user")
	expect(element).toHaveTextContent('John')
})

test('Exemple user event', async () => {
	const user = userEvent.setup()
	render(<App />)


	const element = await screen.findByRole('button', {name: /click/i})
	expect(element).toHaveTextContent('click')
	await user.click(element)

	expect(element).toHaveTextContent('Is clicked')
	console.log(prettyDOM())
})