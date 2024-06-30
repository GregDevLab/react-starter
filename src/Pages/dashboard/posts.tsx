import { FormAction } from "@/components/forms/form";
import { FormError } from "@/types/form.type";
import { useRef } from "react";
import { NavLink, useActionData, useLoaderData, useSearchParams, useSubmit } from "react-router-dom";



const Posts = () => {
	const submit = useSubmit();
	const [_searchParams, setSearchParams] = useSearchParams();
	const errors = useActionData() as FormError | undefined
	const data = useLoaderData();
	const formRef = useRef<HTMLFormElement>(null)
	return (
		<div>
			<NavLink to=".." className="text-sm text-yellow-500">{"<-"} go back</NavLink>
			<FormAction method='POST' className="text-black">
				<label htmlFor="name" className="sr-only">Nom</label>
				<input type="text" name="name" id="name" onChange={() => delete errors?.name}/>
				{errors?.name && <p>{errors.name}</p>}
				<button>submit</button>
			</FormAction>
			<FormAction 
				method='GET'
				className="text-black"
				ref={formRef}
				onChange={(event: React.FormEvent<HTMLFormElement>) => {
					submit(event.currentTarget);
				}}
			>
				<input type="text" name="name" placeholder="Entrez votre nom" />
				<fieldset>
					<legend>Choisissez vos couleurs</legend>
					<label htmlFor="colors">Couleurs</label>
					<select multiple name="colors" id="colors">
						<option value="blue">Bleu</option>
						<option value="red">Rouge</option>
						<option value="green">Vert</option>
					</select>
				</fieldset>
				<button onClick={(e) => {
					e.preventDefault()
					formRef?.current?.reset()
					setSearchParams({})
				}} >reset</button>
			</FormAction>
			<h1>All posts</h1>
			<div>{JSON.stringify(data)}</div>
		</div>
	)
}

export default Posts