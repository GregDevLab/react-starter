export const isAuthenticated = (isAuth:boolean) => {
	const user = {
		isLogged : isAuth,
		role: 'user'
	}

	return new Promise(resolve => {
		setTimeout(() => {
			resolve(user)
		}, 2000)
	})
}
