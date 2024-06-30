import { forwardRef } from "react"
import { Form, useLocation } from "react-router-dom"

type Props = {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
	[key:string]: any
}

const CustomForm = forwardRef<HTMLFormElement, Props>((props, ref) => {
	const location = useLocation()
	return (
		<Form {...props} action={location.pathname} ref={ref} >
			{props.children}
		</Form>
	)
})

export const FormAction = CustomForm
