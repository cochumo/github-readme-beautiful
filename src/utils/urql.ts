import { createClient } from 'urql'

export const client = createClient({
	url: 'https://api.github.com/graphql',
	fetchOptions: () => {
		const token = process.env.GITHUB_TOKEN
		return {
			headers: { authorization: token ? `Bearer ${token}` : '' },
		}
	},
})
