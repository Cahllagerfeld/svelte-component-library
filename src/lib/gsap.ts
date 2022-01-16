import { gsap } from 'gsap';

export function animate(node: gsap.TweenTarget, { type, ...args }: animateProps) {
	const method = gsap[type];
	return method(node, args);
}

export interface animateProps extends gsap.TweenVars {
	type: string;
}
