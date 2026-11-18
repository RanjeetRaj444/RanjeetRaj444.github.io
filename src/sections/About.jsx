import { FaCheckCircle, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { SpotlightCard } from "../components/ui/SpotlightCard";
import { Marquee } from "../components/ui/Marquee";
import { about, profile, personal, stats } from "../data/info";
import { skillGroups } from "../data/skills";

const allTech = skillGroups.flatMap((g) => g.skills);

export function About() {
	return (
		<section id="about" className="section-pad">
			<div className="container-x">
				<SectionHeading index="01" eyebrow="About Me" title={about.heading} />

				<div className="grid gap-4 md:grid-cols-6">
					{/* Bio + portrait (big tile) */}
					<Reveal className="md:col-span-4 md:row-span-2">
						<SpotlightCard className="h-full rounded-[var(--radius-xl2)] p-6 sm:p-7">
							<div className="flex flex-col gap-6 sm:flex-row sm:items-center">
								<div className="relative shrink-0">
									<div className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-tr from-[var(--color-accent)]/30 to-[var(--color-accent-2)]/30 blur-xl" />
									<img
										src={profile}
										alt={personal.name}
										loading="lazy"
										className="h-32 w-32 rounded-2xl object-cover sm:h-40 sm:w-40"
									/>
								</div>
								<div>
									{about.body.map((p, i) => (
										<p
											key={i}
											className="mb-3 text-sm leading-relaxed text-[var(--color-muted)]"
										>
											{p}
										</p>
									))}
								</div>
							</div>
						</SpotlightCard>
					</Reveal>

					{/* Currently / role */}
					<Reveal delay={1} className="md:col-span-2">
						<SpotlightCard className="h-full rounded-[var(--radius-xl2)] p-6">
							<div className="mb-3 flex items-center gap-2 text-[var(--color-accent)]">
								<FaBriefcase />
								<span className="text-xs font-semibold uppercase tracking-wider">
									Currently
								</span>
							</div>
							<p className="text-sm leading-relaxed text-[var(--color-ink)]">
								Building real-time web & desktop apps as a{" "}
								<span className="font-semibold accent-text">Full Stack Developer</span>{" "}
								at Whitestone Infotech.
							</p>
							<div className="mt-4 flex items-center gap-2 text-sm text-[var(--color-muted)]">
								<FaMapMarkerAlt className="text-[var(--color-accent)]" />
								{personal.location} ·{" "}
								<span className="inline-flex items-center gap-1.5">
									<span className="relative flex h-2 w-2">
										<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
										<span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
									</span>
									Open to work
								</span>
							</div>
						</SpotlightCard>
					</Reveal>

					{/* Stats */}
					<Reveal delay={2} className="md:col-span-2">
						<SpotlightCard className="h-full rounded-[var(--radius-xl2)] p-6">
							<div className="grid grid-cols-3 gap-2 text-center">
								{stats.map((s) => (
									<div key={s.label}>
										<div className="text-2xl font-bold accent-text">{s.value}</div>
										<div className="mt-1 text-[11px] leading-tight text-[var(--color-faint)]">
											{s.label}
										</div>
									</div>
								))}
							</div>
						</SpotlightCard>
					</Reveal>

					{/* What I do */}
					<Reveal delay={1} className="md:col-span-3">
						<SpotlightCard className="h-full rounded-[var(--radius-xl2)] p-6">
							<h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-muted)]">
								What I do
							</h3>
							<ul className="grid gap-3 sm:grid-cols-2">
								{about.highlights.map((h) => (
									<li
										key={h}
										className="flex items-start gap-2.5 text-sm text-[var(--color-ink)]"
									>
										<FaCheckCircle className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
										{h}
									</li>
								))}
							</ul>
						</SpotlightCard>
					</Reveal>

					{/* Tech marquee */}
					<Reveal delay={2} className="md:col-span-3">
						<SpotlightCard className="flex h-full flex-col justify-center rounded-[var(--radius-xl2)] p-6">
							<h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-muted)]">
								Tech I use daily
							</h3>
							<Marquee
								items={allTech}
								renderItem={({ name, icon: Icon, color }) => (
									<span className="flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-white/[0.03] px-3 py-2 text-sm text-[var(--color-ink)]">
										<Icon style={{ color }} /> {name}
									</span>
								)}
							/>
						</SpotlightCard>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
