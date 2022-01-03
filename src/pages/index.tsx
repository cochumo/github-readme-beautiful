import type { NextPage } from 'next'
import Head from 'next/head'
import Index from '../components/pages/Index'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Github Readme Beautiful</title>
				<meta
					name='description'
					content='This can be used to beautify the github readme.'
				/>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
				/>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/icon?family=Material+Icons'
				/>
			</Head>

			<Index />
		</div>
	)
}

export default Home
