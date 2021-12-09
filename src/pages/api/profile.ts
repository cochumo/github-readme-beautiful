import type { NextApiRequest, NextApiResponse } from 'next'
import Profile from '../../components/svg/Profile'
import { getValueFirstArray } from '../../utils/common/util'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<string>
) {
	let {
		query: { name, age, local, type, birthDate },
	} = req
	name = getValueFirstArray(name)
	age = getValueFirstArray(age)
	local = getValueFirstArray(local)
	type = getValueFirstArray(type)
	birthDate = getValueFirstArray(birthDate)
	res.setHeader('Content-Type', 'image/svg+xml')
	res.setHeader(
		'Cache-Control',
		'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
	)
	res.status(200).send(Profile(name, age, local, type, birthDate))
}
