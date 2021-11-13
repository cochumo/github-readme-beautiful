import type { NextApiRequest, NextApiResponse } from 'next'
import Neomorphic from '../../components/svg/Neomorphic'
import Phone from '../../components/svg/Phone'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<string>
) {
	const {
		query: { id, name },
	} = req
	res.setHeader('Content-Type', 'image/svg+xml')
	res.status(200).send(Phone())
}
