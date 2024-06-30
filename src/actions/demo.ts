import { FormError } from "@/types/form.type"

export const demoActions = async ({request, params}:any) => {
	console.log("🚀 ~ demoActions ~ params:", params)
	console.log("🚀 ~ demoActions ~ request:", request)
	switch(request.method) {
		case "POST":
			return registerPost(request)
		case "GET" : 
			return filterPost(request)
	}
}


const registerPost = async(request:any) => {
	const data = await request.formData()
	const errors: FormError = {} 

	const name = data.get('name')

	if(name.length < 3) {
		errors.name = "Le nom est trop court"
	}

	if (Object.keys(errors).length) {
		return errors;
	}

	return data
}

const filterPost = async (request:any) => {
	const url = new URL(request.url);
	const name = url.searchParams.get("name");
	const colors = url.searchParams.getAll("colors");
	console.log("🚀 ~ getAction ~ colors:", colors)
	console.log("🚀 ~ getAction ~ name:", name)
	return {
		name: 'test',
		colors: 'red'
	}
}