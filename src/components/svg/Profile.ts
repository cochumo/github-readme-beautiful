import dayjs from 'dayjs'

const Profile = (
	name: string = 'unknow',
	age: string = 'unknow',
	local: string = 'unknow',
	type: string = 'unknow',
	birthDate?: string
) => {
	if (birthDate && dayjs(birthDate).isValid()) {
		let birthday = dayjs(birthDate)
		age = String(dayjs().diff(birthday, 'year'))
	}
	return `
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="564" height="336" viewBox="0 0 564 336">
			<defs>
				<clipPath id="clip-card">
					<rect width="564" height="336"/>
				</clipPath>
			</defs>
			<g id="card" clip-path="url(#clip-card)">
				<rect width="564" height="336" fill="rgba(46,52,64,0)"/>
				<rect id="長方形_2" data-name="長方形 2" width="564" height="336" rx="10" fill="#282d38"/>
				<g id="グループ_5" data-name="グループ 5" transform="translate(-1.5 1)">
					<g id="グループ_2" data-name="グループ 2" transform="translate(11.5 11)">
						<path id="パス_2" data-name="パス 2" d="M0,.821,544,0V312H0Z" fill="#22272f"/>
						<path id="パス_1" data-name="パス 1" d="M0,.758,521,0V287.971H0Z" transform="translate(11.5 12)" fill="#242e37"/>
						<rect id="長方形_1" data-name="長方形 1" width="521" height="22" transform="translate(11.5 12)" fill="#2f343f"/>
					</g>
					<g id="グループ_1" data-name="グループ 1" transform="translate(476 28)">
						<g id="楕円形_1" data-name="楕円形 1" transform="translate(40)" fill="none" stroke="#fff" stroke-width="1" opacity="0.5">
							<circle cx="6" cy="6" r="6" stroke="none"/>
							<circle cx="6" cy="6" r="5.5" fill="none"/>
						</g>
						<g id="楕円形_2" data-name="楕円形 2" transform="translate(20)" fill="none" stroke="#fff" stroke-width="1" opacity="0.5">
							<circle cx="6" cy="6" r="6" stroke="none"/>
							<circle cx="6" cy="6" r="5.5" fill="none"/>
						</g>
						<g id="楕円形_3" data-name="楕円形 3" fill="none" stroke="#fff" stroke-width="1" opacity="0.5">
							<circle cx="6" cy="6" r="6" stroke="none"/>
							<circle cx="6" cy="6" r="5.5" fill="none"/>
						</g>
					</g>
				</g>
				<text id="NameText" transform="translate(262 113)" fill="#bfbfbf" font-size="18" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">${name}</tspan></text>
				<text id="AgeText" transform="translate(262 154)" fill="#bfbfbf" font-size="18" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">${age}</tspan></text>
				<text id="LocalText" transform="translate(262 195)" fill="#bfbfbf" font-size="18" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">${
					local[0].toUpperCase() + local.slice(1)
				}</tspan></text>
				<text id="TypeText" transform="translate(261 236)" fill="#bfbfbf" font-size="18" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">${type}</tspan></text>
				<text id="Name" transform="translate(127 113)" fill="#83a5c0" font-size="18" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">Name</tspan></text>
				<text id="Age" transform="translate(127 154)" fill="#83a5c0" font-size="18" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">Age</tspan></text>
				<text id="Local" transform="translate(127 195)" fill="#83a5c0" font-size="18" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">Local</tspan></text>
				<text id="Type" transform="translate(127 236)" fill="#83a5c0" font-size="18" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">Type</tspan></text>
			</g>
		</svg>
	`
}

export default Profile
