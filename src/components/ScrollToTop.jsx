import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { animateScroll } from "react-scroll";

export function ScrollToTop() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const onScroll = () => setShow(window.scrollY > 600);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	if (!show) return null;

	return (
		<button
			onClick={() => animateScroll.scrollToTop({ duration: 500 })}
			aria-label="Scroll to top"
			className="glass fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-accent)] shadow-lg transition-all hover:-translate-y-1 hover:border-[var(--color-accent)]"
		>
			<FaArrowUp />
		</button>
	);
}
