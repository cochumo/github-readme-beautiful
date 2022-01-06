import { useEffect } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

type Props = {
	code: string
	language: string
}

export const SyntaxHighlight = ({ code, language }: Props) => {
	useEffect(() => {
		Prism.highlightAll()
	})

	return (
		<div>
			<div className='Code'>
				<pre>
					<code className={`language-${language}`}>{code}</code>
				</pre>
			</div>
		</div>
	)
}
