import type { NextApiRequest, NextApiResponse } from 'next'
import gql from 'graphql-tag'
import { client } from '../../utils/urql'
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

	const UserQuery = gql`
		query {
			user(login: "${name}") {
				id
				avatarUrl
				login
				repositoriesContributedTo(
					first: 1
					contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]
				) {
					totalCount
				}
				pullRequests(first: 1) {
					totalCount
				}
				openIssues: issues(states: OPEN) {
					totalCount
				}
				closedIssues: issues(states: CLOSED) {
					totalCount
				}
				followers {
					totalCount
				}
				repositories(
					first: 100
					ownerAffiliations: OWNER
					orderBy: { direction: DESC, field: STARGAZERS }
				) {
					totalCount
					nodes {
						stargazers {
							totalCount
						}
					}
				}
			}
		}
	`

	const { data, error } = await client.query(UserQuery).toPromise()
	console.log(data)

	res.setHeader('Content-Type', 'image/svg+xml')
	res.setHeader(
		'Cache-Control',
		'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
	)
	res.status(200).send(Github(name))
}
