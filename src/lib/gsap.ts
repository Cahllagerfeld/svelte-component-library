import { gsap } from 'gsap';

export function animate(node: Element, { type, ...args }) {
	const method = gsap[type];
	return method(node, args);
}
