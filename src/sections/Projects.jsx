import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { data } from "../data/Data";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";

export function Projects() {
	return (
		<section id="projects" className="section-pad bg-[var(--color-bg-soft)]">
			<div className="container-x">
				<SectionHeading
					eyebrow="Projects"
					title="Featured work"
					subtitle="A selection of applications I've designed and built. Each one links to its live demo and source code."
				/>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{data.map((p, i) => (
						<Reveal key={p.id} delay={i % 3}>
							<article className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl2)]">
								{/* Image */}
								<div className="relative aspect-video overflow-hidden">
									<img
										src={p.image}
										alt={p.title}
										loading="lazy"
										className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-transparent to-transparent opacity-70" />
									<span className="absolute left-3 top-3 rounded-full glass px-3 py-1 text-xs font-medium text-[var(--color-ink)]">
										{p.projectType}
									</span>
								</div>

								{/* Body */}
								<div className="flex flex-1 flex-col p-5">
									<h3 className="text-lg font-semibold">{p.title}</h3>
									<p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
										{p.des}
									</p>

									{/* Tech */}
									<div className="mt-4 flex flex-wrap gap-1.5">
										{p.techStach.slice(0, 7).map((t, ti) => (
											<span
												key={ti}
												className="flex h-7 w-7 items-center justify-center rounded-md border border-[var(--color-border)] bg-white/[0.03] p-1"
											>
												<img src={t} alt="" className="h-full w-full object-contain" />
											</span>
										))}
									</div>

									{/* Links */}
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
											className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] px-4 py-2 text-sm font-semibold text-[#06121f] transition-all hover:-translate-y-0.5"
										>
											<FaExternalLinkAlt className="text-xs" /> Demo
										</a>
									</div>
								</div>
							</article>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
