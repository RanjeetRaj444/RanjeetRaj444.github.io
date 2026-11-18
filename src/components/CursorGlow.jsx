import { useEffect, useRef, useState } from "react";

export function CursorGlow() {
	const ref = useRef(null);
	const [enabled, setEnabled] = useState(false);

	useEffect(() => {
		// Skip on touch devices or when reduced motion is preferred
		const fine = window.matchMedia("(pointer: fine)").matches;
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (!fine || reduced) return;
		setEnabled(true);

		let raf = 0;
		let tx = window.innerWidth / 2;
		let ty = window.innerHeight / 2;
		let x = tx;
		let y = ty;

		const onMove = (e) => {
			tx = e.clientX;
			ty = e.clientY;
		};
		const tick = () => {
			x += (tx - x) * 0.12;
			y += (ty - y) * 0.12;
			if (ref.current) {
				ref.current.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`;
			}
			raf = requestAnimationFrame(tick);
		};

		window.addEventListener("mousemove", onMove, { passive: true });
		raf = requestAnimationFrame(tick);
		return () => {
			window.removeEventListener("mousemove", onMove);
			cancelAnimationFrame(raf);
		};
	}, []);

	if (!enabled) return null;

	return (
		<div
			ref={ref}
			aria-hidden="true"
			className="pointer-events-none fixed left-0 top-0 z-30 hidden h-[500px] w-[500px] rounded-full opacity-60 blur-[90px] will-change-transform lg:block"
			style={{
				background:
					"radial-gradient(circle, rgba(56,189,248,0.10), rgba(129,140,248,0.06) 40%, transparent 70%)",
			}}
		/>
	);
}
