import type { NextApiRequest, NextApiResponse } from 'next'
import Neomorphic from '../../components/svg/Neomorphic'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<string>
) {
	const {
		query: { id, name },
	} = req
	res.setHeader('Content-Type', 'image/svg+xml')
	res.status(200).send(Neomorphic())
}
