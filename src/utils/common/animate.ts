/**
 * style内で使用するフェードアップアニメーション
 * @returns keyframes fadeInUp
 */
export const fadeInUp = () => {
	return `
@keyframes fadeInUp {
	0%, 5% {
		opacity: 0;
		transform: translateY(20%);
	}
	10%, 90% {
		opacity: 1;
		transform: translateY(0);
	}
	95%, 100% {
		opacity: 0;
		transform: translateY(-5%);
	}
}`
}

/**
 * style内で使用するドロップインアニメーション
 * @returns keyframes dropIn
 */
export const dropIn = () => {
	return `
@keyframes dropIn {
	10% {
		opacity: 0;
	}
	20%, 80% {
		opacity: 1;
	}
	85%, 100% {
		opacity: 0;
	}
}`
}
