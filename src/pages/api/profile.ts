import type { NextApiRequest, NextApiResponse } from 'next'
import Profile from '../../components/svg/Profile'

export default function handler(
	_req: NextApiRequest,
	res: NextApiResponse<string>
) {
	res.setHeader('Content-Type', 'image/svg+xml')
	res.status(200).send(Profile())
}
