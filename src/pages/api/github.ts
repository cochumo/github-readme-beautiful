import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient, Provider, useQuery } from 'urql'
import Github from '../../components/svg/Github'
import { getValueFirstArray } from '../../utils/common/helper'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<string>
) {
	let {
		query: { name },
	} = req
	name = getValueFirstArray(name)

	const LoginQuery = `
		query {
			viewer {
				login
			}
		}
	`

	const client = createClient({
		url: 'https://api.github.com/graphql',
		fetchOptions: () => {
			const token = process.env.GITHUB_TOKEN
			return {
				headers: { authorization: token ? `Bearer ${token}` : '' },
			}
		},
	})

	const { data, error } = await client.query(LoginQuery).toPromise()
	console.log(data)

	res.setHeader('Content-Type', 'image/svg+xml')
	res.setHeader(
		'Cache-Control',
		'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
	)
	res.status(200).send(Github(name))
}