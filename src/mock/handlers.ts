import { http, HttpResponse } from 'msw'

//https://mswjs.io/docs/network-behavior/rest
export const handlers = [
	http.get('http://example.com/user', () => {
		return HttpResponse.json({
			id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
			firstName: 'John',
			lastName: 'Maverick',
		})
	}),
]