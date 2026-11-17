import { FaCheckCircle } from "react-icons/fa";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { about, profile, personal } from "../data/info";

export function About() {
	return (
		<section id="about" className="section-pad">
			<div className="container-x">
				<SectionHeading eyebrow="About Me" title={about.heading} />

				<div className="grid items-center gap-12 md:grid-cols-5">
					{/* Image */}
					<Reveal className="md:col-span-2">
						<div className="relative mx-auto max-w-sm">
							<div className="absolute -inset-3 -z-10 rounded-[var(--radius-xl2)] bg-gradient-to-tr from-[var(--color-accent)]/30 to-[var(--color-accent-2)]/30 blur-2xl" />
							<div className="glass overflow-hidden rounded-[var(--radius-xl2)] p-2">
								<img
									src={profile}
									alt={personal.name}
									className="w-full rounded-[calc(var(--radius-xl2)-0.5rem)] object-cover"
									loading="lazy"
								/>
							</div>
						</div>
					</Reveal>

					{/* Text */}
					<div className="md:col-span-3">
						{about.body.map((p, i) => (
							<Reveal key={i} delay={i + 1}>
								<p className="mb-4 text-base leading-relaxed text-[var(--color-muted)]">
									{p}
								</p>
							</Reveal>
						))}

						<Reveal delay={3}>
							<ul className="mt-6 grid gap-3 sm:grid-cols-2">
								{about.highlights.map((h) => (
									<li
										key={h}
										className="flex items-start gap-3 text-sm text-[var(--color-ink)]"
									>
										<FaCheckCircle className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
										{h}
									</li>
								))}
							</ul>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	);
}
