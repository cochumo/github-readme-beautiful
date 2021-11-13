const Neomorphic = (
	text1: string = 'text1',
	text2: string = 'text2',
	text3: string = 'text3',
	text4: string = 'text4'
) => {
	return `
	<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="846" height="635" viewBox="0 0 846 635">
		<style>
			@import url('http://fonts.cdnfonts.com/css/poetsen-one');
		</style>
		<defs>
			<linearGradient id="linear-gradient" x1="-0.147" y1="-0.41" x2="1.202" y2="1.35" gradientUnits="objectBoundingBox">
				<stop offset="0" stop-color="#f8f8fc"/>
				<stop offset="1" stop-color="#e1e2e8"/>
			</linearGradient>
			<clipPath id="clip-path">
				<rect width="769" height="573" fill="none"/>
			</clipPath>
			<filter id="Rectangle_DS" x="45" y="30" width="762" height="140" filterUnits="userSpaceOnUse">
				<feOffset dx="3" dy="3" input="SourceAlpha"/>
				<feGaussianBlur stdDeviation="10" result="blur"/>
				<feFlood flood-color="#24415d" flood-opacity="0.302"/>
				<feComposite operator="in" in2="blur"/>
				<feComposite in="SourceGraphic"/>
			</filter>
			<linearGradient id="linear-gradient-2" x1="1.249" y1="1" x2="-0.771" y2="-0.656" gradientUnits="objectBoundingBox">
				<stop offset="0" stop-color="#f2f3f6"/>
				<stop offset="1" stop-color="#e5e6ec"/>
			</linearGradient>
			<filter id="Rectangle_WS" x="38" y="23" width="762" height="140" filterUnits="userSpaceOnUse">
				<feOffset dx="-4" dy="-4" input="SourceAlpha"/>
				<feGaussianBlur stdDeviation="10" result="blur-2"/>
				<feFlood flood-color="#fff"/>
				<feComposite operator="in" in2="blur-2"/>
				<feComposite in="SourceGraphic"/>
			</filter>
			<filter id="Rectangle_DS-2" x="45" y="177" width="762" height="140" filterUnits="userSpaceOnUse">
				<feOffset dx="3" dy="3" input="SourceAlpha"/>
				<feGaussianBlur stdDeviation="10" result="blur-3"/>
				<feFlood flood-color="#24415d" flood-opacity="0.302"/>
				<feComposite operator="in" in2="blur-3"/>
				<feComposite in="SourceGraphic"/>
			</filter>
			<filter id="Rectangle_WS-2" x="38" y="170" width="762" height="140" filterUnits="userSpaceOnUse">
				<feOffset dx="-4" dy="-4" input="SourceAlpha"/>
				<feGaussianBlur stdDeviation="10" result="blur-4"/>
				<feFlood flood-color="#fff"/>
				<feComposite operator="in" in2="blur-4"/>
				<feComposite in="SourceGraphic"/>
			</filter>
			<filter id="Rectangle_DS-3" x="45" y="324" width="762" height="140" filterUnits="userSpaceOnUse">
				<feOffset dx="3" dy="3" input="SourceAlpha"/>
				<feGaussianBlur stdDeviation="10" result="blur-5"/>
				<feFlood flood-color="#24415d" flood-opacity="0.302"/>
				<feComposite operator="in" in2="blur-5"/>
				<feComposite in="SourceGraphic"/>
			</filter>
			<filter id="Rectangle_WS-3" x="38" y="317" width="762" height="140" filterUnits="userSpaceOnUse">
				<feOffset dx="-4" dy="-4" input="SourceAlpha"/>
				<feGaussianBlur stdDeviation="10" result="blur-6"/>
				<feFlood flood-color="#fff"/>
				<feComposite operator="in" in2="blur-6"/>
				<feComposite in="SourceGraphic"/>
			</filter>
			<filter id="Rectangle_DS-4" x="45" y="471" width="762" height="140" filterUnits="userSpaceOnUse">
				<feOffset dx="3" dy="3" input="SourceAlpha"/>
				<feGaussianBlur stdDeviation="10" result="blur-7"/>
				<feFlood flood-color="#24415d" flood-opacity="0.302"/>
				<feComposite operator="in" in2="blur-7"/>
				<feComposite in="SourceGraphic"/>
			</filter>
			<filter id="Rectangle_WS-4" x="38" y="464" width="762" height="140" filterUnits="userSpaceOnUse">
				<feOffset dx="-4" dy="-4" input="SourceAlpha"/>
				<feGaussianBlur stdDeviation="10" result="blur-8"/>
				<feFlood flood-color="#fff"/>
				<feComposite operator="in" in2="blur-8"/>
				<feComposite in="SourceGraphic"/>
			</filter>
			<clipPath id="clip-list">
				<rect width="846" height="635"/>
			</clipPath>
		</defs>
		<g id="list" clip-path="url(#clip-list)">
			<rect width="846" height="635" fill="url(#linear-gradient)"/>
			<g id="コンポーネント_5_1" data-name="コンポーネント 5 – 1" transform="translate(38 23)">
				<g id="リピートグリッド_1" data-name="リピートグリッド 1" clip-path="url(#clip-path)">
					<g id="グループ_31" data-name="グループ 31" transform="translate(34 34)">
						<g id="Component_1_-_Big_button" data-name="Component 1 - Big button">
							<g transform="matrix(1, 0, 0, 1, -72, -57)" filter="url(#Rectangle_DS)">
								<rect id="Rectangle_DS-5" data-name="Rectangle DS" width="702" height="80" rx="16" transform="translate(72 57)" fill="#edeef2" opacity="0.8"/>
							</g>
							<g transform="matrix(1, 0, 0, 1, -72, -57)" filter="url(#Rectangle_WS)">
								<rect id="Rectangle_WS-5" data-name="Rectangle WS" width="702" height="80" rx="16" transform="translate(72 57)" fill="url(#linear-gradient-2)"/>
							</g>
						</g>
						<text id="Text1" transform="translate(351 48)" fill="#959698" font-size="29" font-family="PoetsenOne-Regular, Poetsen One"><tspan x="-38.106" y="0">${text1.toUpperCase()}</tspan></text>
					</g>
					<g id="グループ_31-2" data-name="グループ 31" transform="translate(34 181)">
						<g id="Component_1_-_Big_button-2" data-name="Component 1 - Big button">
							<g transform="matrix(1, 0, 0, 1, -72, -204)" filter="url(#Rectangle_DS-2)">
								<rect id="Rectangle_DS-6" data-name="Rectangle DS" width="702" height="80" rx="16" transform="translate(72 204)" fill="#edeef2" opacity="0.8"/>
							</g>
							<g transform="matrix(1, 0, 0, 1, -72, -204)" filter="url(#Rectangle_WS-2)">
								<rect id="Rectangle_WS-6" data-name="Rectangle WS" width="702" height="80" rx="16" transform="translate(72 204)" fill="url(#linear-gradient-2)"/>
							</g>
						</g>
						<text id="Text2" transform="translate(351 48)" fill="#959698" font-size="29" font-family="PoetsenOne-Regular, Poetsen One"><tspan x="-40.716" y="0">${text2.toUpperCase()}</tspan></text>
					</g>
					<g id="グループ_31-3" data-name="グループ 31" transform="translate(34 328)">
						<g id="Component_1_-_Big_button-3" data-name="Component 1 - Big button">
							<g transform="matrix(1, 0, 0, 1, -72, -351)" filter="url(#Rectangle_DS-3)">
								<rect id="Rectangle_DS-7" data-name="Rectangle DS" width="702" height="80" rx="16" transform="translate(72 351)" fill="#edeef2" opacity="0.8"/>
							</g>
							<g transform="matrix(1, 0, 0, 1, -72, -351)" filter="url(#Rectangle_WS-3)">
								<rect id="Rectangle_WS-7" data-name="Rectangle WS" width="702" height="80" rx="16" transform="translate(72 351)" fill="url(#linear-gradient-2)"/>
							</g>
						</g>
						<text id="Text3" transform="translate(351 48)" fill="#959698" font-size="29" font-family="PoetsenOne-Regular, Poetsen One"><tspan x="-40.513" y="0">${text3.toUpperCase()}</tspan></text>
					</g>
					<g id="グループ_31-4" data-name="グループ 31" transform="translate(34 475)">
						<g id="Component_1_-_Big_button-4" data-name="Component 1 - Big button">
							<g transform="matrix(1, 0, 0, 1, -72, -498)" filter="url(#Rectangle_DS-4)">
								<rect id="Rectangle_DS-8" data-name="Rectangle DS" width="702" height="80" rx="16" transform="translate(72 498)" fill="#edeef2" opacity="0.8"/>
							</g>
							<g transform="matrix(1, 0, 0, 1, -72, -498)" filter="url(#Rectangle_WS-4)">
								<rect id="Rectangle_WS-8" data-name="Rectangle WS" width="702" height="80" rx="16" transform="translate(72 498)" fill="url(#linear-gradient-2)"/>
							</g>
						</g>
						<text id="Text4" transform="translate(351 48)" fill="#959698" font-size="29" font-family="PoetsenOne-Regular, Poetsen One"><tspan x="-41.006" y="0">${text4.toUpperCase()}</tspan></text>
					</g>
				</g>
			</g>
		</g>
	</svg>
`
}

export default Neomorphic
