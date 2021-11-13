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
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="846" height="423" viewBox="0 0 846 423">
			<defs>
				<clipPath id="clip-card">
					<rect width="846" height="423"/>
				</clipPath>
			</defs>
			<g id="card" clip-path="url(#clip-card)">
				<rect width="846" height="423" fill="#2e3440"/>
				<g id="グループ_4" data-name="グループ 4" transform="translate(4.5 18.035)">
					<g id="グループ_2" data-name="グループ 2" transform="translate(11.5 11)">
						<path id="パス_2" data-name="パス 2" d="M0,.96,547,0V364.931H0Z" fill="#22272f"/>
						<path id="パス_1" data-name="パス 1" d="M0,.9,524,0V341.931H0Z" transform="translate(11.5 12)" fill="#242e37"/>
						<rect id="長方形_1" data-name="長方形 1" width="524.005" height="22" transform="translate(11.5 12)" fill="#2f343f"/>
					</g>
					<g id="グループ_1" data-name="グループ 1" transform="translate(479.005 28)">
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
				<text id="Name" transform="translate(134 157)" fill="#83a5c0" font-size="18" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">Name</tspan></text>
				<text id="Age" transform="translate(134 198)" fill="#83a5c0" font-size="18" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">Age</tspan></text>
				<text id="Local" transform="translate(134 239)" fill="#83a5c0" font-size="18" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">Local</tspan></text>
				<text id="Type" transform="translate(134 280)" fill="#83a5c0" font-size="18" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">Type</tspan></text>
				<text id="NameText" data-name="${name}" transform="translate(269 157)" fill="#bfbfbf" font-size="18" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">${name}</tspan></text>
				<text id="AgeText" data-name="${age}" transform="translate(269 198)" fill="#bfbfbf" font-size="18" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">${age}</tspan></text>
				<text id="LocalText" data-name="${local}" transform="translate(269 239)" fill="#bfbfbf" font-size="18" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">${
		local[0].toUpperCase() + local.slice(1)
	}</tspan></text>
				<text id="TypeText" data-name="${type}" transform="translate(268 280)" fill="#bfbfbf" font-size="18" font-family="Poppins-Medium, Poppins" font-weight="500"><tspan x="0" y="0">${type}</tspan></text>
			</g>
		</svg>
	`
}

export default Profile
