import { useRef } from "react";
import { motion } from "framer-motion";

export function Magnetic({ children, strength = 0.3, className = "" }) {
	const ref = useRef(null);

	const onMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const x = (e.clientX - (r.left + r.width / 2)) * strength;
		const y = (e.clientY - (r.top + r.height / 2)) * strength;
		el.style.transform = `translate(${x}px, ${y}px)`;
	};
	const reset = () => {
		if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
	};

	return (
		<motion.div
			ref={ref}
			onMouseMove={onMove}
			onMouseLeave={reset}
			className={`inline-block transition-transform duration-200 ease-out will-change-transform ${className}`}
		>
			{children}
		</motion.div>
	);
}
