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
				<style>
					.text {
						font-size: 18px;
						font-family: 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif;
						opacity: 0;
						animation: dropIn 30s;
						animation-timing-function: ease;
						animation-fill-mode: forwards;
						animation-delay: calc(var(--order) * 200ms);
						animation-iteration-count: infinite;
					}
					#group_5 {
						animation: fadeInUp 30s;
						animation-timing-function: ease;
						animation-fill-mode: forwards;
						animation-iteration-count: infinite;
					}

					@keyframes fadeInUp {
						0% {
							opacity: 0;
							transform: translateY(20%);
						}
						5%, 90% {
							opacity: 1;
							transform: translateY(0);
						}
						95%, 100% {
							opacity: 0;
							transform: translateY(-5%);
						}
					}
					@keyframes dropIn {
						5% {
							opacity: 0;
						}
						15%, 80% {
							opacity: 1;
						}
						85%, 100% {
							opacity: 0;
						}
					}
				</style>
			</defs>
			<defs>
				<clipPath id="clip-card">
					<rect width="564" height="336"/>
				</clipPath>
			</defs>
			<g id="card" clip-path="url(#clip-card)">
				<rect width="564" height="336" fill="rgba(46,52,64,0)"/>
				<rect id="rectangle_2" data-name="rectangle 2" width="564" height="336" rx="10" fill="#1d2228"/>
				<g id="group_5" data-name="group 5" transform="translate(-1.5 1)">
					<g id="group_2" data-name="group 2" transform="translate(11.5 11)">
						<path id="path_1" data-name="path 1" d="M0,.758,521,0V287.971H0Z" transform="translate(11.5 12)" fill="#242e37"/>
						<rect id="rectangle_1" data-name="rectangle 1" width="521" height="22" transform="translate(11.5 12)" fill="#2f343f"/>
					</g>
					<g id="group_1" data-name="group 1" transform="translate(476 28)">
						<g id="elliptical_shape_1" data-name="elliptical_shape 1" transform="translate(40)" fill="none" stroke="#fff" stroke-width="1" opacity="0.5">
							<circle cx="6" cy="6" r="6" stroke="none"/>
							<circle cx="6" cy="6" r="5.5" fill="none"/>
						</g>
						<g id="elliptical_shape_2" data-name="elliptical_shape 2" transform="translate(20)" fill="none" stroke="#fff" stroke-width="1" opacity="0.5">
							<circle cx="6" cy="6" r="6" stroke="none"/>
							<circle cx="6" cy="6" r="5.5" fill="none"/>
						</g>
						<g id="elliptical_shape_3" data-name="elliptical_shape 3" fill="none" stroke="#fff" stroke-width="1" opacity="0.5">
							<circle cx="6" cy="6" r="6" stroke="none"/>
							<circle cx="6" cy="6" r="5.5" fill="none"/>
						</g>
					</g>
				</g>
				<text id="NameText" class="text" style="--order: 1" transform="translate(262 113)" fill="#bfbfbf" font-weight="500"><tspan x="0" y="0">${name}</tspan></text>
				<text id="AgeText" class="text" style="--order: 2" transform="translate(262 154)" fill="#bfbfbf" font-weight="500"><tspan x="0" y="0">${age}</tspan></text>
				<text id="LocalText" class="text" style="--order: 3" transform="translate(262 195)" fill="#bfbfbf" font-weight="500"><tspan x="0" y="0">${
					local[0].toUpperCase() + local.slice(1)
				}</tspan></text>
				<text id="TypeText" class="text" style="--order: 4" transform="translate(261 236)" fill="#bfbfbf" font-weight="500"><tspan x="0" y="0">${type}</tspan></text>
				<text id="Name" class="text" style="--order: 1" transform="translate(127 113)" fill="#83a5c0" font-weight="500"><tspan x="0" y="0">Name</tspan></text>
				<text id="Age" class="text" style="--order: 2" transform="translate(127 154)" fill="#83a5c0" font-weight="500"><tspan x="0" y="0">Age</tspan></text>
				<text id="Local" class="text" style="--order: 3" transform="translate(127 195)" fill="#83a5c0" font-weight="500"><tspan x="0" y="0">Local</tspan></text>
				<text id="Type" class="text" style="--order: 4" transform="translate(127 236)" fill="#83a5c0" font-weight="500"><tspan x="0" y="0">Type</tspan></text>
			</g>
		</svg>
	`
}

export default Profile
