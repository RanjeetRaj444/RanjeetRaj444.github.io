import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personal } from "../data/info";

export function Preloader() {
	const [done, setDone] = useState(false);

	useEffect(() => {
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const t = setTimeout(() => setDone(true), reduced ? 200 : 1900);
		return () => clearTimeout(t);
	}, []);

	return (
		<AnimatePresence>
			{!done && (
				<motion.div
					className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-bg)]"
					exit={{ opacity: 0 }}
					transition={{ duration: 0.6, ease: "easeInOut" }}
				>
					<div className="flex flex-col items-center gap-6">
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
							className="text-4xl font-extrabold tracking-tight sm:text-5xl"
						>
							<span className="accent-text-anim">{personal.firstName}</span>
							<span className="text-[var(--color-muted)]">.dev</span>
						</motion.div>

						{/* progress bar */}
						<div className="h-0.5 w-40 overflow-hidden rounded-full bg-white/10">
							<motion.div
								className="h-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)]"
								initial={{ width: "0%" }}
								animate={{ width: "100%" }}
								transition={{ duration: 1.5, ease: "easeInOut" }}
							/>
						</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
