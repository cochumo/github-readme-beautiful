import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { SyntaxHighlight } from '../common/SyntaxHighlight'

function Copyright() {
	return (
		<Typography variant='body2' color='text.secondary' align='center'>
			{'Copyright © '}
			<Link
				color='inherit'
				href='https://github.com/cochumo/github-readme-beautiful'
			>
				{appName}
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

const appName = 'Github Readme Beautiful'

const theme = createTheme()

const sampleQuery =
	'profile?name=github-readme-beautiful&age=31&local=japan&type=engineer'

const sampleCode: string = `// {your github username}/README.md
<a>
  <img align="center" src="https://github-readme-beautiful.vercel.app/api/${sampleQuery}" />
</a>
or
[![github-readme-stats](https://github-readme-beautiful.vercel.app/api/${sampleQuery})](https://github-readme-beautiful.vercel.app)`

export default function Index() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<AppBar position='relative'>
				<Toolbar>
					<ArticleSharpIcon sx={{ mr: 2 }} />
					<Typography variant='h6' color='inherit' noWrap>
						{appName}
					</Typography>
				</Toolbar>
			</AppBar>
			<main>
				{/* Hero unit */}
				<Box
					sx={{
						bgcolor: 'background.paper',
						pt: 20,
						pb: 14,
					}}
				>
					<Container maxWidth='lg'>
						<Typography
							component='h1'
							variant='h2'
							align='center'
							color='text.primary'
							gutterBottom
						>
							{appName}
						</Typography>
						<Typography
							variant='h5'
							align='center'
							color='text.secondary'
							paragraph
						>
							Github Readme
							BeautifulはあなたのGithubのreadmeを美しく彩るためのものです
							<br />
							素朴なreadmeを一新しましょう
						</Typography>
						<Typography
							sx={{ pt: 4 }}
							variant='h6'
							align='center'
							color='text.secondary'
							paragraph
						>
							さあ、あなたのGithub Readmeに以下のコードを入れてみましょう
						</Typography>
						<SyntaxHighlight code={sampleCode} language='html' />
						<Typography
							sx={{ pt: 4 }}
							variant='h6'
							align='center'
							color='text.secondary'
							paragraph
						>
							このようなsvg画像が表示されます
							<br />
							現在は30秒周期でアニメーションします
						</Typography>
						<div style={{ textAlign: 'center' }}>
							<img src={`/api/${sampleQuery}`} alt='sampleProfile' />
						</div>
					</Container>
				</Box>
			</main>
			{/* Footer */}
			<Box sx={{ bgcolor: 'background.paper', p: 6 }} component='footer'>
				<Typography variant='h6' align='center' gutterBottom>
					{appName}
				</Typography>
				<Copyright />
			</Box>
			{/* End footer */}
		</ThemeProvider>
	)
}
