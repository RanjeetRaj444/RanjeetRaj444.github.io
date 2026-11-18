import { useRef } from "react";

export function SpotlightCard({ children, className = "", as = "div", ...props }) {
	const ref = useRef(null);
	const Tag = as;

	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		el.style.setProperty("--mx", `${e.clientX - r.left}px`);
		el.style.setProperty("--my", `${e.clientY - r.top}px`);
	};

	return (
		<Tag
			ref={ref}
			onMouseMove={onMove}
			className={`spotlight glass ${className}`}
			{...props}
		>
			{children}
		</Tag>
	);
}
