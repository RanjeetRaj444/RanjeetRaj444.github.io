import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { data } from "../data/Data";
import { SectionHeading } from "../components/ui/SectionHeading";
import { SpotlightCard } from "../components/ui/SpotlightCard";
import { BrowserFrame } from "../components/ui/BrowserFrame";

function ProjectCard({ p, featured }) {
	return (
		<SpotlightCard className="glass-hover group flex h-full flex-col rounded-[var(--radius-xl2)] p-4">
			<a href={p.demo} target="_blank" rel="noreferrer" className="block">
				<BrowserFrame url={p.demo}>
					<img
						src={p.image}
						alt={p.title}
						loading="lazy"
						className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
					/>
				</BrowserFrame>
			</a>

			<div className="flex flex-1 flex-col px-1 pt-4">
				<div className="flex flex-wrap items-center gap-2">
					<h3 className="text-lg font-semibold">{p.title}</h3>
					{featured && (
						<span className="inline-flex items-center gap-1 rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 px-2 py-0.5 text-[10px] font-semibold text-[var(--color-accent)]">
							<FaStar className="text-[8px]" /> Featured
						</span>
					)}
				</div>
				<p className="text-xs font-medium text-[var(--color-accent)]">
					{p.projectType}
				</p>
				<p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
					{p.des}
				</p>

				<div className="mt-4 flex flex-wrap gap-1.5">
					{p.techStach.slice(0, 7).map((t, ti) => (
						<span
							key={ti}
							className="flex h-8 w-8 items-center justify-center rounded-md border border-[var(--color-border)] bg-white/[0.03] p-1.5"
						>
							<img src={t} alt="" className="h-full w-full object-contain" />
						</span>
					))}
				</div>

				<div className="mt-5 flex gap-3">
					<a
						href={p.github}
						target="_blank"
						rel="noreferrer"
						className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
					>
						<FaGithub /> Code
					</a>
					<a
						href={p.demo}
						target="_blank"
						rel="noreferrer"
						className="shimmer inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-4 py-2 text-sm font-semibold text-[#06121f] transition-all hover:-translate-y-0.5"
					>
						<FaExternalLinkAlt className="text-xs" /> Live Demo
					</a>
				</div>
			</div>
		</SpotlightCard>
	);
}

export function Projects() {
	const lineRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: lineRef,
		offset: ["start 75%", "end 55%"],
	});
	const scaleY = useSpring(scrollYProgress, {
		stiffness: 70,
		damping: 22,
		restDelta: 0.001,
	});

	return (
		<section id="projects" className="section-pad bg-[var(--color-bg-soft)]">
			<div className="container-x">
				<SectionHeading
					index="04"
					eyebrow="Projects"
					title="Featured work"
					subtitle="A selection of applications I've designed and built — each shipped with a live demo and open source code."
				/>

				<div ref={lineRef} className="relative mx-auto max-w-5xl">
					{/* Spine: faint track + animated fill */}
					<div
						aria-hidden="true"
						className="absolute bottom-0 left-5 top-2 w-px -translate-x-1/2 bg-[var(--color-border)] lg:left-1/2"
					/>
					<motion.div
						aria-hidden="true"
						style={{ scaleY }}
						className="absolute bottom-0 left-5 top-2 w-px -translate-x-1/2 origin-top bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent-2)] to-[var(--color-accent-3)] shadow-[0_0_12px_rgba(56,189,248,0.6)] lg:left-1/2"
					/>

					<div className="flex flex-col gap-10 lg:gap-6">
						{data.map((p, i) => {
							const onLeft = i % 2 === 0;
							return (
								<div
									key={p.id}
									className="relative lg:grid lg:grid-cols-2 lg:gap-12"
								>
									{/* Node */}
									<motion.span
										aria-hidden="true"
										initial={{ scale: 0, opacity: 0 }}
										whileInView={{ scale: 1, opacity: 1 }}
										viewport={{ once: true, margin: "-60px" }}
										transition={{ type: "spring", stiffness: 260, damping: 18 }}
										className="absolute left-5 top-3 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-[var(--color-accent)]/40 bg-[var(--color-bg)] text-xs font-bold text-[var(--color-accent)] shadow-[0_0_20px_-4px_rgba(56,189,248,0.6)] lg:left-1/2"
									>
										<span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[var(--color-accent)]/20 [animation-duration:3s]" />
										{String(i + 1).padStart(2, "0")}
									</motion.span>

									{/* Card — alternating side on desktop */}
									<motion.div
										initial={{ opacity: 0, x: onLeft ? -48 : 48, y: 24 }}
										whileInView={{ opacity: 1, x: 0, y: 0 }}
										viewport={{ once: true, margin: "-80px" }}
										transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
										className={`pl-12 lg:pl-0 ${
											onLeft
												? "lg:col-start-1 lg:pr-10"
												: "lg:col-start-2 lg:row-start-1 lg:pl-10"
										}`}
									>
										<ProjectCard p={p} featured={i === 0} />
									</motion.div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
