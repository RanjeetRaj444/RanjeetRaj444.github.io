import { Reveal } from "./Reveal";

export function SectionHeading({ eyebrow, title, subtitle }) {
	return (
		<div className="mb-12 max-w-2xl">
			{eyebrow && (
				<Reveal>
					<span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-accent)]">
						<span className="h-px w-8 bg-[var(--color-accent)]" />
						{eyebrow}
					</span>
				</Reveal>
			)}
			<Reveal delay={1}>
				<h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
					{title}
				</h2>
			</Reveal>
			{subtitle && (
				<Reveal delay={2}>
					<p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
						{subtitle}
					</p>
				</Reveal>
			)}
		</div>
	);
}
