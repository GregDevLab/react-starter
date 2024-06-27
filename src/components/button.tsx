import { Button } from "@/components/ui/button"
import { useState } from 'react'

const ButtonTest = () => {
	const [content, sectContent] = useState('click')
	return (
		<Button
			onClick={() => sectContent(prev => prev === 'click' ? 'Is clicked' : 'click')}
			>
				{content}
		</Button>
	)
}

export default ButtonTest