import { FaBriefcase, FaExternalLinkAlt } from "react-icons/fa";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Reveal } from "../components/ui/Reveal";
import { experience } from "../data/info";

export function Experience() {
	return (
		<section id="experience" className="section-pad bg-[var(--color-bg-soft)]">
			<div className="container-x">
				<SectionHeading
					index="02"
					eyebrow="Experience"
					title="Where I've worked"
					subtitle="My professional journey building real-world web applications."
				/>

				<div className="relative mx-auto max-w-3xl">
					{/* vertical line */}
					<div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-accent)]/60 via-[var(--color-border)] to-transparent md:left-5" />

					<div className="flex flex-col gap-8">
						{experience.map((job, i) => (
							<Reveal key={i} delay={i}>
								<div className="relative pl-12 md:pl-16">
									{/* node */}
									<span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full glass text-[var(--color-accent)] md:h-11 md:w-11">
										<FaBriefcase />
									</span>

									<div className="glass glass-hover rounded-[var(--radius-xl2)] p-6">
										<div className="flex flex-wrap items-start justify-between gap-2">
											<div>
												<h3 className="text-lg font-semibold">{job.role}</h3>
												<p className="text-sm text-[var(--color-accent)]">
													{job.companyUrl ? (
														<a
															href={job.companyUrl}
															target="_blank"
															rel="noreferrer"
															className="inline-flex items-center gap-1 hover:underline"
														>
															{job.company} <FaExternalLinkAlt className="text-xs" />
														</a>
													) : (
														job.company
													)}
													{job.location ? ` · ${job.location}` : ""}
												</p>
											</div>
											<span className="rounded-full glass px-3 py-1 text-xs font-medium text-[var(--color-muted)]">
												{job.start} — {job.end}
											</span>
										</div>

										{job.summary && (
											<p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
												{job.summary}
											</p>
										)}

										<ul className="mt-4 space-y-2">
											{job.points.map((pt, j) => (
												<li
													key={j}
													className="flex gap-2 text-sm leading-relaxed text-[var(--color-muted)]"
												>
													<span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
													{pt}
												</li>
											))}
										</ul>

										{job.tech?.length > 0 && (
											<div className="mt-4 flex flex-wrap gap-2">
												{job.tech.map((t) => (
													<span
														key={t}
														className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-muted)]"
													>
														{t}
													</span>
												))}
											</div>
										)}
									</div>
								</div>
							</Reveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
