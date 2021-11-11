import type { NextPage } from 'next'
import Link from 'next/link'

const About: NextPage = () => {
	return (
		<div>
			<h1>About</h1>
			<div>
				<Link href='/'>Index</Link>
			</div>
		</div>
	)
}

export default About
