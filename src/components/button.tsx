import { useState } from 'react'


const ButtonTest = () => {
	const [content, sectContent] = useState('click')
	return (
		<button 
			onClick={() => sectContent(prev => prev === 'click' ? 'Is clicked' : 'click')}>
				{content}
		</button>
	)
}

export default ButtonTest