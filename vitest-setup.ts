import '@testing-library/jest-dom'
import { server } from './src/mock/server'

beforeEach(() => {
	server.listen()
	//autres actions
})

afterEach(() => {
	server.resetHandlers()
	//autres actions
})

afterAll(() => {
	server.close()
	//autres actions
})
