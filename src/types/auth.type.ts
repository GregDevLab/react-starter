export interface Auth {
	user :{
		isLogged: boolean, role: string
	}
}

export interface User {
	isLogged: boolean,
	role: string
}