import type { NextApiRequest, NextApiResponse } from 'next'
import gql from 'graphql-tag'
import axios from 'axios'
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
				name
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

	const getTotalCommints = (user: any, token: any) => {
		return axios({
			method: 'get',
			url: `https://api.github.com/search/commits?q=author:${user}`,
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/vnd.github.cloak-preview',
				Authorization: `token ${token}`,
			},
		})
	}

	try {
		const { data, error } = await client.query(UserQuery).toPromise()
		const totalCommintsResponse = await getTotalCommints(
			name,
			process.env.GITHUB_TOKEN
		)

		const userName: string = data.user.name || data.user.login

		const totalStarsEarned: number = data.user.repositories.nodes.reduce(
			(prev: any, current: any) => prev + (current.stargazers.totalCount || 0),
			0
		)
		const totalCommits: number = totalCommintsResponse.data.total_count || 0
		const totalPRs: number = data.user.pullRequests?.totalCount || 0
		const openIssues: number = data.user.openIssues?.totalCount || 0
		const closedIssues: number = data.user.closedIssues?.totalCount || 0
		const totalIssues: number = openIssues + closedIssues
		const contributedTo: number =
			data.user.repositoriesContributedTo?.totalCount || 0
		const followers: number = data.user.followers?.totalCount || 0

		const stats = {
			userName,
			totalStarsEarned,
			totalCommits,
			totalPRs,
			totalIssues,
			contributedTo,
			followers,
		}

		console.log(stats)

		res.setHeader('Content-Type', 'image/svg+xml')
		res.setHeader(
			'Cache-Control',
			'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
		)
		res.status(200).send(Github(name))
	} catch (error) {
		console.log(error)
		res.status(400).send('error')
	}
}
