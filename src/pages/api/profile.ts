import type { NextApiRequest, NextApiResponse } from 'next'
import Profile from '../../components/svg/Profile'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<string>
) {
	let {
		query: { name, age, local, type, birthDate },
	} = req
	name = Array.isArray(name) ? name[0] : name
	age = Array.isArray(age) ? age[0] : age
	local = Array.isArray(local) ? local[0] : local
	type = Array.isArray(type) ? type[0] : type
	birthDate = Array.isArray(birthDate) ? birthDate[0] : birthDate
	res.setHeader('Content-Type', 'image/svg+xml')
	res.setHeader(
		'Cache-Control',
		'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
	)
	res.status(200).send(Profile(name, age, local, type, birthDate))
}
