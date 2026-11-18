import { Reveal } from "./Reveal";

export function SectionHeading({ eyebrow, title, subtitle, index }) {
	return (
		<div className="relative mb-12 max-w-2xl">
			{index && (
				<span
					aria-hidden="true"
					className="pointer-events-none absolute -left-1 -top-7 select-none text-[4rem] font-extrabold leading-none text-white/[0.03] sm:-top-10 sm:text-[7rem]"
				>
					{index}
				</span>
			)}
			{eyebrow && (
				<Reveal>
					<span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
						<span className="h-px w-8 bg-[var(--color-accent)]" />
						{eyebrow}
					</span>
				</Reveal>
			)}
			<Reveal delay={1}>
				<h2 className="relative mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
					{title}
				</h2>
			</Reveal>
			{subtitle && (
				<Reveal delay={2}>
					<p className="relative mt-4 text-base leading-relaxed text-[var(--color-muted)]">
						{subtitle}
					</p>
				</Reveal>
			)}
		</div>
	);
}
